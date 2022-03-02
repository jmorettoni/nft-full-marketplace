require("@nomiclabs/hardhat-waffle");

require('@nomiclabs/hardhat-ethers');


// This is a sample Hardhat task. To learn how to create your own go to 
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners(); 
  for (const account of accounts) {
    console.log(account.address);
  }
});


const fs = require('fs');


  //const { alchemyApiKey,  mnemonic , privateKey  } = require('./secrets.json'); 
  const privateKey = fs.readFileSync(".privateKey").toString().trim() || "";
  const mnemonic = fs.readFileSync(".mnemonic").toString().trim() || "";
  const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
  defaultNetwork: "hardhat",
 
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },

  networks: {


    hardhat: {
      chainId: 1337
    },
    /*  */
    mumbai: { 
      // Infura
      //url: `https://polygon-mumbai.infura.io/v3/${infuraId}`,
      url: "https://rpc-mumbai.maticvigil.com",
      //accounts: [process.env.privateKey]
      accounts: [privateKey]
    },
    matic: {
      // Infura
      //url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      url: "https://rpc-mainnet.maticvigil.com",
      //accounts: [process.env.privateKey]
      accounts: [privateKey]
    }, 


    localhost: {
      url: "http://127.0.0.1:8545"
    },

    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: {mnemonic: mnemonic}
    },
    
    mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: {mnemonic: mnemonic}
    }

    
  },
   paths: {
      sources: "./contracts",
      tests: "./test",
      cache: "./cache",
      //artifacts: './src/artifacts',
      artifacts: "./artifacts"
    },
    mocha: {
      timeout: 20000
    }


};

