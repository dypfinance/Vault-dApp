import React from 'react';

import { Route } from 'react-router-dom'

import initVault from './components/vault'

import VaultList from './components/vault-list'
import VaultListEth from "./components/staking-list-eth"
import VaultListWbtc from "./components/staking-list-wbtc"
import VaultListUsdt from "./components/staking-list-usdt"
import VaultListUsdc from "./components/staking-list-usdc"
import VaultListDai from "./components/staking-list-dai"

import initVaultNew from './components/vault-new'

import Header from './components/header'
import Footer from './components/footer'

const VaultWETH_3days = initVault({ vault: window.vault_weth_3days, token: window.token_weth, platformTokenApyPercent: 2.5, UNDERLYING_DECIMALS: 18, UNDERLYING_SYMBOL: 'WETH', expiration_time: '28 April 2022' })
const VaultWETH_30days = initVault({ vault: window.vault_weth_30days, token: window.token_weth, platformTokenApyPercent: 7.5, UNDERLYING_DECIMALS: 18, UNDERLYING_SYMBOL: 'WETH', expiration_time: '28 April 2022' })
const VaultWETH_60days = initVault({ vault: window.vault_weth_60days, token: window.token_weth, platformTokenApyPercent: 10, UNDERLYING_DECIMALS: 18, UNDERLYING_SYMBOL: 'WETH', expiration_time: '28 April 2022' })
const VaultWETH_90days = initVault({ vault: window.vault_weth_90days, token: window.token_weth, platformTokenApyPercent: 12.5, UNDERLYING_DECIMALS: 18, UNDERLYING_SYMBOL: 'WETH', expiration_time: '28 April 2022' })

const VaultWBTC_3days = initVault({ vault: window.vault_wbtc_3days, token: window.token_wbtc, platformTokenApyPercent: 2.5, UNDERLYING_DECIMALS: 8, UNDERLYING_SYMBOL: 'WBTC', expiration_time: '28 April 2022' })
const VaultWBTC_30days = initVault({ vault: window.vault_wbtc_30days, token: window.token_wbtc, platformTokenApyPercent: 7.5, UNDERLYING_DECIMALS: 8, UNDERLYING_SYMBOL: 'WBTC', expiration_time: '28 April 2022' })
const VaultWBTC_60days = initVault({ vault: window.vault_wbtc_60days, token: window.token_wbtc, platformTokenApyPercent: 10, UNDERLYING_DECIMALS: 8, UNDERLYING_SYMBOL: 'WBTC', expiration_time: '28 April 2022' })
const VaultWBTC_90days = initVault({ vault: window.vault_wbtc_90days, token: window.token_wbtc, platformTokenApyPercent: 12.5, UNDERLYING_DECIMALS: 8, UNDERLYING_SYMBOL: 'WBTC', expiration_time: '28 April 2022' })

const VaultUSDT_3days = initVault({ vault: window.vault_usdt_3days, token: window.token_usdt, platformTokenApyPercent: 4, UNDERLYING_DECIMALS: 6, UNDERLYING_SYMBOL: 'USDT', expiration_time: '28 April 2022' })
const VaultUSDT_30days = initVault({ vault: window.vault_usdt_30days, token: window.token_usdt, platformTokenApyPercent: 12, UNDERLYING_DECIMALS: 6, UNDERLYING_SYMBOL: 'USDT', expiration_time: '28 April 2022' })
const VaultUSDT_60days = initVault({ vault: window.vault_usdt_60days, token: window.token_usdt, platformTokenApyPercent: 15, UNDERLYING_DECIMALS: 6, UNDERLYING_SYMBOL: 'USDT', expiration_time: '28 April 2022' })
const VaultUSDT_90days = initVault({ vault: window.vault_usdt_90days, token: window.token_usdt, platformTokenApyPercent: 18, UNDERLYING_DECIMALS: 6, UNDERLYING_SYMBOL: 'USDT', expiration_time: '28 April 2022' })

const VaultUSDC_3days = initVault({ vault: window.vault_usdc_3days, token: window.token_usdc, platformTokenApyPercent: 4, UNDERLYING_DECIMALS: 6, UNDERLYING_SYMBOL: 'USDC', expiration_time: '28 April 2022' })
const VaultUSDC_30days = initVault({ vault: window.vault_usdc_30days, token: window.token_usdc, platformTokenApyPercent: 12, UNDERLYING_DECIMALS: 6, UNDERLYING_SYMBOL: 'USDC', expiration_time: '28 April 2022' })
const VaultUSDC_60days = initVault({ vault: window.vault_usdc_60days, token: window.token_usdc, platformTokenApyPercent: 15, UNDERLYING_DECIMALS: 6, UNDERLYING_SYMBOL: 'USDC', expiration_time: '28 April 2022' })
const VaultUSDC_90days = initVault({ vault: window.vault_usdc_90days, token: window.token_usdc, platformTokenApyPercent: 18, UNDERLYING_DECIMALS: 6, UNDERLYING_SYMBOL: 'USDC', expiration_time: '28 April 2022' })

