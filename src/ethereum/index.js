import abi from "../abis/src/contracts/BlockFunder.sol/BlockFunder.json";
import address from "../abis/contractAddress.json";
import { setGlobalState } from "../context";
import { ethers } from "ethers";
import { InjectedConnector } from "@web3-react/injected-connector";

const { ethereum } = window;
const contractAddress = address.address;
const contractAbi = abi.abi;

export const injected = new InjectedConnector({
  supportedChainIds: [5001, 1, 5, 31337],
});

const isWallectConnected = async () => {
  try {
    if (!ethereum) return alert("Please install Metamask");
    const accounts = await ethereum.request({ method: "eth_accounts" });
    setGlobalState("connectedAccount", accounts[0]?.toLowerCase());

    window.ethereum.on("chainChanged", (chainId) => {
      window.location.reload();
    });

    window.ethereum.on("accountsChanged", async () => {
      setGlobalState("connectedAccount", accounts[0]?.toLowerCase());
      await isWallectConnected();
    });

    if (accounts.length) {
      setGlobalState("connectedAccount", accounts[0]?.toLowerCase());
    } else {
      alert("Please connect wallet.");
      console.log("No accounts found.");
    }
  } catch (error) {
    reportError(error);
  }
};

const createProject = async ({
  title,
  description,
  image,
  amount,
  expires,
}) => {
  try {
    if (!ethereum) return alert("Please install Metamask");

    const provider = new ethers.providers.Web3Provider(ethereum);

    const signer = provider.getSigner();

    const contract = new ethers.Contract(contractAddress, contractAbi, signer);

    amount = ethers.utils.parseEther(`${amount}`);

    await contract.createProject(title, description, image, amount, expires);
  } catch (error) {
    reportError(error);
  }
};

const loadProjects = async () => {
  try {
    if (!ethereum) return alert("Please install Metamask");

    const provider = new ethers.providers.Web3Provider(ethereum);

    const signer = provider.getSigner();

    const contract = new ethers.Contract(contractAddress, contractAbi, signer);

    const projects = await contract.getProjects();

    const stats = await contract.stats();

    console.log(projects);
    console.log(stats);
  } catch (error) {
    reportError(error);
  }
};

const reportError = (error) => {
  console.log(error.message);
  throw new Error("No ethereum object.");
};

export { isWallectConnected, createProject, loadProjects };
