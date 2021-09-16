window.WALLET_TYPE = ''

window.config = {
	ZERO_ADDRESS: '0x0000000000000000000000000000000000000000',
	uniswap_router_address: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
	constant_staking_address: '0x82df1450eFD6b504EE069F5e4548F2D5Cb229880',
	admin_address: '0x910090Ea889B64B4e722ea4b8fF6D5e734dFb38F',
	token_dyp_address: '0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17',

	vault_weth_address_3days: '0x01de5bCe5C5Ee4F92e8f4183f6F4E4f12f9a86cd',
	vault_weth_address_30days: '0x3e488684c40D63Ff2b9963DFBb805Bbb3Da9b1c6',
	vault_weth_address_60days: '0x480c83Be2694BFB91F40d951424330c9123b9066',
	vault_weth_address_90days: '0xdC68450BfE4E16d74B20c44DdA83662cF2F5F0c0',
	token_weth_address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',

	vault_wbtc_address_3days: '0xe5c5a452A0f7B2d5266010Bf167A7Ee2eDF54533',
	vault_wbtc_address_30days: '0x8Ae8eC53712017EeB3378Ee112082D57da98E792',
	vault_wbtc_address_60days: '0x2D4b96e3C6176E833c013088aEcC7640af977e20',
	vault_wbtc_address_90days: '0xb95Ec2cB2D61d12c86a05e0c995d007Aec8f2850',
	token_wbtc_address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',

	vault_usdt_address_3days: '0x18d2a323675BbE1f9d03e273a186Aea8ADf7f5c5',
	vault_usdt_address_30days: '0xfB55dcc985517d111C65004f0EAabC1f6CE23cF1',
	vault_usdt_address_60days: '0x8CE610eC56cE3ad3678C426f0Dfc965568Db6DdC',
	vault_usdt_address_90days: '0x7CCFF41652eD12278E02E18de06d40Aaf5F1769B',
	token_usdt_address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',

	vault_usdc_address_3days: '0x94226Ae99C786b2830d27aC6e8fCdb4b0c4cc73a',
	vault_usdc_address_30days: '0xaaC6814a1aCFE8F7Ea1f718148daC614d5323c85',
	vault_usdc_address_60days: '0xe19328D2A528B765E30f9BC47faBb81e0f510ea9',
	vault_usdc_address_90days: '0xE728874B81Bd0b7a9c3505949935e67D0e7136aD',
	token_usdc_address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',

	vault_dai_address_3days: '0x8c1d0FD28b5FEac7f5521d05D53d7E1560A7CBCC',
	vault_dai_address_30days: '0xF73baaC19eEEB7C4B7Cc211F3eDF88BB9F1d40f9',
	vault_dai_address_60days: '0x8Fb2c9F8c07FaCf0aF442a1900cD2Cfe1940971B',
	vault_dai_address_90days: '0x8ad8e5FA0f2781dA3327275049B5469275A1042E',
	token_dai_address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',

	etherscan_baseURL: 'https://etherscan.io',
	compound_network: 'mainnet',
	compound_api_key: null,

	slippage_tolerance_percent: 3, // 3% slippage tolerance
	tx_max_wait_seconds: 20 * 60, // 20 mins - deposit and withdraw tx will fail (swap will fail) after this duration of being pending

	cg_ids: {
		// lowercase contract address => coingecko id
		'0x6b175474e89094c44da98b954eedeac495271d0f': 'dai',
		'0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17': 'defi-yield-protocol',
		'0xdac17f958d2ee523a2206206994597c13d831ec7': 'tether',
		'0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2': 'weth',
		'0x2260fac5e5542a773aa44fbcfedf7c193bc2c599': 'bitcoin',
		'0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48': 'dai'
	}
}

