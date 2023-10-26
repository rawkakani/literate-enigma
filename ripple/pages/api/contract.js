import Crowdfunding from '../../../artifacts/contracts/ripple.sol/Crowdfunding.json';
import provider from '../../utils/ethersProvider';
const ethers = require("ethers");
// require('dotenv').config();


const contractAddress = '0x5D019375827CA3d8bCE404adF1e8F740b54F6904';
const contractABI = Crowdfunding.abi;
const contract = new ethers.Contract(contractAddress, contractABI, provider);


export default contract;