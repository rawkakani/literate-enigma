import Crowdfunding from '../../../artifacts/contracts/ripple.sol/Crowdfunding.json';
import { ethers } from 'ethers';

// Replace 'your-infura-project-id' with your actual Infura Project ID
const provider = new ethers.providers.InfuraProvider('sepolia', '2db2b7fe04034b08880ff7a62d624b17');



const contractAddress = '0x5D019375827CA3d8bCE404adF1e8F740b54F6904';
const contractABI = Crowdfunding.abi;
const contract = new ethers.Contract(contractAddress, contractABI, provider);



export {contract;