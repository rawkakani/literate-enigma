import contract  from './contract';
import provider from '../../utils/ethersProvider';


export default async (req, res) => {
    if (req.method === 'POST') {
        try {
            const {_campaignID, _investorId} = req.body;

            const campaignCount = await contract.campaignCount();

            // check if campaignID is valid
            if (_campaignID >= campaignCount) {
                return res.status(400).json({error: 'Invalid campaign ID'});
            }
            
            const tx = await contract
                .connect(provider)
                .withdraw(_campaignID, _investorId);
            await tx.wait();

            res.status(200).json({ message: 'Withdraw successful' });

        } catch (error) {
            console.error('Error making withdrawal:', error);
            res.status(500).json({ error: 'An error occurred while trying to withdraw funds.' });
        }
    } else {
        res.status(405).end();
    }
};