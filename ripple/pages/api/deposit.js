import contract  from './contract';
import provider from '../../utils/ethersProvider';

export default async (req, res) => {
    if (req.method === 'POST') {
        try {
            const {
                campaignID,
                investorId,
                amount
            } = req.body;

            console.log(req.body)
            // check if amount is greater than 100
            if ( amount <= 100 ) {
                return res.status(400).json({ error: 'Amount must be greater than 100'});
            }

            const campaignCount = await contract.campaignCount(); 

            // check if campaignID is valid
            if (campaignID >= campaignCount) {
                return res.status(400).json({error: 'Invalid campaign ID'});
            }
            
//            const campaign = await contract.campaigns[campaignID];

            // if (!campaign || campaign.businessName === '') {
            //     return res.status(400).json({ error: 'Campaign does not exist' });
            // }

            const tx = await contract
                .connect(provider)
                .deposit(campaignID, investorId, amount);
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