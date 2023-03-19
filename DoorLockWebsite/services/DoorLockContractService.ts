import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import appsettings from '../appsettings.json'
import abi from '../abis/DoorLockAbi.json'

export default class DoorLockContractService {
    private _active: boolean;
    private _libary: Web3Provider | undefined;

    constructor()
    {
        const { active, library } = useWeb3React<Web3Provider>()
        
        this._active = active;
        this._libary = library;
    }

    public async GetDoorState() : Promise<boolean>
    {
        if (this._active)
        {
            throw new Error("Please install metamask");
        }

        const signer: any = this._libary?.getSigner();
        const contractAddress = appsettings.contractAddress;
        const contract = new ethers.Contract(contractAddress, abi, signer);

        const currentDoorState = await contract.DoorState();
        return currentDoorState as boolean;
    }


    public async ToggleDoorState() : Promise<void>
    {
        if (this._active)
        {
            throw new Error("Please install metamask");
        }

        const signer: any = this._libary?.getSigner();
        const contractAddress = appsettings.contractAddress;
        const contract = new ethers.Contract(contractAddress, abi, signer);

        await contract.toggleDoor();
    }
}


