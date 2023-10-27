import Crowdfunding from '../../../artifacts/contracts/ripple.sol/Crowdfunding.json';
import provider from '../../utils/ethersProvider';
const ethers = require("ethers");
// require('dotenv').config();


const contractAddress = '0x8a437EB7ebD37E7Ee78A7D6d179d37cac31F20e5';
const contractABI = Crowdfunding.abi;
const contract = new ethers.Contract(contractAddress, contractABI, provider);


export default contract;