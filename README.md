# Ripple
## Crowdfunding Contract

This is a simple Crowdfunding contract developed in Solidity. It allows users to create crowdfunding campaigns, deposit funds into these campaigns, withdraw funds, and get information about the campaigns.

## Functions

### Create Campaign

`createCampaign(string memory _businessName, uint _goal, uint _campaignDuration, uint _waitingPeriodDuration, uint _ROI) public returns (uint campaignID)`

This function is used to create a new crowdfunding campaign. It takes the following parameters:

- `_businessName`: The name of the business for which the campaign is being created.
- `_goal`: The fundraising goal of the campaign.
- `_campaignDuration`: The duration of the campaign in seconds.
- `_waitingPeriodDuration`: The duration of the waiting period in seconds after the campaign ends before funds can be withdrawn.
- `_ROI`: The Return on Investment (ROI) percentage if the campaign goal is reached.

The function returns the `campaignID` which is a unique identifier for the campaign.


### Deposit
`deposit(uint _campaignID, uint _investorId, uint _amount) public`

This function allows an investor to deposit funds into a campaign. It takes the following parameters:

- `_campaignID`: The ID of the campaign to which funds are being deposited.
- `_investorId`: The ID of the investor who is depositing the funds.
- `_amount`: The amount of funds being deposited.

This function also checks that the campaign ID is valid and the amount being deposited is greater than 100.

### Withdraw
`withdraw(uint _campaignID, uint _investorId) public`

This function allows an investor to withdraw funds from a campaign after the waiting period has ended. It takes the following parameters:

- `_campaignID`: The ID of the campaign from which funds are being withdrawn.
- `_investorId`: The ID of the investor who is withdrawing the funds.

If the campaign goal has been reached, the investor will receive their invested amount plus the ROI. If the campaign goal has not been reached, the investor will only receive their invested amount.

### Get Campaign
`getCampaignInfo(uint _campaignID) public view returns (string memory businessName, uint goal, uint endTime, uint waitingPeriodEnd, uint ROI, uint fundsRaised)`

This function returns information about a specific campaign. It takes the following parameter:

- `_campaignID`: The ID of the campaign for which information is being requested.

The function returns the following information about the campaign:

- `businessName`: The name of the business for which the campaign was created.
- `goal`: The fundraising goal of the campaign.
- `endTime`: The timestamp when the campaign ends.
- `waitingPeriodEnd`: The timestamp when the waiting period ends.
- `ROI`: The Return on Investment (ROI) percentage.
- `fundsRaised`: The amount of funds that have been raised in the campaign.

## Structures

### `Campaign`

This contract defines a `Campaign` struct which contains all the information about a crowdfunding campaign, including:

- `businessName`: The name of the business.
- `goal`: The fundraising goal.
- `endTime`: The end time of the campaign.
- `waitingPeriodEnd`: The end time of the waiting period.
- `ROI`: The Return on Investment (ROI) percentage.
- `fundsRaised`: The amount of funds raised.
- `investments`: A mapping from investor IDs to the amounts they have invested.

## State Variables

- `campaignCount`: A counter of the total number of campaigns created.
- `campaigns`: A mapping from campaign IDs to `Campaign` structs.
