import contract  from './contract';
import provider from '../../utils/ethersProvider';


export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { 
                _businessName, 
                _goal,
                _campaignDuration,
            } = JSON.parse(req.body);

            console.log(_businessName, _goal, _campaignDuration)
            const tx = await contract
                .connect(provider)
                .createCampaign(_businessName, _goal, _campaignDuration);

            
            res.status(200).json({message: 'Compaign Created Successful'});

        } catch (error) {
            console.error('Error creating campaign:', error);
            res.status(500).json({ error: 'An error occurred while interacting with the contract.' });
        }
    } else {
        res.status(405).end();
    }
};