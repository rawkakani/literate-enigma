import contract  from './contract';
import provider from '../../utils/ethersProvider';

export default async (req, res) => {
    if (req.method === 'POST') {
        try {
            const {
                _campaignID,
                _investorId,
                _amount
            } = req.body;

            // check if amount is greater than 100
            if ( _amount <= 100 ) {
                return res.status(400).json({ error: 'Amount must be greater than 100'});
            }

            const campaignCount = await contract.campaignCount(); 

            // check if campaignID is valid
            if (_campaignID >= campaignCount) {
                return res.status(400).json({error: 'Invalid campaign ID'});
            }
            
            const campaign = await contract.campaigns[_campaignID];

            // if (!campaign || campaign.businessName === '') {
            //     return res.status(400).json({ error: 'Campaign does not exist' });
            // }

            const tx = await contract
                .connect(provider)
                .deposit(_campaignID, _investorId, _amount);
            await tx.wait();

            res.status(200).json({ message: 'Deposit successful' });

        } catch(error) {
            console.error('Error making deposit:', error);
            res.status(500).json({ error: 'An error occurred while interacting with the contract.' });
        }

    } else {
        res.status(405).end();
    }
}