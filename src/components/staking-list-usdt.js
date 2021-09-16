import React from 'react'
import { NavLink } from 'react-router-dom'

const VaultCard = ({logo, logo1, logo2, logo3, link, name, apy}) => (
    <NavLink to={link}>
        <div className='container vault-container'>
            <div className='row vault-row'>
                <div className='col-sm-2 col-md-1 text-center'>
                    <img className='mb-3' src={logo} height='45' width='45' style={{objectFit: 'contain'}} />
                </div>
                <div style={{whiteSpace: 'pre-line'}} className='col-sm-3 col-md-4'>
                    <span className='vault-name'>{name} </span>
                </div>
                <div className='col-sm-4' style={{ fontWeight: 'bold' }}>
                    APY {apy}
                </div>
                <div className="col-sm-3 text-right">
                    <h4>REWARDS</h4>
                    <img className="mb-3" src={logo3} style={{ objectFit: 'contain', height: '20px', width: '20px', margin: '0' }} />{' '}
                    <img className="mb-3" src={logo1} style={{ objectFit: 'contain', height: '20px', width: '20px', margin: '0', marginLeft: '1px' }} />{' '}
                    <img className="mb-3" src={logo2} style={{ objectFit: 'contain', height: '20px', width: '20px', margin: '0', marginLeft: '1px' }} />{' '}
                </div>
            </div>
        </div>
    </NavLink>
)

let vaults = [
    {
        "hidden": false,
        "short_name": "USDT Vault",
        "logo": "/images/USDT.png",
        "logo1": "/images/ETH_2.png",
        "logo2": "/images/DYP.png",
        "logo3": "/images/cUSDT.svg",
        "name": "USDT Vault\n3 Days Locking",
        "description": "Supply WBTC",
        "apy": "~9%",
        "link": "/vault-usdt-3days"
    },
    {
        "hidden": false,
        "short_name": "USDT Vault",
        "logo": "/images/USDT.png",
        "logo1": "/images/ETH_2.png",
        "logo2": "/images/DYP.png",
        "logo3": "/images/cUSDT.svg",
        "name": "USDT Vault\n30 Days Locking",
        "description": "Supply USDT",
        "apy": "~17%",
        "link": "/vault-usdt-30days"
    },{
        "hidden": false,
        "short_name": "USDT Vault",
        "logo": "/images/USDT.png",
        "logo1": "/images/ETH_2.png",
        "logo2": "/images/DYP.png",
        "logo3": "/images/cUSDT.svg",
        "name": "USDT Vault\n60 Days Locking",
        "description": "Supply USDT",
        "apy": "~20%",
        "link": "/vault-usdt-60days"
    },{
        "hidden": false,
        "short_name": "USDT Vault",
        "logo": "/images/USDT.png",
        "logo1": "/images/ETH_2.png",
        "logo2": "/images/DYP.png",
        "logo3": "/images/cUSDT.svg",
        "name": "USDT Vault\n90 Days Locking",
        "description": "Supply WBTC",
        "apy": "~23%",
        "link": "/vault-usdt-90days"
    }
]

export default class VaultListUsdt extends React.Component {
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