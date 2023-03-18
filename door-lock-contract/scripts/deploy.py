from brownie import accounts, DoorLock
import asyncio

def deployDoorLock(account):
    token = DoorLock.deploy({"from": account})
    print("Token deployed to: " + token.address)

def main():
    account = accounts.load('localAccount')
    deployDoorLock(account)