const VaultDAI_3days = initVault({ vault: window.vault_dai_3days, token: window.token_dai, platformTokenApyPercent: 3, UNDERLYING_DECIMALS: 18, UNDERLYING_SYMBOL: 'DAI', expiration_time: '28 April 2022'})
const VaultDAI_30days = initVault({ vault: window.vault_dai_30days, token: window.token_dai, platformTokenApyPercent: 9, UNDERLYING_DECIMALS: 18, UNDERLYING_SYMBOL: 'DAI', expiration_time: '28 April 2022'})
const VaultDAI_60days = initVault({ vault: window.vault_dai_60days, token: window.token_dai, platformTokenApyPercent: 13, UNDERLYING_DECIMALS: 18, UNDERLYING_SYMBOL: 'DAI', expiration_time: '28 April 2022'})
const VaultDAI_90days = initVault({ vault: window.vault_dai_90days, token: window.token_dai, platformTokenApyPercent: 16, UNDERLYING_DECIMALS: 18, UNDERLYING_SYMBOL: 'DAI', expiration_time: '28 April 2022'})

//NEW Vaults
const VaultWETH = initVaultNew({ vault: window.vault_weth, token: window.token_weth, platformTokenApyPercent: 10, UNDERLYING_DECIMALS: 18, UNDERLYING_SYMBOL: 'WETH', expiration_time: '04 March 2023' })
const VaultWBTC = initVaultNew({ vault: window.vault_wbtc, token: window.token_wbtc, platformTokenApyPercent: 10, UNDERLYING_DECIMALS: 8, UNDERLYING_SYMBOL: 'WBTC', expiration_time: '04 March 2023' })
const VaultUSDT = initVaultNew({ vault: window.vault_usdt, token: window.token_usdt, platformTokenApyPercent: 15, UNDERLYING_DECIMALS: 6, UNDERLYING_SYMBOL: 'USDT', expiration_time: '04 March 2023' })
const VaultUSDC = initVaultNew({ vault: window.vault_usdc, token: window.token_usdc, platformTokenApyPercent: 15, UNDERLYING_DECIMALS: 6, UNDERLYING_SYMBOL: 'USDC', expiration_time: '04 March 2023' })
const VaultDAI = initVaultNew({ vault: window.vault_dai, token: window.token_dai, platformTokenApyPercent: 15, UNDERLYING_DECIMALS: 18, UNDERLYING_SYMBOL: 'DAI', expiration_time: '04 March 2023'})


const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName} onClick={() => {
            // close modal when outside of modal is clicked
            handleClose()
        }}>
            <section className="modal-main">
                {children}
                {/*<button type="button" onClick={handleClose}>*/}
                {/*    Close*/}
                {/*</button>*/}
            </section>
        </div>
    )
}

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        is_wallet_connected: false,
        referrer: '',
        darkTheme: false,
        show: false,
        the_graph_result_ETH_V2: {}
    }
      this.showModal = this.showModal.bind(this)
      this.hideModal = this.hideModal.bind(this)
  }

    showModal = () => {
        this.setState({ show: true })
    }

    hideModal = () => {
        this.setState({ show: false })
    }

  toggleTheme = () => {
    let darkTheme = !this.state.darkTheme
    document.body.classList[darkTheme?'add':'remove']('dark')
    this.setState({ darkTheme })
  }

  getCombinedTvlUsd = () => {
      let tvl = 0
      if (!this.state.the_graph_result?.lp_data) return 0

      let lp_ids = Object.keys(this.state.the_graph_result?.lp_data)
      for (let id of lp_ids) {
          tvl += this.state.the_graph_result?.lp_data[id].tvl_usd*1 || 0
      }
      return tvl
  }

   async componentDidMount() {

       await this.setGraph()
   }

  setGraph = async () =>
  {
      let the_graph_result_ETH_V2 = await window.get_the_graph_eth_v2()
      this.setState({the_graph_result_ETH_V2: JSON.parse(JSON.stringify(the_graph_result_ETH_V2))})
  }

    getCombinedStakers = () => {
      let stakers = 0
      if (!this.state.the_graph_result.lp_data) return 0
      let lp_ids = Object.keys(this.state.the_graph_result.lp_data)
      for (let id of lp_ids) {
          stakers += this.state.the_graph_result.lp_data[id].stakers_num*1 || 0
      }
      return stakers
  }

  handleConnection = async () => {
    try {
      let is_wallet_connected = await window.connectWallet()
      let referrer = window.param('r')

      if (is_wallet_connected) {
        if (referrer) {
          referrer = String(referrer).trim().toLowerCase()
        }
        if (!window.web3.utils.isAddress(referrer)) {
          referrer = window.config.ZERO_ADDRESS
        }
      }
      this.setState({is_wallet_connected, coinbase: await window.web3.eth.getCoinbase(), referrer})

       await window.wait(2000)

        try {
            let the_graph_result_ETH_V2 = await window.get_the_graph_eth_v2()
            this.setState({ the_graph_result_ETH_V2: JSON.parse(JSON.stringify(the_graph_result_ETH_V2)) })
        } catch (e) {
            // window.alertify.error("Cannot fetch TVL");
            console.error("TVL ETH V2 error: "+e)
        }
      
    } catch (e) {
      window.alertify.error(String(e))
    }
  }

