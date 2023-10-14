const DonationContract = artifacts.require("DonationContract");

module.exports = (deployer) => {
    deployer.deploy(DonationContract);
}