window.vaultsEth = [
	{
		hidden: false,
		contract_address: window.config.staking_address,
		short_name: 'DYP/ETH Pool',
		logo: '/images/ETH.png',
		name: 'DYP/ETH LP Pool\n3 Days Locking',
		description: 'Deposit LP and earn WETH',
		return_heading: 'Pool Rewards',
		return_description: '30,000 DYP / month',
		link: '/staking-eth-3'
	},
	{
		hidden: false,
		contract_address: window.config.staking_dyp30_address,
		short_name: 'DYP/ETH Pool',
		logo: '/images/ETH.png',
		name: 'DYP/ETH LP Pool\n30 Days Locking',
		description: 'Deposit LP and earn WETH',
		return_heading: 'Pool Rewards',
		return_description: '45,000 DYP / month',
		link: '/staking-eth-30'
	},
	{
		hidden: false,
		contract_address: window.config.staking_dyp60_address,
		short_name: 'DYP/ETH Pool',
		logo: '/images/ETH.png',
		name: 'DYP/ETH LP Pool\n60 Days Locking',
		description: 'Deposit LP and earn WETH',
		return_heading: 'Pool Rewards',
		return_description: '75,000 DYP / month',
		link: '/staking-eth-60'
	},
	{
		hidden: false,
		contract_address: window.config.staking_dyp90_address,
		short_name: 'DYP/ETH Pool',
		logo: '/images/ETH.png',
		name: 'DYP/ETH LP Pool\n90 Days Locking',
		description: 'Deposit LP and earn WETH',
		return_heading: 'Pool Rewards',
		return_description: '100,000 DYP / month',
		link: '/staking-eth-90'
	}
]

window.vaultsWbtc = [
	{
		hidden: false,
		contract_address: window.config.staking_wbtc3_address,
		short_name: 'DYP/WBTC Pool',
		logo: '/images/WBTC.png',
		name: 'DYP/WBTC LP Pool\n3 Days Locking',
		description: 'Deposit LP and earn WETH',
		return_heading: 'Pool Rewards',
		return_description: '30,000 DYP / month',
		link: '/staking-wbtc-3'
	},
	{
		hidden: false,
		contract_address: window.config.staking_wbtc30_address,
		short_name: 'DYP/WBTC Pool',
		logo: '/images/WBTC.png',
		name: 'DYP/WBTC LP Pool\n30 Days Locking',
		description: 'Deposit LP and earn WETH',
		return_heading: 'Pool Rewards',
		return_description: '45,000 DYP / month',
		link: '/staking-wbtc-30'
	},
	{
		hidden: false,
		contract_address: window.config.staking_wbtc60_address,
		short_name: 'DYP/WBTC Pool',
		logo: '/images/WBTC.png',
		name: 'DYP/WBTC LP Pool\n60 Days Locking',
		description: 'Deposit LP and earn WETH',
		return_heading: 'Pool Rewards',
		return_description: '75,000 DYP / month',
		link: '/staking-wbtc-60'
	},
	{
		hidden: false,
		contract_address: window.config.staking_wbtc90_address,
		short_name: 'DYP/WBTC Pool',
		logo: '/images/WBTC.png',
		name: 'DYP/WBTC LP Pool\n90 Days Locking',
		description: 'Deposit LP and earn WETH',
		return_heading: 'Pool Rewards',
		return_description: '100,000 DYP / month',
		link: '/staking-wbtc-90'
	}
]

window.vaultsUsdc = [
	{
		hidden: false,
		contract_address: window.config.staking_usdc3_address,
		short_name: 'DYP/USDC Pool',
		logo: '/images/USDC.png',
		name: 'DYP/USDC LP Pool\n3 Days Locking',
		description: 'Deposit LP and earn WETH',
		return_heading: 'Pool Rewards',
		return_description: '30,000 DYP / month',
		link: '/staking-usdc-3'
	},
	{
		hidden: false,
		contract_address: window.config.staking_usdc30_address,
		short_name: 'DYP/USDC Pool',
		logo: '/images/USDC.png',
		name: 'DYP/USDC LP Pool\n30 Days Locking',
		description: 'Deposit LP and earn WETH',
		return_heading: 'Pool Rewards',
		return_description: '45,000 DYP / month',
		link: '/staking-usdc-30'
	},
	{
		hidden: false,
		contract_address: window.config.staking_usdc60_address,
		short_name: 'DYP/USDC Pool',
		logo: '/images/USDC.png',
		name: 'DYP/USDC LP Pool\n60 Days Locking',
		description: 'Deposit LP and earn WETH',
		return_heading: 'Pool Rewards',
		return_description: '75,000 DYP / month',
		link: '/staking-usdc-60'
	},
	{
		hidden: false,
		contract_address: window.config.staking_usdc90_address,
		short_name: 'DYP/USDC Pool',
		logo: '/images/USDC.png',
		name: 'DYP/USDC LP Pool\n90 Days Locking',
		description: 'Deposit LP and earn WETH',
		return_heading: 'Pool Rewards',
		return_description: '100,000 DYP / month',
		link: '/staking-usdc-90'
	}
]

