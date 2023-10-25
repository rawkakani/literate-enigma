// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Crowdfunding {

    struct Campaign {
        string businessName;
        uint goal;
        uint endTime;
        uint waitingPeriodEnd;
        uint ROI;
        uint fundsRaised;
        mapping(uint => uint) investments;
    }

    uint public campaignCount = 0;
    mapping(uint => Campaign) public campaigns;

    function createCampaign(
        string memory _businessName, 
        uint _goal, 
        uint _campaignDuration, 
        uint _waitingPeriodDuration, 
        uint _ROI
    ) 
        public 
        returns (uint campaignID) 
    {
        require(_goal > 0, "Goal amount must be greater than 0");
        require(_campaignDuration > 0, "Campaign duration must be greater than 0");

        campaignID = campaignCount++;
        Campaign storage newCampaign = campaigns[campaignID];
        
        newCampaign.businessName = _businessName;
        newCampaign.goal = _goal;
        newCampaign.endTime = block.timestamp + _campaignDuration;
        newCampaign.waitingPeriodEnd = newCampaign.endTime + _waitingPeriodDuration;
        newCampaign.ROI = _ROI;
        newCampaign.fundsRaised = 0;
    }

    function deposit(uint _campaignID, uint _investorId, uint _amount) public {
        require(_campaignID < campaignCount, "Invalid campaign ID");
        require(_amount > 0, "Must deposit a positive amount");

        Campaign storage campaign = campaigns[_campaignID];

        campaign.investments[_investorId] += _amount;
        campaign.fundsRaised += _amount;
    }

    function withdraw(uint _campaignID, uint _investorId) public {
        require(_campaignID < campaignCount, "Invalid campaign ID");
        require(block.timestamp >= campaigns[_campaignID].waitingPeriodEnd, "Waiting period has not ended");
        
        Campaign storage campaign = campaigns[_campaignID];
        uint amountToWithdraw = campaign.investments[_investorId];
        if(campaign.fundsRaised >= campaign.goal) {
            // If goal is reached, calculate ROI
            amountToWithdraw += (amountToWithdraw * campaign.ROI) / 100;
        }
        require(amountToWithdraw > 0, "No funds to withdraw");
        campaign.investments[_investorId] = 0;  // Reset investment amount to 0
    }

    function getCampaignInfo(uint _campaignID)
        public
        view
        returns (
            string memory businessName,
            uint goal,
            uint endTime,
            uint waitingPeriodEnd,
            uint ROI,
            uint fundsRaised
        )
    {
        require(_campaignID < campaignCount, "Invalid campaign ID");
        
        Campaign storage campaign = campaigns[_campaignID];
        
        businessName = campaign.businessName;
        goal = campaign.goal;
        endTime = campaign.endTime;
        waitingPeriodEnd = campaign.waitingPeriodEnd;
        ROI = campaign.ROI;
        fundsRaised = campaign.fundsRaised;
    }
}
