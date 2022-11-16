import { HardhatUserConfig } from "hardhat/config";
import "dotenv/config";
import "@nomicfoundation/hardhat-toolbox";

const GOERLI_URL = process.env.GOERLI_URL as string;
const PRIVATE_KEY = process.env.PRIVATE_KEY as string;

console.log("RU: ", GOERLI_URL);

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: GOERLI_URL,
      accounts: [PRIVATE_KEY],
    }
  }
};

export default config;