window.vaultsUsdt = [
	{
		hidden: false,
		contract_address: window.config.staking_usdt3_address,
		short_name: 'DYP/USDT Pool',
		logo: '/images/USDT.png',
		name: 'DYP/USDT LP Pool\n3 Days Locking',
		description: 'Deposit LP and earn WETH',
		return_heading: 'Pool Rewards',
		return_description: '30,000 DYP / month',
		link: '/staking-usdt-3'
	},
	{
		hidden: false,
		contract_address: window.config.staking_usdt30_address,
		short_name: 'DYP/USDT Pool',
		logo: '/images/USDT.png',
		name: 'DYP/USDT LP Pool\n30 Days Locking',
		description: 'Deposit LP and earn WETH',
		return_heading: 'Pool Rewards',
		return_description: '45,000 DYP / month',
		link: '/staking-usdt-30'
	},
	{
		hidden: false,
		contract_address: window.config.staking_usdt60_address,
		short_name: 'DYP/USDT Pool',
		logo: '/images/USDT.png',
		name: 'DYP/USDT LP Pool\n60 Days Locking',
		description: 'Deposit LP and earn WETH',
		return_heading: 'Pool Rewards',
		return_description: '75,000 DYP / month',
		link: '/staking-usdt-60'
	},
	{
		hidden: false,
		contract_address: window.config.staking_usdt90_address,
		short_name: 'DYP/USDT Pool',
		logo: '/images/USDT.png',
		name: 'DYP/USDT LP Pool\n90 Days Locking',
		description: 'Deposit LP and earn WETH',
		return_heading: 'Pool Rewards',
		return_description: '100,000 DYP / month',
		link: '/staking-usdt-90'
	}
]

window.TOKEN_ABI = [
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "remaining",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_extraData",
				"type": "bytes"
			}
		],
		"name": "approveAndCall",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseApproval",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseApproval",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "initialSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "transferAnyERC20Token",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
window.CONSTANT_STAKING_ABI = [
	{
		"inputs": [],
		"name": "claim",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountToWithdraw",
				"type": "uint256"
			}
		],
		"name": "emergencyUnstake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "referrer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "ReferralFeeTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "reInvest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "holder",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Reinvest",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "holder",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "RewardsTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountToStake",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "referrer",
				"type": "address"
			}
		],
		"name": "stake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferAnyERC20Token",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferAnyLegacyERC20Token",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountToWithdraw",
				"type": "uint256"
			}
		],
		"name": "unstake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ADMIN_CAN_CLAIM_AFTER",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractStartTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "depositedTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "getActiveReferredStaker",
		"outputs": [
			{
				"internalType": "address",
				"name": "_staker",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_totalEarned",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNumberOfHolders",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "referrer",
				"type": "address"
			}
		],
		"name": "getNumberOfReferredStakers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_activeStakers",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_totalStakers",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_holder",
				"type": "address"
			}
		],
		"name": "getPendingDivs",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "getReferredStaker",
		"outputs": [
			{
				"internalType": "address",
				"name": "_staker",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_totalEarned",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "startIndex",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endIndex",
				"type": "uint256"
			}
		],
		"name": "getStakersList",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "stakers",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "stakingTimestamps",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "lastClaimedTimeStamps",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "stakedTokens",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_holder",
				"type": "address"
			}
		],
		"name": "getTotalPendingDivs",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "lastClaimedTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "LOCKUP_TIME",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "REFERRAL_FEE_RATE_X_100",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "referrals",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "REWARD_INTERVAL",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "REWARD_RATE_X_100",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "rewardsPendingClaim",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "STAKING_FEE_RATE_X_100",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "stakingTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalClaimedReferralFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalClaimedRewards",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "totalEarnedTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "totalReferralFeeEarned",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "TRUSTED_TOKEN_ADDRESS",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "UNSTAKING_FEE_RATE_X_100",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
