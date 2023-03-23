// const DocumentVerifier = artifacts.require("DocumentVerifier");
const DocumentVerifierFactory = artifacts.require("DocumentVerifierFactory");

module.exports = function (deployer, network, accounts) {
  // deployer.deploy(DocumentVerifier, accounts[0], "");
  deployer.deploy(DocumentVerifierFactory);
};
