import React from 'react'
import { NavLink } from 'react-router-dom'

const VaultCard = ({logo, logo1, logo2, logo3, link, name, apy, short_desription}) => (
    <NavLink to={link}>
        <div className='container vault-container'>
            <div className='row vault-row'>
                <div className='col-sm-2 col-md-1 text-center'>
                    <img className='mb-3' src={logo3} height='45' width='45' style={{objectFit: 'contain'}} />
                </div>
                <div style={{whiteSpace: 'pre-line', top: '11px'}} className='col-sm-3 col-md-4'>
                    <span className='vault-name'>{name} </span>
                </div>
                <div className='col-sm-4' style={{ fontWeight: 'bold', top: '13px' }}>
                    APR {apy}
                </div>
                <div className='col-sm-3 text-right'>
                    <div>
                    EARN{' '}
                        <img className="mb-3" src={logo} style={{ objectFit: 'contain', height: '20px', width: '20px', margin: '0', marginTop: '13px' }} />{' '}
                        <img className="mb-3" src={logo1} style={{ objectFit: 'contain', height: '20px', width: '20px', margin: '0', marginTop: '13px' }} />{' '}
                        <img className="mb-3" src={logo2} style={{ objectFit: 'contain', height: '20px', width: '20px', margin: '0', marginTop: '13px' }} />{' '}
                    </div>
                </div>
            </div>
        </div>
    </NavLink>
)

let vaults = [
    {
        "hidden": false,
        "short_name": "ETH Vault",
        "short": 'ETH',
        "logo": "/images/cETH.svg",
        "logo1": "/images/ETH_2.png",
        "logo2": "/images/DYP.png",
        "logo3": "/images/ETH_2.png",
        "name": "WETH Vault",
        "description": "Deposit WETH and earn WETH and DYP",
        "short_description": '',
        "apy": "3%-13%",
        "link": "/vault-weth"
    },
    {
        "hidden": false,
        "short_name": "WBTC Vault",
        "short": 'WBTC',
        "logo": "/images/cWBTC.svg",
        "logo1": "/images/ETH_2.png",
        "logo2": "/images/DYP.png",
        "logo3": "/images/WBTC.png",
        "name": "WBTC Vault",
        "description": "Deposit WBTC and earn WBTC, WETH and DYP",
        "short_description": '',
        "apy": "3%-13%",
        "link": "/vault-wbtc"
    },
    {
        "hidden": false,
        "short_name": "USDT Pool",
        "short": 'USDT',
        "logo": "/images/cUSDT.svg",
        "logo1": "/images/ETH_2.png",
        "logo2": "/images/DYP.png",
        "logo3": "/images/USDT.png",
        "name": "USDT Vault",
        "description": "Deposit USDT and earn USDT, WETH and DYP",
        "short_description": '',
        "apy": "9%-23%",
        "link": "/vault-usdt"
    },
    {
        "hidden": false,
        "short_name": "USDC Vault",
        "short": 'USDC',
        "logo": "/images/cUSDC.svg",
        "logo1": "/images/ETH_2.png",
        "logo2": "/images/DYP.png",
        "logo3": "/images/USDC.png",
        "name": "USDC Vault",
        "description": "Deposit USDC and earn USDC, WETH and DYP",
        "short_description": '',
        "apy": "8%-22%",
        "link": "/vault-usdc"
    },
    {
        "hidden": false,
        "short_name": "DAI Vault",
        "short": 'DAI',
        "logo": "/images/cDAI.svg",
        "logo1": "/images/ETH_2.png",
        "logo2": "/images/DYP.png",
        "logo3": "/images/DAI.png",
        "name": "DAI Vault",
        "description": "Deposit DAI and earn DAI, WETH and DYP",
        "short_description": '',
        "apy": "8%-21%",
        "link": "/vault-dai"
    }
]

export default class VaultList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="">
                
                <div className='container'>
                    <h3 className='text-center mt-5' style={{fontWeight: 600}}>Supply Markets</h3>
                    {/* <div style={{display: 'flex', justifyContent: 'center'}}> */}
                        {/* <div className='iivcTi' style={{display: 'grid', maxWidth: '100%', width: '250px'}}> */}
                            {/* <p className='text-center' style={{margin: '0'}}>
                                Total Value Locked */}
                                {/*TVL: ${getFormattedNumber(this.getCombinedTvlUsd(), 2)}, Total Stakers: {getFormattedNumber(this.getCombinedStakers(), 0)}*/}
                            {/* </p> */}
                            {/* <p className='text-center' style={{margin: '0'}}>
                                ${this.props.tvl_all}
                            </p> */}
                        {/* </div> */}
                    {/* </div> */}
                    <div className='vaults-list'>
                        {vaults.filter(v => !v.hidden).map((props,i) => <VaultCard {...props} key={i} />)}
                    </div>
                </div>
            </div>
        )
    }
}