window.VAULT_ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "CompoundRewardClaimed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Deposit",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "EtherRewardClaimed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "EtherRewardDisbursed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "PlatformTokenAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "PlatformTokenRewardClaimed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "TokenRewardClaimed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "TokenRewardDisbursed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Withdraw",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "BURN_ADDRESS",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "FEE_PERCENT_TO_BUYBACK_X_100",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "FEE_PERCENT_X_100",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "LOCKUP_DURATION",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MIN_ETH_FEE_IN_WEI",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ONE_HUNDRED_X_100",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "POINT_MULTIPLIER",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "REWARD_INTERVAL",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "REWARD_RETURN_PERCENT_X_100",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "TRUSTED_CTOKEN_ADDRESS",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "TRUSTED_DEPOSIT_TOKEN_ADDRESS",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "TRUSTED_PLATFORM_TOKEN_ADDRESS",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "addPlatformTokenBalance",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "cTokenBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amountOutMin_platformTokens",
				"type": "uint256"
			}
		],
		"name": "claim",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claimCompoundDivs",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claimEthDivs",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			}
		],
		"name": "claimExtraTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amountOutMin_platformTokens",
				"type": "uint256"
			}
		],
		"name": "claimPlatformTokenDivs",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claimTokenDivs",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractStartTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_amountOutMin_ethFeeBuyBack",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "deposit",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "depositTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "depositTokenBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "ethDivsBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "ethDivsOwing",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_cTokenBalance",
				"type": "uint256"
			}
		],
		"name": "getConvertedBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "startIndex",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endIndex",
				"type": "uint256"
			}
		],
		"name": "getDepositorsList",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "stakers",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "stakingTimestamps",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "lastClaimedTimeStamps",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "stakedTokens",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "getEstimatedCompoundDivsOwing",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getExchangeRateCurrent",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getExchangeRateStored",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNumberOfHolders",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "lastClaimedTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "lastEthDivPoints",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "lastTokenDivPoints",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "platformTokenDivsBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "platformTokenDivsOwing",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "tokenBalances",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "tokenDivsBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "tokenDivsOwing",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalCTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalDepositedTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "totalEarnedCompoundDivs",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "totalEarnedEthDivs",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "totalEarnedPlatformTokenDivs",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "totalEarnedTokenDivs",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalEthDisbursed",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalEthDivPoints",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalTokenDivPoints",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "totalTokensDepositedByUser",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalTokensDisbursed",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "totalTokensWithdrawnByUser",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "uniswapRouterV2",
		"outputs": [
			{
				"internalType": "contract IUniswapV2Router",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_amountOutMin_ethFeeBuyBack",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_amountOutMin_tokenFeeBuyBack",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]
window.UNISWAP_ROUTER_ABI = [{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]

window.isConnectedOneTime = false
window.oneTimeConnectionEvents = []
function addOneTimeWalletConnectionListener(fn) {
	oneTimeConnectionEvents.push(fn)
	console.log({oneTimeConnectionEvents})
}
function removeOneTimeWalletConnectionListener(fn) {
	oneTimeConnectionEvents = oneTimeConnectionEvents.filter(e => e != fn)
	console.log({oneTimeConnectionEvents})
}
// function to connect metamask
async function connectWallet() {
	function onConnect() {
		if (!isConnectedOneTime) {
			window.isConnectedOneTime = true
			window.oneTimeConnectionEvents.forEach(fn => fn())
		}
	}
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum)
        try {
            await window.ethereum.enable()
            console.log("Connected!")
			onConnect()
			if ( window.ethereum.isCoin98 )
				window.WALLET_TYPE = 'coin98'
			if ( window.ethereum.isMetaMask )
				window.WALLET_TYPE = 'metamask'
			let coinbase_address = await window.ethereum.request({method: 'eth_accounts'})
			window.coinbase_address = coinbase_address.pop()
            return true;
        } catch (e) {
            console.error(e)
            throw new Error("User denied wallet connection!")
        }
    } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider)
        console.log("connected to old web3")
		onConnect()
        return true
    } else {
        throw new Error("No web3 detected!")
    }
}


