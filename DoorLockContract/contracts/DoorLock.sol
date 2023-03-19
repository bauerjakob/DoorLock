// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import './Ownable.sol';

/**
 * @title Simple door lock
 */
contract DoorLock is Ownable
{
    bool public DoorOpen;
    
    constructor()
    {
        DoorOpen = false;
    }
    
    function toggleDoor() public onlyOwner()
    {
        DoorOpen = !DoorOpen;
    }

    function openDoor() public onlyOwner()
    {
        DoorOpen = true;
    }

    function lockDoor() public onlyOwner()
    {
        DoorOpen = false;
    }
}