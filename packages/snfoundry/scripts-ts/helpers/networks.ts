import { RpcProvider, Account } from "starknet";
import path from "path";
import dotenv from "dotenv";
import { Networks } from "../types";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

// devnet
const PRIVATE_KEY_DEVNET =
  process.env.PRIVATE_KEY_DEVNET ||
  "0x2bbf4f9fd0bbb2e60b0316c1fe0b76cf7a4d0198bd493ced9b8df2a3a24d68a";
const RPC_URL_DEVNET = process.env.RPC_URL_DEVNET || "http://127.0.0.1:5050";
const ACCOUNT_ADDRESS_DEVNET =
  process.env.ACCOUNT_ADDRESS_DEVNET ||
  "0xb3ff441a68610b30fd5e2abbf3a1548eb6ba6f3559f2862bf2dc757e5828ca";

const providerDevnet =
  RPC_URL_DEVNET && new RpcProvider({ nodeUrl: RPC_URL_DEVNET });
const deployerDevnet =
  ACCOUNT_ADDRESS_DEVNET &&
  PRIVATE_KEY_DEVNET &&
  new Account(providerDevnet, ACCOUNT_ADDRESS_DEVNET, PRIVATE_KEY_DEVNET, "1");

// goerli
const providerGoerli =
  process.env.RPC_URL_GOERLI &&
  new RpcProvider({ nodeUrl: process.env.RPC_URL_GOERLI });
const deployerGoerli =
  process.env.ACCOUNT_ADDRESS_GOERLI &&
  process.env.PRIVATE_KEY_GOERLI &&
  new Account(
    providerGoerli,
    process.env.ACCOUNT_ADDRESS_GOERLI,
    process.env.PRIVATE_KEY_GOERLI,
    "1"
  );

// sepolia
const providerSepolia =
  process.env.RPC_URL_SEPOLIA &&
  new RpcProvider({ nodeUrl: process.env.RPC_URL_SEPOLIA });
const deployerSepolia =
  process.env.ACCOUNT_ADDRESS_SEPOLIA &&
  process.env.PRIVATE_KEY_SEPOLIA &&
  new Account(
    providerSepolia,
    process.env.ACCOUNT_ADDRESS_SEPOLIA,
    process.env.PRIVATE_KEY_SEPOLIA,
    "1"
  );

// mainnet
const providerMainnet =
  process.env.RPC_URL_MAINNET &&
  new RpcProvider({ nodeUrl: process.env.RPC_URL_MAINNET });
const deployerMainnet =
  process.env.ACCOUNT_ADDRESS_MAINNET &&
  process.env.PRIVATE_KEY_MAINNET &&
  new Account(
    providerMainnet,
    process.env.ACCOUNT_ADDRESS_MAINNET,
    process.env.PRIVATE_KEY_MAINNET,
    "1"
  );

export const networks: Networks = {
  devnet: { provider: providerDevnet, deployer: deployerDevnet },
  goerli: { provider: providerGoerli, deployer: deployerGoerli },
  sepolia: { provider: providerSepolia, deployer: deployerSepolia },
  mainnet: { provider: providerMainnet, deployer: deployerMainnet },
};
