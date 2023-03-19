// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import './Ownable.sol';

/**
 * @title Simple door lock
 */
contract DoorLock is Ownable
{
    // open = true; closed = false
    bool public DoorState;
    
    constructor()
    {
        DoorState = false;
        emit DoorStateChanged(DoorState);
    }

    event DoorStateChanged (bool newState);
    
    function openDoor() public onlyOwner()
    {
        DoorState = true;
        emit DoorStateChanged(DoorState);
    }

    function closeDoor() public onlyOwner()
    {
        DoorState = false;
        emit DoorStateChanged(DoorState);
    }
}