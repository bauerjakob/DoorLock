
using System.Text.Json.Nodes;
using DoorLockClient.Config;
using DoorLockClient.Services;
using Newtonsoft.Json;

var appsettings = await File.ReadAllTextAsync("./appsettings.json");
var clientOptions = JsonConvert.DeserializeObject<DoorLockClientOptions>(appsettings);

var doorLockService = new DoorLockService(clientOptions);
while (true)
{
    var currentState = await doorLockService.GetDoorLockState();
    Console.WriteLine(currentState);
    await Task.Delay(TimeSpan.FromSeconds(1));
}
