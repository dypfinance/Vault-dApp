import React from 'react'
import { NavLink } from 'react-router-dom'

const VaultCard = ({logo1, logo2, link, name, logo, apy}) => (
    <NavLink to={link}>
        <div className='container vault-container'>
            <div className='row vault-row'>
                <div className='col-sm-2 col-md-1 text-center'>
                    <img className='mb-3' src={logo1} height='45' width='45' style={{objectFit: 'contain'}} />
                </div>
                <div style={{whiteSpace: 'pre-line'}} className='col-sm-3 col-md-4'>
                    <span className='vault-name'>{name} </span>
                </div>
                <div className='col-sm-4' style={{ fontWeight: 'bold' }}>
                    APR {apy}
                </div>
                <div className="col-sm-3 text-right">
                    <h4>REWARDS</h4>
                    <img className="mb-3" src={logo} style={{ objectFit: 'contain', height: '20px', width: '20px', margin: '0' }} />{' '}
                    <img className="mb-3" src={logo1} style={{ objectFit: 'contain', height: '20px', width: '20px', margin: '0' }} />{' '}
                    <img className="mb-3" src={logo2} style={{ objectFit: 'contain', height: '20px', width: '20px', margin: '0', marginLeft: '1px' }} />{' '}
                </div>
            </div>
        </div>
    </NavLink>
)

let vaults = [
    {
        "hidden": false,
        "short_name": "WETH Vault",
        "logo1": "/images/ETH_2.png",
        "logo2": "/images/DYP.png",
        "logo": "/images/cETH.svg",
        "name": "WETH Vault\n3 Days Locking",
        "description": "Supply WETH",
        "apy": "~3%",
        "link": "/vault-weth-3days"
    },
    {
        "hidden": false,
        "short_name": "WETH Vault",
        "logo1": "/images/ETH_2.png",
        "logo2": "/images/DYP.png",
        "logo": "/images/cETH.svg",
        "name": "WETH Vault\n30 Days Locking",
        "description": "Supply WETH",
        "apy": "~8%",
        "link": "/vault-weth-30days"
    },
    {
        "hidden": false,
        "short_name": "WETH Pool",
        "logo1": "/images/ETH_2.png",
        "logo2": "/images/DYP.png",
        "logo": "/images/cETH.svg",
        "name": "WETH Vault\n60 Days Locking",
        "description": "Supply WETH",
        "apy": "~11%",
        "link": "/vault-weth-60days"
    },
    {
        "hidden": false,
        "short_name": "WETH Pool",
        "logo1": "/images/ETH_2.png",
        "logo2": "/images/DYP.png",
        "logo": "/images/cETH.svg",
        "name": "WETH Vault\n90 Days Locking",
        "description": "Supply WETH",
        "apy": "~13%",
        "link": "/vault-weth-90days"
    }
]

export default class VaultListEth extends React.Component {
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