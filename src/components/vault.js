import React from 'react'
import moment from 'moment'
// import { NavLink } from 'react-router-dom'
import getFormattedNumber from '../functions/get-formatted-number'
import Address from './address'
import Boxes from './boxes'
// import Clipboard from 'react-clipboard.js'
// import ReactTooltip from 'react-tooltip'

export default function initVault({ vault, platformTokenApyPercent, apr=72, liquidity='ETH', token, UNDERLYING_DECIMALS=18, UNDERLYING_SYMBOL='DAI', expiration_time }) {

    let { BigNumber, alertify } = window
    let token_symbol = UNDERLYING_SYMBOL

    // token, staking

    const TOKEN_DECIMALS = UNDERLYING_DECIMALS

    function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    function jsonToCsv(items) {
        const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
        const header = Object.keys(items[0])
        let csv = items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
        csv.unshift(header.join(','))
        csv = csv.join('\r\n')
        return csv
    }

    window.handleDownload = ({ stakers, stakingTimes, lastClaimedTimes, stakedTokens }) => {
        let list = []
        stakers.forEach((staker, index) => {
            list.push({
                staker_address: staker,
                staking_timestamp_unix: stakingTimes[index],
                lastclaimed_timestamp_unix: lastClaimedTimes[index],
                staking_time: getDate(stakingTimes[index] * 1e3),
                lastclaimed_time: getDate(lastClaimedTimes[index] * 1e3),
                staked_tokens: stakedTokens[index]
            })
        })
        download('depositors-list.csv', jsonToCsv(list))

        function getDate(timestamp) {
            let a = new Date(timestamp)
            return a.toUTCString()
        }
    }

    class Vault extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                token_balance: '',
                platform_token_balance: '',

                pendingDivsEth: '',
                pendingDivsDyp: '',
                pendingDivsToken: '',
                pendingDivsComp: '',

                totalEarnedEth: '',
                totalEarnedDyp: '',
                totalEarnedToken: '',
                totalEarnedComp: '',

                cliffTime: '',
                stakingTime: '',
                depositedTokens: '',
                totalDepositedTokens: '',
                lastClaimedTime: '',

                depositAmount: '',
                withdrawAmount: '',
                rdepositAmount: '',

                coinbase: '',
                tvl_usd: '...',
                apy_percent: '...',                
                owner: null,
                approxDeposit: 100 ,
                approxDays: 365,
                
                usdPerToken: '',
                usdPerDepositToken: '',

                gasPrice: '',

                contractDeployTime: '',
                disburseDuration: ''

            }
        }

        handleListDownload = async (e) => {
            e.preventDefault()
            let m = window.alertify.message(`Processing...`)
            m.ondismiss = () => false
            let step = 100;
            let stakers = []
            let stakingTimes = []
            let lastClaimedTimes = []
            let stakedTokens = []
            let length = await vault.getNumberOfHolders()
            length = Number(length)
            try {
                for (let startIndex = 0; startIndex < length; startIndex += step) {
                    console.log({ startIndex, endIndex: startIndex + step })
                    let array = await vault.getDepositorsList(startIndex, Math.min(startIndex + step, length))
                    console.log(array)
                    stakers = stakers.concat(array.stakers)
                    stakingTimes = stakingTimes.concat(array.stakingTimestamps)
                    lastClaimedTimes = lastClaimedTimes.concat(array.lastClaimedTimeStamps)
                    stakedTokens = stakedTokens.concat(array.stakedTokens)
                }
                let result = { stakers, stakingTimes, lastClaimedTimes, stakedTokens }
                window.handleDownload(result)
            } catch (e) {
                console.error(e)
                alertify.error("Something went wrong while processing!")
            }
            finally {
                m.ondismiss = f => true
                m.dismiss()
            }
        }

        componentDidMount() {
            this.refreshBalance()
            window._refreshBalInterval = setInterval(this.refreshBalance, 8000)
            vault.getTvlUsdAndApyPercent(UNDERLYING_DECIMALS)
                .then(({tvl_usd, apy_percent}) => this.setState({tvl_usd, apy_percent}))
                .catch(console.error)

            fetch('https://data-api.defipulse.com/api/v1/egs/api/ethgasAPI.json?api-key=0cb24df6d59351fdfb85e84c264c1d89dada314bbd85bbb5bea318f7f995')
                .then(res => res.json())
                .then(data => this.setState({gasPrice: data.fast/10}))
                .catch(console.error)
        }

        componentWillUnmount() {
            clearInterval(window._refreshBalInterval)
        }

        handleApprove = (e) => {
            e.preventDefault()
            let amount = this.state.depositAmount
            amount = new BigNumber(amount).times(10**UNDERLYING_DECIMALS).toFixed(0)
            token.approve(vault._address, amount)
        }
        handleReinvestApprove = (e) => {
            e.preventDefault()
            let amount = this.state.rdepositAmount
            amount = new BigNumber(amount).times(10**18).toFixed(0)
            window.token_dyp.approve(window.config.constant_staking_address, amount)
        }
        handleStake = async (e) => {
            let amount = this.state.depositAmount
            amount = new BigNumber(amount).times(10**UNDERLYING_DECIMALS).toFixed(0)
            let value = await this.getMinEthFeeInWei()

            let FEE_PERCENT_TO_BUYBACK_X_100 = await vault.FEE_PERCENT_TO_BUYBACK_X_100()
            let feeAmountEth = new BigNumber(value).times(FEE_PERCENT_TO_BUYBACK_X_100).div(100e2).toFixed(0)

            let deadline = Math.floor(Date.now()/1e3 + window.config.tx_max_wait_seconds)
            let router = await window.getUniswapRouterContract()

            let WETH = await router.methods.WETH().call()
            let platformTokenAddress = window.config.token_dyp_address

            let path = [WETH, platformTokenAddress]

            let _amountOutMin_ethFeeBuyBack = await router.methods.getAmountsOut(feeAmountEth, path).call()
            _amountOutMin_ethFeeBuyBack = _amountOutMin_ethFeeBuyBack[_amountOutMin_ethFeeBuyBack.length - 1]
            _amountOutMin_ethFeeBuyBack = new BigNumber(_amountOutMin_ethFeeBuyBack).times(100 - window.config.slippage_tolerance_percent).div(100).toFixed(0)

            //console.log({ _amountOutMin_ethFeeBuyBack, deadline, value })
            vault.deposit([amount, _amountOutMin_ethFeeBuyBack, deadline], value)
        }
        handleReinvestDeposit = async (e) => {
            let amount = this.state.rdepositAmount
            amount = new BigNumber(amount).times(10**18).toFixed(0)
            window.handleReinvestDeposit(amount)
        }

        handleWithdraw = async (e) => {
            e.preventDefault()
            let amount = this.state.withdrawAmount
            amount = new BigNumber(amount).times(10**UNDERLYING_DECIMALS).toFixed(0)
            let value = await this.getMinEthFeeInWei()

            let FEE_PERCENT_X_100 = await vault.FEE_PERCENT_X_100()
            let FEE_PERCENT_TO_BUYBACK_X_100 = await vault.FEE_PERCENT_TO_BUYBACK_X_100()
            let buyBackFeeAmountEth = new BigNumber(value).times(FEE_PERCENT_TO_BUYBACK_X_100).div(100e2).toFixed(0)
            let feeAmountToken = new BigNumber(amount).times(FEE_PERCENT_X_100).div(100e2).toFixed(0)
            let buyBackFeeAmountToken = new BigNumber(feeAmountToken).times(FEE_PERCENT_TO_BUYBACK_X_100).div(100e2).toFixed(0)

            let deadline = Math.floor(Date.now()/1e3 + window.config.tx_max_wait_seconds)
            let router = await window.getUniswapRouterContract()

            let WETH = await router.methods.WETH().call()
            let platformTokenAddress = window.config.token_dyp_address

            let path = [WETH, platformTokenAddress]

            let _amountOutMin_ethFeeBuyBack = await router.methods.getAmountsOut(buyBackFeeAmountEth, path).call()
            _amountOutMin_ethFeeBuyBack = _amountOutMin_ethFeeBuyBack[_amountOutMin_ethFeeBuyBack.length - 1]
            _amountOutMin_ethFeeBuyBack = new BigNumber(_amountOutMin_ethFeeBuyBack).times(100 - window.config.slippage_tolerance_percent).div(100).toFixed(0)

            let tokenFeePath = [...new Set([token._address , WETH, platformTokenAddress].map(a => a.toLowerCase()))]

            let _amountOutMin_tokenFeeBuyBack = await router.methods.getAmountsOut(buyBackFeeAmountToken, tokenFeePath).call()
            _amountOutMin_tokenFeeBuyBack = _amountOutMin_tokenFeeBuyBack[_amountOutMin_tokenFeeBuyBack.length - 1]
            _amountOutMin_tokenFeeBuyBack = new BigNumber(_amountOutMin_tokenFeeBuyBack).times(100 - window.config.slippage_tolerance_percent).div(100).toFixed(0)
            

            //console.log({ _amountOutMin_ethFeeBuyBack, _amountOutMin_tokenFeeBuyBack, deadline, value })

            vault.withdraw([amount, _amountOutMin_ethFeeBuyBack, _amountOutMin_tokenFeeBuyBack, deadline], value)
        }

        getMinEthFeeInWei = async () => {
            let minEthFeeInWei = Number(await vault.MIN_ETH_FEE_IN_WEI())
            let calculatedFee = 0
            if (this.state.gasPrice) {
                calculatedFee = 400_000 * this.state.gasPrice * 10**9;
            }
            return Math.max(minEthFeeInWei, calculatedFee)
        }

        handleClaimDivs = async (e) => {
            e.preventDefault()
            let router = await window.getUniswapRouterContract()
            let _amountOutMin_platformTokens = [ 0 ];
            let depositTokenAddress = token._address
            let platformToken = window.config.token_dyp_address
            let WETH = await router.methods.WETH().call()
            
            let path = [...new Set([depositTokenAddress, WETH, platformToken].map(a => a.toLowerCase()))]

            //console.log({ path })
            try {
                if (Number(this.state.pendingDivsDyp)) {
                    //alert(this.state.pendingDivsDyp)
                    _amountOutMin_platformTokens = await router.methods.getAmountsOut(this.state.pendingDivsDyp, path).call()
                }

            } catch (e) {
                console.warn(e)
            }

            //_amountOutMin_platformTokens = await router.methods.getAmountsOut(this.state.pendingDivsDyp, path).call()

            _amountOutMin_platformTokens = _amountOutMin_platformTokens[_amountOutMin_platformTokens.length - 1]
            _amountOutMin_platformTokens = new BigNumber(_amountOutMin_platformTokens).times(100 - window.config.slippage_tolerance_percent).div(100).toFixed(0)

            //console.log({ _amountOutMin_platformTokens })
            //alert("reached here!")
            vault.claim([_amountOutMin_platformTokens])
        }

        handleSetMaxDeposit = (e) => {
            e.preventDefault()
            this.setState({ depositAmount: new BigNumber(this.state.token_balance).div(10**UNDERLYING_DECIMALS).toFixed(UNDERLYING_DECIMALS) })
        }
        rhandleSetMaxDeposit = (e) => {
            e.preventDefault()
            this.setState({ rdepositAmount: new BigNumber(this.state.platform_token_balance).div(1e18).toFixed(18) })
        }
        handleSetMaxWithdraw = (e) => {
            e.preventDefault()
            this.setState({ withdrawAmount: new BigNumber(this.state.depositedTokens).div(10**UNDERLYING_DECIMALS).toFixed(UNDERLYING_DECIMALS) })
        }

        getAPY = () => {
            return apr
        }

        refreshBalance = async () => {
            let coinbase = window.coinbase_address
            this.setState({ coinbase })
            let pendingRewardsInToken = 0;
            try {
                let _bal = token.balanceOf(coinbase)
                let _stakingTime = vault.depositTime(coinbase)
                let _dTokens = vault.depositTokenBalance(coinbase)
                let _lClaimTime = vault.lastClaimedTime(coinbase)
                let tStakers = vault.getNumberOfHolders()
                let [token_balance, stakingTime,
                    depositedTokens, lastClaimedTime,
                    total_stakers
                ] = await Promise.all([_bal, _stakingTime, _dTokens, _lClaimTime, tStakers])

                //console.log({total_stakers})

                this.setState({
                    token_balance,
                    stakingTime,
                    depositedTokens,
                    lastClaimedTime,
                    total_stakers,
                })
                let owner = await vault.owner()
                this.setState({ owner })

                let _pDivsToken = vault.tokenDivsOwing(coinbase)
                let _pDivsComp = vault.getEstimatedCompoundDivsOwing(coinbase)
                let _pDivsDyp = vault.platformTokenDivsOwing(coinbase)
                let _pDivsEth = vault.ethDivsOwing(coinbase)

                let _pBalToken = vault.tokenDivsBalance(coinbase)
                let _pBalEth = vault.ethDivsBalance(coinbase)
                let _pBalDyp = vault.platformTokenDivsBalance(coinbase)

                let [pendingDivsEth, pendingDivsComp, pendingDivsDyp, pendingDivsToken,
                    pendingBalEth, pendingBalDyp, pendingBalToken] = await Promise.all([_pDivsEth, _pDivsComp, _pDivsDyp, _pDivsToken,
                    _pBalEth, _pBalDyp, _pBalToken])

                pendingDivsEth = (new BigNumber(pendingDivsEth)).plus(pendingBalEth).toFixed(0)
                pendingDivsToken = (new BigNumber(pendingDivsToken)).plus(pendingBalToken).toFixed(0)
                pendingDivsDyp = (new BigNumber(pendingDivsDyp)).plus(pendingBalDyp).toFixed(0)

                pendingRewardsInToken = pendingDivsDyp

                this.setState({
                    pendingDivsComp, pendingDivsDyp, pendingDivsEth, pendingDivsToken
                })

            } catch (e) {
                console.error(e)
            }

            window.token_dyp.balanceOf(coinbase).then(platform_token_balance => this.setState({platform_token_balance}))

            vault.totalDepositedTokens().then(totalDepositedTokens => {
                //console.log({ totalDepositedTokens })
                this.setState({totalDepositedTokens})
            }).catch(console.log)

            vault.totalEarnedCompoundDivs(coinbase).then(totalEarnedComp => this.setState({ totalEarnedComp })).catch(console.log)
            vault.totalEarnedEthDivs(coinbase).then(totalEarnedEth => this.setState({ totalEarnedEth })).catch(console.log)
            vault.totalEarnedTokenDivs(coinbase).then(totalEarnedToken => this.setState({ totalEarnedToken })).catch(console.log)
            vault.totalEarnedPlatformTokenDivs(coinbase).then(totalEarnedDyp => this.setState({ totalEarnedDyp })).catch(console.log)

            vault.LOCKUP_DURATION().then((cliffTime) => {
                this.setState({ cliffTime: Number(cliffTime) })
            }).catch(console.error)

            vault.contractStartTime().then(contractDeployTime => {
                this.setState({ contractDeployTime })
            })

            vault.REWARD_INTERVAL().then(disburseDuration => {
                this.setState({ disburseDuration })
            })

            let usdPerToken = (await window.getPrices('defi-yield-protocol'))['defi-yield-protocol']['usd']
            let dId = window.config.cg_ids[vault.tokenAddress.toLowerCase()]
            let usdPerDepositToken = (await window.getPrices(dId))[dId]['usd']
            //console.log({usdPerToken, usdPerDepositToken})
            this.setState({usdPerToken, usdPerDepositToken})
            
            if (!this.state.rdepositAmount) {
                let usdValueOfPendingDivsInToken = usdPerDepositToken * pendingRewardsInToken / 10**TOKEN_DECIMALS 
                let dypAmount = usdValueOfPendingDivsInToken / usdPerToken
                //console.log({ usdValueOfPendingDivsInToken, dypAmount })
                this.setState({rdepositAmount: dypAmount.toFixed(19)})
            }
        }


        getApproxReturn = () => {
            let APY = this.state.apy_percent
            let approxDays = this.state.approxDays
            let approxDeposit = this.state.approxDeposit

            return ( approxDeposit * APY / 100 / 365 * approxDays)
        }

        render() {

            let {   cliffTime, 
                    token_balance, 
                    depositedTokens, 
                    stakingTime, 
                    coinbase, 

                    pendingDivsComp,
                    pendingDivsEth,
                    pendingDivsToken,
                    pendingDivsDyp,

                    totalEarnedComp,
                    totalEarnedDyp,
                    totalEarnedEth, 
                    totalEarnedToken,
                    disburseDuration,
                    contractDeployTime
            } = this.state

            
            pendingDivsEth = new BigNumber(pendingDivsEth ).div(10 ** 18).toString(10)
            pendingDivsEth = getFormattedNumber(pendingDivsEth, 18)

            pendingDivsToken = new BigNumber(pendingDivsToken ).div(10 ** TOKEN_DECIMALS).toString(10)
            pendingDivsToken = getFormattedNumber(pendingDivsToken, TOKEN_DECIMALS)

            pendingDivsDyp = new BigNumber(pendingDivsDyp ).div(10 ** TOKEN_DECIMALS).toString(10)
            pendingDivsDyp = getFormattedNumber(pendingDivsDyp, TOKEN_DECIMALS)

            pendingDivsComp = new BigNumber(pendingDivsComp ).div(10 ** TOKEN_DECIMALS).toString(10)
            pendingDivsComp = getFormattedNumber(pendingDivsComp, TOKEN_DECIMALS)

            token_balance = new BigNumber(token_balance ).div(10 ** TOKEN_DECIMALS).toString(10)
            token_balance = getFormattedNumber(token_balance, 6)


            totalEarnedToken = new BigNumber(totalEarnedToken).div(10 ** TOKEN_DECIMALS).toString(10)
            totalEarnedToken = getFormattedNumber(totalEarnedToken, 6)

            totalEarnedComp = new BigNumber(totalEarnedComp).div(10 ** TOKEN_DECIMALS).toString(10)
            totalEarnedComp = getFormattedNumber(totalEarnedComp, 6)

            totalEarnedDyp = new BigNumber(totalEarnedDyp).div(10 ** 18).toString(10)
            totalEarnedDyp = getFormattedNumber(totalEarnedDyp, 6)

            totalEarnedEth = new BigNumber(totalEarnedEth).div(10 ** 18).toString(10)
            totalEarnedEth = getFormattedNumber(totalEarnedEth, 6)

            depositedTokens = new BigNumber(depositedTokens).div(10**TOKEN_DECIMALS).toString(10)
            depositedTokens = getFormattedNumber(depositedTokens, 6)

            stakingTime = stakingTime * 1e3
            cliffTime = cliffTime * 1e3

            let showDeposit = true

            if (!isNaN(disburseDuration) && !isNaN(contractDeployTime)){
                let lastDay = parseInt(disburseDuration) + parseInt(contractDeployTime)
                let lockTimeExpire = parseInt(Date.now()) + parseInt(cliffTime)
                lockTimeExpire = lockTimeExpire.toString().substr(0,10)
                // console.log("now " + lockTimeExpire)
                // console.log('last ' + lastDay)
                if (lockTimeExpire > lastDay) {
                    showDeposit = false
                }
            }

            let cliffTimeInWords = 'lockup period'

            let canWithdraw = true
            if (!isNaN(cliffTime) && !isNaN(stakingTime)) {
                if (Date.now() - stakingTime <= cliffTime) {
                    canWithdraw = false
                    cliffTimeInWords = moment.duration((cliffTime - (Date.now() - stakingTime))).humanize(true)
                }
            }

            let total_stakers = this.state.total_stakers
            total_stakers = getFormattedNumber(total_stakers, 0)

            let APY_TOTAL = this.state.apy_percent + platformTokenApyPercent

            //console.log(total_stakers)

            let isOwner = String(this.state.coinbase).toLowerCase() === String(window.config.admin_address).toLowerCase()

            let tvl_usd = getFormattedNumber(this.state.tvl_usd, 2)

            return (<div>
                
                <div className='container'>
                    <div className='token-staking mt-5'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='row token-staking-form'>
                                    <div className='col-12'>
                                        <div className='l-box'>
                                            {showDeposit == true ?
                                                <form onSubmit={e => e.preventDefault()}>
                                                    <div className='form-group'>
                                                        <div className='row'>
                                                            <label htmlFor='deposit-amount' className='col-md-8 d-block text-left'>DEPOSIT</label>
                                                            {/*<div className='col-4'>*/}
                                                            {/*    <a target='_blank' rel='noopener noreferrer' href={`https://app.uniswap.org/#/add/0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17/${liquidity}`} >*/}
                                                            {/*        <button className='btn btn-sm btn-block btn-primary ' type='button'>*/}
                                                            {/*            ADD LIQUIDITY*/}
                                                            {/*</button>*/}
                                                            {/*    </a>*/}
                                                            {/*</div>*/}
                                                        </div>
                                                        <div className='input-group '>
                                                            <input value={Number(this.state.depositAmount) > 0 ? this.state.depositAmount  : this.state.depositAmount} onChange={e => this.setState({ depositAmount: e.target.value })} className='form-control left-radius' placeholder='0' type='text' />
                                                            <div className='input-group-append'>
                                                                <button className='btn  btn-primary right-radius btn-max l-light-btn' style={{ cursor: 'pointer' }} onClick={this.handleSetMaxDeposit}>
                                                                    MAX
                                                        </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div style={{ paddingRight: '0.3rem' }} className='col-6'>
                                                            <button onClick={this.handleApprove} className='btn  btn-block btn-primary ' type='button'>
                                                                APPROVE
                                                    </button>
                                                        </div>
                                                        <div style={{ paddingLeft: '0.3rem' }} className='col-6'>
                                                            <button onClick={this.handleStake} className='btn  btn-block btn-primary l-outline-btn' type='submit'>
                                                                DEPOSIT
                                                    </button>
                                                        </div>
                                                    </div>
                                                    <p style={{ fontSize: '.8rem' }} className='mt-1 text-center mb-0 text-muted mt-3'>
                                                        {/* Some info text here.<br /> */}
                                                        Please approve before deposit.
                                                    </p>

                                                </form>
                                                :
                                                <div className='row'>
                                                    <div className='col-md-12 d-block text-muted small'
                                                         style={{fontSize: '15px'}}>
                                                        <b>NOTE:</b>
                                                    </div>
                                                    <div className='col-md-12 d-block text-muted small' style={{fontSize: '15px'}}>
                                                        1. Before you deposit your funds, please make sure that you double-check the contract expiration date. At the end of a contract, you can withdraw your funds only after the expiration of your lock time. Consider a scenario wherein you deposit funds to a contract that expires in 30 days, but you lock the funds for 90 days; you will then be able to withdraw the funds 60 days after the expiration of the contract. Furthermore, you will not receive any rewards during this period.
                                                    </div>
                                                    <div className='col-md-12 d-block mb-0 text-muted small'
                                                         style={{fontSize: '15px'}}>
                                                        2. New contracts with improved strategies will be released after the current one expires.
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='l-box'>
                                        <form onSubmit={this.handleWithdraw}>
                                            <div className='form-group'>
                                                <label htmlFor='deposit-amount' className='d-block text-left'>WITHDRAW</label>
                                                <div className='input-group '>
                                                    <input value={this.state.withdrawAmount} onChange={e => this.setState({ withdrawAmount:e.target.value })} className='form-control left-radius' placeholder='0' type='text' />
                                                    <div className='input-group-append'>
                                                        <button className='btn  btn-primary right-radius btn-max l-light-btn' style={{ cursor: 'pointer' }} onClick={this.handleSetMaxWithdraw}>
                                                            MAX
                                                </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <button title={canWithdraw ? '' : `You recently deposited, you can withdraw ${cliffTimeInWords}`} disabled={!canWithdraw} className='btn  btn-primary btn-block l-outline-btn' type='submit'>
                                                WITHDRAW
                                    </button>
                                            <p style={{fontSize: '.8rem'}} className='mt-1 text-center text-muted mt-3'>0.3% fee for withdraw (75% distributed pro-rata among active vault users, whereas the remainder 25% is used to buy back DYP and burn it)</p>
                                        </form>
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='l-box'>
                                        <form onSubmit={this.handleClaimDivs}>
                                            <div className='form-group'>
                                                <label htmlFor='deposit-amount' className='text-left d-block'>REWARDS</label>
                                                <div className='form-row'>
                                                    {/* <div className='col-md-6'>
                                                        <p className='form-control  text-right' style={{ border: 'none', marginBottom: 0, paddingLeft: 0, background: 'transparent', color: '#222' }}><span style={{ fontSize: '1.2rem', color: 'rgb(255, 0, 122)' }}>{pendingDivsEth}</span> <small className='text-bold'>WETH</small></p>
                                                    </div> */}
                                                    <div className='col-md-12'>
                                                        <p className='form-control  text-right' style={{ border: 'none', marginBottom: 0, paddingLeft: 0, background: 'transparent', color: 'var(--text-color)' }}><span style={{ fontSize: '1.2rem', color: 'var(--text-color)' }}>{pendingDivsDyp}</span> <small className='text-bold'>{token_symbol} worth DYP</small></p>
                                                    </div>
                                                    <div className='col-md-12'>
                                                        <p className='form-control  text-right' style={{ border: 'none', marginBottom: 0, paddingLeft: 0, background: 'transparent', color: 'var(--text-color)' }}><span style={{ fontSize: '1.2rem', color: 'var(--text-color)' }}>{pendingDivsEth}</span> <small className='text-bold'>ETH</small></p>
                                                    </div>
                                                    <div className='col-md-12'>
                                                        <p className='form-control  text-right' style={{ border: 'none', marginBottom: 0, paddingLeft: 0, background: 'transparent', color: 'var(--text-color)' }}><span style={{ fontSize: '1.2rem', color: 'var(--text-color)' }}>{pendingDivsComp}</span> <small className='text-bold'>{token_symbol} (Compound)</small></p>
                                                    </div>
                                                    <div className='col-md-12'>
                                                        <p className='form-control  text-right' style={{ border: 'none', marginBottom: 0, paddingLeft: 0, background: 'transparent', color: 'var(--text-color)' }}><span style={{ fontSize: '1.2rem', color: 'var(--text-color)' }}>{pendingDivsToken}</span> <small className='text-bold'>{token_symbol}</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='form-row'>
                                                <div className='col-md-12 mb-2'>
                                                    <button className='btn  btn-primary btn-block l-outline-btn' type='submit'>
                                                        CLAIM
                                                    </button>
                                                </div>
                                                {/* <div className='col-md-6 mb-2'>
                                                    <button className='btn  btn-primary btn-block' type='button' onClick={this.handleReinvest}>
                                                        REINVEST
                                                    </button>
                                                </div> */}
                                            </div>
                                           
                                        </form>
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='l-box'>
                                        <form onSubmit={e => e.preventDefault()}>
                                            <div className='form-group'>
                                                <div className='row'>
                                                    <label htmlFor='deposit-amount' className='col-12 d-block text-left'>REINVEST</label>
                                                    <div className='col-12'><p>Reinvest DYP into fixed staking with a 35% APR for a 4 months Lock Time. Please claim before reinvesting!</p> </div>
                                                </div>
                                                <div className='input-group '>
                                                    <input value={Number(this.state.rdepositAmount) > 0 ? this.state.rdepositAmount  : this.state.rdepositAmount} onChange={e => this.setState({ rdepositAmount: e.target.value })} className='form-control left-radius' placeholder='0' type='text' />
                                                    <div className='input-group-append'>
                                                        <button className='btn  btn-primary right-radius btn-max l-light-btn' style={{ cursor: 'pointer' }} onClick={this.rhandleSetMaxDeposit}>
                                                            MAX
                                                </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div style={{ paddingRight: '0.3rem' }} className='col-6'>
                                                    <button onClick={this.handleReinvestApprove} className='btn  btn-block btn-primary ' type='button'>
                                                        APPROVE
                                            </button>
                                                </div>
                                                <div style={{ paddingLeft: '0.3rem' }} className='col-6'>
                                                    <button onClick={this.handleReinvestDeposit} className='btn  btn-block btn-primary l-outline-btn' type='submit'>
                                                        REINVEST
                                            </button>
                                                </div>
                                            </div>
                                            <p style={{ fontSize: '.8rem' }} className='mt-1 text-center mb-0 text-muted mt-3'>
                                                {/* Some info text here.<br /> */}
                                        Please approve before reinvest.
                                    </p>

                                        </form>
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='l-box'> 
                                        <form onSubmit={(e) => e.preventDefault()}>
                                            <div className='form-group'>
                                                <label htmlFor='deposit-amount' className='d-block text-left'>RETURN CALCULATOR</label>
                                                <div className='row'>
                                                    <div className='col'>
                                                        <label style={{ fontSize: '1rem', fontWeight: 'normal' }}>{token_symbol} to Deposit</label>
                                                        <input className='form-control ' value={ this.state.approxDeposit} onChange={e => this.setState({ approxDeposit: e.target.value })} placeholder='0' type='text' />
                                                    </div>
                                                    <div className='col'>
                                                        <label style={{ fontSize: '1rem', fontWeight: 'normal' }}>Days</label>
                                                        <input className='form-control ' value={this.state.approxDays} onChange={e => this.setState({ approxDays: e.target.value })} type='text' />
                                                    </div>
                                                </div>
                                            </div>
                                            <p>
                                                Approx. {getFormattedNumber(this.getApproxReturn(), 6)} {token_symbol} worth rewards.
                                    </p>
                                            <p style={{ fontSize: '.8rem' }} className='mt-1 text-center text-muted mt-3'>Approx. Value Not Considering Fees or unstable APR.</p>
                                        </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                            <Boxes items={[
                                {
                                    title: 'TVL USD',
                                    number: '$'+tvl_usd
                                },
                                {
                                    title: `APR`,
                                    number: getFormattedNumber(APY_TOTAL, 2) + '%'
                                }
                            ]} />
                                <div className='l-box'>
                                <div className='table-responsive'>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: '600', padding: '.3rem' }}>STATS</h3>
                                    <table className='table-stats table table-sm table-borderless'>
                                        <tbody>
                                            <tr>
                                                <th>My Address</th>
                                                <td className='text-right'>
                                                    <Address style={{ fontFamily: 'monospace' }} a={coinbase} />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Contract Address</th>
                                                <td className='text-right'>
                                                    <Address style={{ fontFamily: 'monospace' }} a={vault._address} />
                                                </td>
                                            </tr>

                                            <tr>
                                                <th>Contract Expiration</th>
                                                <td className="text-right"><strong>{expiration_time}</strong></td>
                                            </tr>

                                            <tr>
                                                <th>My {token_symbol} Balance</th>
                                                <td className="text-right"><strong>{token_balance}</strong> <small>{token_symbol}</small></td>
                                            </tr>

                                            <tr>
                                                <th>My DYP Balance</th>
                                                <td className="text-right"><strong>{getFormattedNumber(this.state.platform_token_balance/1e18, 6)}</strong> <small>DYP</small></td>
                                            </tr>
                                    
                                            <tr>
                                                <th>MY {token_symbol} Deposit</th>
                                                <td className="text-right"><strong>{depositedTokens}</strong> <small>{token_symbol}</small></td>
                                            </tr>

                                            <tr>
                                                <th>Total {token_symbol} Deposited</th>
                                                <td className="text-right"><strong>{getFormattedNumber(this.state.totalDepositedTokens/10**TOKEN_DECIMALS, 6)}</strong> <small>{token_symbol}</small></td>
                                            </tr>
                                            <tr>
                                                <th>MY Share</th>
                                                <td className="text-right"><strong>{getFormattedNumber(!this.state.totalDepositedTokens ?'...' :this.state.depositedTokens/(this.state.totalDepositedTokens)*100, 2)}</strong> <small>%</small></td>
                                            </tr>
                                           
                                            <tr>
                                                <th>Total Earned DYP</th>
                                                <td className="text-right"><strong>{totalEarnedDyp}</strong> <small>DYP</small></td>
                                            </tr>
                                            <tr>
                                                <th>Total Earned {token_symbol} (Compound)</th>
                                                <td className="text-right"><strong>{totalEarnedComp}</strong> <small>{token_symbol}</small></td>
                                            </tr>
                                            <tr>
                                                <th>Total Earned {token_symbol} (Fees)</th>
                                                <td className="text-right"><strong>{totalEarnedToken}</strong> <small>{token_symbol}</small></td>
                                            </tr>
                                            <tr>
                                                <th>Total Earned ETH</th>
                                                <td className="text-right"><strong>{totalEarnedEth}</strong> <small>ETH</small></td>
                                            </tr>
                    
                                            <tr>
                                                <th>TVL USD</th>
                                                <td className="text-right"><strong>${tvl_usd}</strong> <small>USD</small></td>
                                            </tr>
                                            <tr>
                                                <th>APR</th>
                                                <td className="text-right"><strong>{getFormattedNumber(APY_TOTAL, 2)}</strong> <small>%</small></td>
                                            </tr>
                                            {isOwner && <tr>
                                               <th>Total Stakers</th>
                                               <td className="text-right"><strong>{total_stakers}</strong> <small></small></td>
                                            </tr>}
                                            {/* <tr>
                                        <th>Pending</th>
                                        <td className="text-right"><strong>{pendingDivs}</strong> <small>DYP</small></td>
                                    </tr> */}

                                            <tr>
                                                <td style={{ fontSize: '1rem', paddingTop: '2rem' }} colSpan='2' className='text-center'>
                                                    <a target='_blank' rel='noopener noreferrer' href={`${window.config.etherscan_baseURL}/token/${token._address}?a=${coinbase}`}>View Transaction History on Etherscan</a> &nbsp; <i style={{ fontSize: '.8rem' }} className='fas fa-external-link-alt'></i>
                                                </td>
                                            </tr>
                                           
                                            <tr>
                                        
                                    </tr>
                                            {isOwner && <tr>
                                                <td style={{ fontSize: '1rem' }} colSpan='2' className='text-center'>
                                                    <a onClick={this.handleListDownload} target='_blank' rel='noopener noreferrer' href='#'><i style={{ fontSize: '.8rem' }} className='fas fa-download'></i> Download Stakers List </a>
                                                </td>
                                            </tr>}
                                        </tbody>
                                    </table>
                                </div>
                                </div>
                            </div>
                        </div>


                        {/* <div className='mt-3 text-center'>
                    <p><small>Some info text here</small></p>
                </div> */}
                    </div>
                </div>
            </div>
            )
        }
    }


    return Vault
}