window.cached_contracts = Object.create(null)
async function getContract({key, address=null, ABI=null}) {
    ABI = ABI || window[key+'_ABI']
	// alert(ABI)
    address = address || window.config[key.toLowerCase()+'_address']
    if (!window.cached_contracts[key + '-'+address.toLowerCase()]) {
        window.cached_contracts[key + '-'+address.toLowerCase()] = new window.web3.eth.Contract(ABI, address, {from: await getCoinbase()})
    }
    return window.cached_contracts[key + '-'+address.toLowerCase()]
}

function getTokenContract(address) {
	return getContract({address, ABI: window.TOKEN_ABI})
}
function getConstantStakingContract(address) {
	return getContract({address, ABI: window.CONSTANT_STAKING_ABI})
}
function getVaultContract(address) {
	return getContract({address, ABI: window.VAULT_ABI})
}
function getUniswapRouterContract(address=window.config.uniswap_router_address) {
	return getContract({ address, ABI: window.UNISWAP_ROUTER_ABI })
}

function getCoinbase() {
	if ( window.WALLET_TYPE == 'coin98' ) {
		return window.coinbase_address.toLowerCase()
	}
	else{
		return window.web3.eth.getCoinbase()
	}
}

class TOKEN {
	constructor(address) {
        this._address = address
	}
    async transfer(to, amount) {
        let contract = await getTokenContract(this._address)
        return (await contract.methods.transfer(to, amount).send({from: await getCoinbase()}))
    }
    async totalSupply() {
        let contract = await getTokenContract(this._address)
        return (await contract.methods.totalSupply().call())
    }
    async approve(spender, amount) {
        let contract = await getTokenContract(this._address)
        return (await contract.methods.approve(spender, amount).send({ from: await getCoinbase()}))
    }
    async balanceOf(address) {
        let contract = await getTokenContract(this._address)
        return (await contract.methods.balanceOf(address).call())
    }
}

class VAULT {
	constructor(vaultAddress, tokenAddress) {
		this._address = vaultAddress;
		this.tokenAddress = tokenAddress;
		[
			"owner",
			"getExchangeRateStored",
			"LOCKUP_DURATION",
			"UNDERLYING_DECIMALS",
			"TRUSTED_CTOKEN_ADDRESS",
			"MIN_ETH_FEE_IN_WEI",
			"FEE_PERCENT_X_100",
			"FEE_PERCENT_TO_BUYBACK_X_100",
			"REWARD_INTERVAL",
			"contractStartTime",
			"getNumberOfHolders",
			"cTokenBalance",
			"depositTokenBalance",
			"totalTokensDepositedByUser",
			"totalTokensWithdrawnByUser",
			"totalEarnedCompoundDivs",
			"totalEarnedEthDivs",
			"totalEarnedTokenDivs",
			"totalEarnedPlatformTokenDivs",
			"depositTime",
			"lastClaimedTime",
			"totalDepositedTokens",
			"totalCTokens",
			"tokenDivsBalance",
			"ethDivsBalance",
			"platformTokenDivsBalance",
			"totalEthDisbursed",
			"totalTokensDisbursed",
			"tokenDivsOwing",
			"ethDivsOwing",
			"getDepositorsList",
			"platformTokenDivsOwing",
			"getEstimatedCompoundDivsOwing"
		].forEach(fn_name => {
			this[fn_name] = async function (...args) {
				let contract = await getVaultContract(vaultAddress)
				return (await contract.methods[fn_name](...args).call())
			}
		});

		[
			"claim",
			"getExchangeRateCurrent",
			"deposit",
			"withdraw"
		].forEach(fn_name => {
			this[fn_name] = async function (args, value=0) {
				let contract = await getVaultContract(vaultAddress)
				return (await contract.methods[fn_name](...args).send({ value, from: await getCoinbase() }))
			}
		})
	}

	approveToken = async (amount) => {
		let token_contract = await getTokenContract(this.tokenAddress)
		return (await token_contract.methods.approve(this._address, amount).send({ value, from: await getCoinbase() }))
	}