render() {


  return (
    <div className="App">
      <Header darkTheme={this.state.darkTheme} toggleTheme={this.toggleTheme} />
      <div className='App-container'>

        <Route exact path='/' render={props => <VaultList is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} {...props} />} />

        <Route exact path='/vault-list-eth' render={props => <VaultListEth is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} {...props} />} />
        <Route exact path='/vault-list-wbtc' render={props => <VaultListWbtc is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} {...props} />} />
        <Route exact path='/vault-list-usdt' render={props => <VaultListUsdt is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} {...props} />} />
        <Route exact path='/vault-list-usdc' render={props => <VaultListUsdc is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} {...props} />} />
        <Route exact path='/vault-list-dai' render={props => <VaultListDai is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} {...props} />} />

        <Route exact path='/vault-weth-3days' render={props => <VaultWETH_3days is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} {...props} />} />
        <Route exact path='/vault-weth-30days' render={props => <VaultWETH_30days is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} {...props} />} />
        <Route exact path='/vault-weth-60days' render={props => <VaultWETH_60days is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} {...props} />} />
        <Route exact path='/vault-weth-90days' render={props => <VaultWETH_90days is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} {...props} />} />

        <Route exact path='/vault-wbtc-3days' render={props => <VaultWBTC_3days is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} {...props} />} />
        <Route exact path='/vault-wbtc-30days' render={props => <VaultWBTC_30days is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} {...props} />} />
        <Route exact path='/vault-wbtc-60days' render={props => <VaultWBTC_60days is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} {...props} />} />
        <Route exact path='/vault-wbtc-90days' render={props => <VaultWBTC_90days is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} {...props} />} />

        <Route exact path='/vault-usdt-3days' render={props => <VaultUSDT_3days is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} {...props} />} />
        <Route exact path='/vault-usdt-30days' render={props => <VaultUSDT_30days is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} {...props} />} />
        <Route exact path='/vault-usdt-60days' render={props => <VaultUSDT_60days is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} {...props} />} />
        <Route exact path='/vault-usdt-90days' render={props => <VaultUSDT_90days is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} {...props} />} />

        <Route exact path='/vault-usdc-3days' render={props => <VaultUSDC_3days is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} {...props} />} />
        <Route exact path='/vault-usdc-30days' render={props => <VaultUSDC_30days is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} {...props} />} />
        <Route exact path='/vault-usdc-60days' render={props => <VaultUSDC_60days is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} {...props} />} />
        <Route exact path='/vault-usdc-90days' render={props => <VaultUSDC_90days is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} {...props} />} />

        <Route exact path='/vault-dai-3days' render={props => <VaultDAI_3days is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} {...props} />} />
        <Route exact path='/vault-dai-30days' render={props => <VaultDAI_30days is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} {...props} />} />
        <Route exact path='/vault-dai-60days' render={props => <VaultDAI_60days is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} {...props} />} />
        <Route exact path='/vault-dai-90days' render={props => <VaultDAI_90days is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} {...props} />} />

        {/*New Vaults*/}
        <Route exact path='/vault-weth' render={props => <VaultWETH is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_ETH_V2} {...props} />} />
        <Route exact path='/vault-wbtc' render={props => <VaultWBTC is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_ETH_V2} {...props} />} />
        <Route exact path='/vault-usdt' render={props => <VaultUSDT is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_ETH_V2} {...props} />} />
        <Route exact path='/vault-usdc' render={props => <VaultUSDC is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_ETH_V2} {...props} />} />
        <Route exact path='/vault-dai' render={props => <VaultDAI is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_ETH_V2} {...props} />} />

      </div>
      <Footer />
    </div>
  );
}
}

export default App;
