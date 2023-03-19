using DoorLockClient.Config;
using DoorLockClient.Models;
using Nethereum.Contracts;
using Nethereum.JsonRpc.WebSocketStreamingClient;
using Nethereum.RPC.Reactive.Eth.Subscriptions;
using Nethereum.Web3;
using Org.BouncyCastle.Asn1;

namespace DoorLockClient.Services;

public class DoorLockService
{
    private const string DoorStateFunction = "DoorState"; 
        
    private readonly string _url;
    private readonly string _contractAddress;
    private readonly string _abi;

    public DoorLockService(DoorLockClientOptions options) :
        this(options.ContractUrl, options.ContractAddress, options.ContractAbi.ToString())
    {
    }
    
    public DoorLockService(string url, string contractAddress, string abi)
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

        return doorOpen ? DoorLockState.Open : DoorLockState.Closed;
    }
}