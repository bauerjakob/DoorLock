
using System.Device.Gpio;
using DoorLockClient.Config;
using DoorLockClient.Services;
using DoorLockClient.Worker;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json;

var appsettings = await File.ReadAllTextAsync("./appsettings.json");
var clientOptions = JsonConvert.DeserializeObject<DoorLockClientOptions>(appsettings);

var doorLockContractService = new DoorLockContractService(clientOptions);
var doorLockPhysicalService = new DoorLockPhysicalService();

while (true)
{
    var state = await doorLockContractService.GetDoorLockState();
    Console.WriteLine(state);
    doorLockPhysicalService.SetDoorLockState(state);
    await Task.Delay(TimeSpan.FromSeconds(3));
}

