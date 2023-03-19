import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import appsettings from '../appsettings.json'
import abi from '../abis/DoorLockAbi.json'

export default class DoorLockContractService {
    private _web3Provider: Web3Provider | undefined;

    constructor(web3Provider: Web3Provider)
    {
        this._web3Provider = web3Provider;
    }

    public async GetDoorState() : Promise<boolean>
    {
        const contract = this.GetContract();

        const currentDoorState = await contract.DoorState();
        return currentDoorState as boolean;
    }

    public StartListenToDoorStateChanges() : Promise<ethers.Contract>
    {
        const contract = this.GetContract();

        return contract.on("DoorStateChanged", (newState: boolean) => {
            console.log("DoorStateChanged", newState)
        });
    }
    

    public async ToggleDoorState() : Promise<void>
    {
        const contract = this.GetContract();

        await contract.toggleDoor();
    }

    private GetContract() : ethers.Contract {
        const signer: any = this._web3Provider?.getSigner();
        const contractAddress = appsettings.contractAddress;
        const contract = new ethers.Contract(contractAddress, abi, signer);
        return contract;
    }
}


