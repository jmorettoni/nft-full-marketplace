// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
    // Hardhat always runs the compile task when running scripts with its command
    // line interface.
    //
    // If this script is run directly using `node` you may want to call compile
    // manually to make sure everything is compiled
    // await hre.run('compile');



    /////////////////////////////////////////////////////////////////
     /////////////////////////CHANGE THE SHARE config  bellow /////////// 
      /////////////////////////////////////////////////////////////////
      //change this with you contract share
      const shareAddrs = [
        "0xaf4521fD334c9Fd8a02ba96740D8142a5adE1B28", //the first address that will receive share
        "0x9CC62A0306EcF10063e5bAc91DFf5487E113F59D" //the second address that will receive share
      ]; 
      //change this with you contract share 
      const sharePct = [
        90, //pct to the first address
        10  //pct to the second address
      ];     
    /////////////////////////////////////////////////////////////////
    /////////////////////////CHANGE THE SHARE config  above //////// 
    /////////////////////////////////////////////////////////////////


 
    // We get the contract payments to deploy
    const  PAYMENTS = await hre.ethers.getContractFactory("PAYMENTS");
    const  payments = await PAYMENTS.deploy(shareAddrs, sharePct); 
    //console.log("PAYMENTS deployed to:", payments.address);





    // We get the contract create nft to deploy with the contract payment address included;
     const NFT_USE_PAYMENTS = await hre.ethers.getContractFactory("NFT_USE_PAYMENTS");
     const nft_use_payments  = await NFT_USE_PAYMENTS.deploy(  payments.address ); 
     console.log("NFT_USE_PAYMENTS deployed to: "+ nft_use_payments.address+" (USING PAYMENT CONTRACT :"+payments.address+")" );
     
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
