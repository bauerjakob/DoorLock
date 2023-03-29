using DoorLockClient.Config;
using DoorLockClient.Models;
using Nethereum.Web3;
using Nethereum.Contracts;

namespace DoorLockClient.Services;

public class DoorLockContractService
{
    private const string DoorStateFunction = "DoorState";
    
    private readonly string _url;
    private readonly string _contractAddress;
    private readonly string _abi;
    
    public DoorLockContractService(DoorLockClientOptions options) :
        this(options.ContractUrl, options.ContractAddress, options.ContractAbi.ToString())
    {
    }

    public DoorLockContractService(string url, string contractAddress, string abi)
    {
        _url = url;
        _contractAddress = contractAddress;
        _abi = abi;
    }
    
    private Web3 Web3 => new Web3(_url);
    private Contract Contract => Web3.Eth.GetContract(_abi, _contractAddress);
    
    public async Task<DoorLockState> GetDoorLockState()
    {
        var doorOpen = await Contract
            .GetFunction(DoorStateFunction)
            .CallAsync<bool>();

        var state =  doorOpen ? DoorLockState.Open : DoorLockState.Closed;
        
        return state;
    }
}