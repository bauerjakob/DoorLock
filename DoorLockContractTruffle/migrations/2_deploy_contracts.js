const DoorLockContract = artifacts.require("DoorLock");

module.exports = function(deployer) {
  deployer.deploy(DoorLockContract);
};
