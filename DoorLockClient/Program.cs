
using System.Device.Gpio;
using DoorLockClient.Config;
using DoorLockClient.Services;
using DoorLockClient.Worker;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json;

static IHostBuilder CreateHostBuilder(string[] args) =>
    Host.CreateDefaultBuilder(args)
        .UseSystemd()
        .ConfigureServices((hostContext, services) =>
        {
            services.AddHostedService<DoorLockWorker>();
        });
                                                                             
                                                                             
// var appsettings = await File.ReadAllTextAsync("./appsettings.json");
// var clientOptions = JsonConvert.DeserializeObject<DoorLockClientOptions>(appsettings);
//
// var doorLockService = new DoorLockService(clientOptions);
//
// while (true)
// {
//     var state = await doorLockService.GetDoorLockState();
//     Console.WriteLine(state);
//
//     await Task.Delay(TimeSpan.FromSeconds(3));
// }   
//