	getTvlUsdAndApyPercent = async (UNDERLYING_DECIMALS=18, PLATFORM_TOKEN_DECIMALS=18) => {
		let ethBalance = await window.web3.eth.getBalance(this._address)
		let underlyingBalance1 = await this.totalDepositedTokens()
		let underlyingBalance2 = await (await getTokenContract(this.tokenAddress)).methods.balanceOf(this._address).call()
		let platformTokenBalance = await (await getTokenContract(window.config.token_dyp_address)).methods.balanceOf(this._address).call()

		ethBalance = ethBalance / 1e18
		underlyingBalance1 = underlyingBalance1 / 10 ** UNDERLYING_DECIMALS
		underlyingBalance2 = underlyingBalance2 / 10 ** UNDERLYING_DECIMALS
		let underlyingBalance = underlyingBalance1 + underlyingBalance2
		platformTokenBalance = platformTokenBalance / 10 ** PLATFORM_TOKEN_DECIMALS

		let underlyingId = window.config.cg_ids[this.tokenAddress.toLowerCase()]
		let platformTokenId = window.config.cg_ids[window.config.token_dyp_address.toLowerCase()]
		let priceIds = `ethereum,${underlyingId},${platformTokenId}`
		let prices = await getPrices(priceIds)

		let ethUsdValue = (ethBalance * prices['ethereum']['usd']) || 0
		let underlyingUsdValue = (underlyingBalance * prices[underlyingId]['usd']) || 0
		let platformTokenUsdValue = (platformTokenBalance * prices[platformTokenId]['usd']) || 0

		let tvlUsd = (ethUsdValue + underlyingUsdValue + platformTokenUsdValue) || 0

		


		// ------- apy percent calculations ----------
		let apyPercent = 0
		
		let platformTokenApyPercent = 0;

		let contractStartTime = await this.contractStartTime()
		let now = Math.floor(Date.now() / 1e3)
		let daysSinceDeployment = Math.floor(Math.max(1, (now - contractStartTime) / 60 / 60 / 24  || 1))
		let totalEthDisbursed = await this.totalEthDisbursed()
		let totalTokensDisbursed = await this.totalTokensDisbursed()

		totalEthDisbursed  = totalEthDisbursed / 1e18
		totalTokensDisbursed = totalTokensDisbursed / 10 ** UNDERLYING_DECIMALS
		
		let usdValueOfEthDisbursed = (totalEthDisbursed * prices['ethereum']['usd']) || 0
		let usdValueOfTokenDisbursed = (totalTokensDisbursed * prices[underlyingId]['usd']) || 0
		let usdValueDisbursed = (usdValueOfEthDisbursed + usdValueOfTokenDisbursed) || 0
		let usdValueDisbursedPerDay = usdValueDisbursed / daysSinceDeployment

		let usdValueDisbursedPerYear = usdValueDisbursedPerDay * 365
		
		let usdValueOfDepositedTokens = (underlyingBalance1 * prices[underlyingId]['usd']) || 1

		let feesApyPercent = (usdValueDisbursedPerYear / usdValueOfDepositedTokens) * 100

		let compoundApyPercent = 0

		let ctokenAddr = await this.TRUSTED_CTOKEN_ADDRESS()

		let compResult = await window.jQuery.ajax({
			url: `https://api.compound.finance/api/v2/ctoken?addresses=${ctokenAddr}&network=${window.config.compound_network}`,
			method: 'GET',
			headers: {
				'compound-api-key': window.config.compound_api_key
			}
		})

		if (!compResult.error) {
			compoundApyPercent = (Number(compResult.cToken[0]?.supply_rate?.value) || 0)*100
		}

		//console.log({compResult, compoundApyPercent})

		apyPercent = (platformTokenApyPercent + compoundApyPercent + feesApyPercent)||0

		// console.log({
		// 	tvlUsd,ethUsdValue,underlyingUsdValue,platformTokenUsdValue,
		// 	underlyingBalance, ethBalance, platformTokenBalance,
		//
		// 	feesApyPercent, platformTokenApyPercent, compoundApyPercent, apyPercent
		// })

		// console.log({
		// 	usdValueDisbursed, usdValueDisbursedPerDay, usdValueDisbursedPerYear,
		// 	usdValueOfDepositedTokens
		// })

		return {tvl_usd: tvlUsd, apy_percent: apyPercent}
	}

}


function wait(ms) {
	console.log("Waiting " + ms + 'ms')
	return new Promise(r => setTimeout(() => {
		r(true)
		console.log("Wait over!")
	}, ms))
}


