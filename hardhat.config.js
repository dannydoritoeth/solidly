require("@nomiclabs/hardhat-waffle");
require("@float-capital/solidity-coverage");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.11",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },  
  networks: {
    hardhat: {
      initialBaseFeePerGas: 0,
    },
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: [process.env.PRIVATE_KEY_GANACHE],
      saveDeployments: true,
    },     
    ftmtest: {
      url: "https://rpc.testnet.fantom.network/",
    }
  },
};
