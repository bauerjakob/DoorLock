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
    }

    event DoorStateChanged (bool newState);
    
    function toggleDoor() public onlyOwner()
    {
        DoorState = !DoorState;
        emit DoorStateChanged(DoorState);
    }
}