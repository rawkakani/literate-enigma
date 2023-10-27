import contract from './contract';
import provider from '../../utils/ethersProvider';

export default async (req, res) => {
    if (req.method === 'GET') {
        try {
            const { _campaignID } = req.query;

            const campaignCount = await contract.campaignCount();

            if (_campaignID >= campaignCount) {
                return res.status(400).json({ error: 'Invalid campaign ID' });
            }

            const campaignInfo = await contract.getCampaignInfo(_campaignID);
            const [
                businessName,
                goal,
                endTime,
                waitingPeriodEnd,
                ROI,
                fundsRaised
            ] = campaignInfo;
            console.log('campaign info: ', campaignInfo);

            
            res.status(200).json({
                businessName,
                goal: goal.toNumber,
                endTime: endTime.toNumber,
                waitingPeriodEnd: waitingPeriodEnd.toNumber,
                ROI: ROI.toNumber,
                fundsRaised: fundsRaised.toNumber,
            });
            // console.log(res);


        } catch (error) {
            console.error('Error getting Campaign Information:', error);
            res.status(500).json({ error: 'An error occurred while retrieving campaign information.' });
        }

    } else {
        res.status(405).end();
    }
};
