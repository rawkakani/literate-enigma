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

  describe("deposit", function () {
      it("Should allow an investor to deposit funds", async function () {
          await crowdfunding.createCampaign("Test Business", 100, 604800, 604800, 10);
          await crowdfunding.deposit(0, 1, 150);  // Investor ID 1, depositing 150
          const campaign = await crowdfunding.getCampaignInfo(0);
          expect(parseInt(campaign.fundsRaised.toString())).to.equal(150);
      });

      it("Should revert if the amount is less than 101", async function () {
          await crowdfunding.createCampaign("Test Business", 100, 604800, 604800, 10);
          await expect(crowdfunding.deposit(0, 1, 100)).to.be.revertedWith("Must deposit a amount greataer then 100");
      });
  });

  describe("withdraw", function () {
      it("Should allow an investor to withdraw funds after the waiting period", async function () {
          await crowdfunding.createCampaign("Test Business", 100, 1, 1, 10);  // Very short durations for testing
          await crowdfunding.deposit(0, 1, 150);

          // Simulate some delay (e.g., by mining some empty blocks)
          for (let i = 0; i < 10; i++) {
              await ethers.provider.send("evm_mine");
          }

          await crowdfunding.withdraw(0, 1);
          // Assuming there is a function to check an investor's withdrawn funds
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
