import { ethers } from 'ethers';
require('dotenv').config();
// const ethers = require("ethers");

// const INFURA_API_KEY = process.env.INFURA_API_KEY;

// The actual hardhat network url goes here
const networkURL = 'https://sepolia.infura.io/v3/2db2b7fe04034b08880ff7a62d624b17';
const ethersprovider = new ethers.JsonRpcProvider(networkURL);

const privateKey = '95d0c9d019793cd2bda39f93064aa60bbf64ca9abba40c22566effc5524b3cb6';

// Initialize the wallet
const wallet = new ethers.Wallet(privateKey);

// Connect the wallet to the provider
const provider = new ethers.JsonRpcProvider(networkURL);
const connectedWallet = wallet.connect(provider);

export default connectedWallet;

// export default provider;
