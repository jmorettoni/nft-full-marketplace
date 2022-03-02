require("@nomiclabs/hardhat-waffle");
const fs = require('fs');


  //const { alchemyApiKey,  mnemonic , privateKey  } = require('./secrets.json'); 
  const privateKey = fs.readFileSync(".privateKey").toString().trim() || "";
  const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
  defaultNetwork: "hardhat",
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
  },

  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

