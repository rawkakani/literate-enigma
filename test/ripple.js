const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Crowdfunding", function () {
    let Crowdfunding, crowdfunding, owner, addr1, addr2;

    beforeEach(async () => {
        Crowdfunding = await ethers.getContractFactory("Crowdfunding");
        [owner, addr1, addr2, _] = await ethers.getSigners();
        crowdfunding = await Crowdfunding.deploy();
    });

    describe("createCampaign", function () {
        it("Should create a new campaign", async function () {
            await crowdfunding.createCampaign("Test Business", 100, 604800, 604800, 10);
            const campaign = await crowdfunding.getCampaignInfo(0);
            expect(campaign.businessName).to.equal("Test Business");
        });
    });

    describe("registerInvestor", function () {
        it("Should register a new investor", async function () {
            await crowdfunding.registerInvestor(1, { from: addr1.address });
            const investorAddress = await crowdfunding.investors(1);
            expect(investorAddress).to.equal(addr1.address);
        });
    });

    describe("deposit", function () {
        it("Should allow an investor to deposit funds", async function () {
            await crowdfunding.createCampaign("Test Business", 100, 604800, 604800, 10);
            await crowdfunding.registerInvestor(1, { from: addr1.address });
            await crowdfunding.deposit(0, 1, 50, { from: addr1.address });
            const campaign = await crowdfunding.getCampaignInfo(0);
            expect(campaign.fundsRaised.toNumber()).to.equal(50);
        });
    });

    describe("withdraw", function () {
        it("Should allow an investor to withdraw funds after the waiting period", async function () {
            await crowdfunding.createCampaign("Test Business", 100, 1, 1, 10);  // Very short durations for testing
            await crowdfunding.registerInvestor(1, { from: addr1.address });
            await crowdfunding.deposit(0, 1, 50, { from: addr1.address });

            // Simulate some delay (e.g., by mining some empty blocks)
            for (let i = 0; i < 10; i++) {
                await ethers.provider.send("evm_mine");
            }

            await crowdfunding.withdraw(0, 1, { from: addr1.address });
            // Add your checks here, e.g., check balance of addr1, check campaign funds, etc.
        });
    });

    describe("getCampaignInfo", function () {
        it("Should return the correct campaign info", async function () {
            await crowdfunding.createCampaign("Test Business", 100, 604800, 604800, 10);
            const campaign = await crowdfunding.getCampaignInfo(0);
            expect(campaign.businessName).to.equal("Test Business");
        });
    });
});
