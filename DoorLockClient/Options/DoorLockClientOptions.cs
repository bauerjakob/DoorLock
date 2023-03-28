using Newtonsoft.Json.Linq;

namespace DoorLockClient.Config;

public class DoorLockClientOptions
{
    public string ContractUrl { get; set; }
    
    public string ContractAddress { get; set; }
    
    public JArray ContractAbi { get; set; }
}
