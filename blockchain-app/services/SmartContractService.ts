import { setHasMetamask } from "@/redux/slices/metaMaskSlice";
import { injected } from "@/utils/connectors";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { useDispatch, useSelector } from "react-redux";
import abi from '../abis/ValueStore.json'


export async function execute() {
    const { active, account, library, connector, activate, deactivate } = useWeb3React<Web3Provider>()

    if (active) {
        // const provider = new Web3Provider((window as any).ethereum);
        const signer: any = library?.getSigner();

        const contractAddress = "0x42B795769B85fd7Ef576dEFAbDb550D1e64a5742";
        const contract = new ethers.Contract(contractAddress, abi, signer);
        try {
            await contract.set(12, 42);
        } catch (error) {
            console.log(error);
        }
    } else {
        console.log("Please install MetaMask");
    }
}

