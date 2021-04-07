/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');

const { infuraAPIKEY, mnemonic } = require('./secrets.json');

module.exports = {
  solidity: "0.8.1",
  networks: {
    ropsten: {
      url: `https://ropsten.infura.io/v3/${infuraAPIKEY}`,
      accounts: {mnemonic: mnemonic}
    }
  },
};
