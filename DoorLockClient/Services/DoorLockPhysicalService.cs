using System.Device.Gpio;
using System.Diagnostics;
using DoorLockClient.Config;
using DoorLockClient.Models;

using Org.BouncyCastle.Asn1;

namespace DoorLockClient.Services;

public class DoorLockPhysicalService
{
    private const int DoorLockPin = 14;
    
    private readonly  GpioController _gpioController;

    public DoorLockPhysicalService()
    {
        _gpioController = new GpioController();
        _gpioController.OpenPin(DoorLockPin, PinMode.Output);
    }

    public void SetDoorLockState(DoorLockState state)
    {
        _gpioController.Write(DoorLockPin, state == DoorLockState.Open ? PinValue.Low : PinValue.High);
    }
}