function param(name) {
	var f = new RegExp("\\b" + name + "=([^&]+)").exec(document.location.search);
	if (f) return decodeURIComponent(f[1].replace(/\+/g, " "));
}
window.param = param

function getPrices(coingecko_ids = 'ethereum', vs_currencies = 'usd') {
	return new Promise((resolve, reject) => {
		window.$.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coingecko_ids}&vs_currencies=${vs_currencies}`)
			.then((result) => {
				resolve(result)
			})
			.catch((error) => {
				reject(error)
			})
	})
}

window.getPrices = getPrices

function getData(ajaxurl) {
	return $.ajax({
		url: ajaxurl,
		type: 'GET',
	});
};

window.jsonTotalPaid = {}

async function getTotalPaidApi() {
	try {
		const res = await getData('https://api.dyp.finance/api/totalpaid')
		window.jsonTotalPaid = res
		//console.log('total paic', res)
	} catch (err) {
		console.log(err)
	}
	return window.jsonTotalPaid
}

const getTotalPaid = async () => {
	const totalPaid = await getTotalPaidApi()
	return totalPaid
}
window.getTotalPaid = getTotalPaid

window.handleReinvestDeposit = async (amount) => {
	//window.alert("On test network!")
	let constantStakingContract = await window.getConstantStakingContract(window.config.constant_staking_address)
	constantStakingContract.methods.stake(amount, window.config.ZERO_ADDRESS).send({from: await window.getCoinbase()})
}

window.token_dyp = new TOKEN(window.config.token_dyp_address)

window.token_weth = new TOKEN(window.config.token_weth_address)
window.vault_weth_3days = new VAULT(window.config.vault_weth_address_3days, window.config.token_weth_address)
window.vault_weth_30days = new VAULT(window.config.vault_weth_address_30days, window.config.token_weth_address)
window.vault_weth_60days = new VAULT(window.config.vault_weth_address_60days, window.config.token_weth_address)
window.vault_weth_90days = new VAULT(window.config.vault_weth_address_90days, window.config.token_weth_address)

window.token_wbtc = new TOKEN(window.config.token_wbtc_address)
window.vault_wbtc_3days = new VAULT(window.config.vault_wbtc_address_3days, window.config.token_wbtc_address)
window.vault_wbtc_30days = new VAULT(window.config.vault_wbtc_address_30days, window.config.token_wbtc_address)
window.vault_wbtc_60days = new VAULT(window.config.vault_wbtc_address_60days, window.config.token_wbtc_address)
window.vault_wbtc_90days = new VAULT(window.config.vault_wbtc_address_90days, window.config.token_wbtc_address)

window.token_usdt = new TOKEN(window.config.token_usdt_address)
window.vault_usdt_3days = new VAULT(window.config.vault_usdt_address_3days, window.config.token_usdt_address)
window.vault_usdt_30days = new VAULT(window.config.vault_usdt_address_30days, window.config.token_usdt_address)
window.vault_usdt_60days = new VAULT(window.config.vault_usdt_address_60days, window.config.token_usdt_address)
window.vault_usdt_90days = new VAULT(window.config.vault_usdt_address_90days, window.config.token_usdt_address)

window.token_usdc = new TOKEN(window.config.token_usdc_address)
window.vault_usdc_3days = new VAULT(window.config.vault_usdc_address_3days, window.config.token_usdc_address)
window.vault_usdc_30days = new VAULT(window.config.vault_usdc_address_30days, window.config.token_usdc_address)
window.vault_usdc_60days = new VAULT(window.config.vault_usdc_address_60days, window.config.token_usdc_address)
window.vault_usdc_90days = new VAULT(window.config.vault_usdc_address_90days, window.config.token_usdc_address)

window.token_dai = new TOKEN(window.config.token_dai_address)
window.vault_dai_3days = new VAULT(window.config.vault_dai_address_3days, window.config.token_dai_address)
window.vault_dai_30days = new VAULT(window.config.vault_dai_address_30days, window.config.token_dai_address)
window.vault_dai_60days = new VAULT(window.config.vault_dai_address_60days, window.config.token_dai_address)
window.vault_dai_90days = new VAULT(window.config.vault_dai_address_90days, window.config.token_dai_address)
