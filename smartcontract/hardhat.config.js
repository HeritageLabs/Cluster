require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    testnet: {
      url: "https://eth.bd.evmos.dev:8545",
      accounts: [process.env.PRIVATE_KEY],
    },
    mainnet: {
      url: "https://eth.bd.evmos.org:8545",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
