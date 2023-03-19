import DoorLockContractService from "@/services/DoorLockContractService";
import { Web3Provider } from "@ethersproject/providers";
import { Card, Title, createStyles, rem, Text, Divider, Group, Badge, Button } from "@mantine/core";
import { useWeb3React } from "@web3-react/core";
import appsettings from '@/appsettings.json'
import abi from '@/abis/DoorLockAbi.json'
import { ethers } from "ethers";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useStyles = createStyles((theme) => ({
    card: {
      width: '100%',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 700,
    },
  }));

export default function ToggleLockCard() {
    const { classes } = useStyles();
    const { active, library } = useWeb3React<Web3Provider>()
    const { doorState } = useSelector((state: any) => state.doorLock)


    const doorLockService = new DoorLockContractService(library!)
    

    async function OnToggleClicked()
    {
        if (library == undefined) {
            console.log("web 3 provider is undefined");
            return;
        }

        try
        {
            await doorLockService.ToggleDoorState();

        }   
        catch (ex)
        {
            console.log(ex);
        }
    }

    return (
    <>
        <Card withBorder radius="md" className={classes.card}>
            <Group position="apart">
                <Title className={classes.title}>Toogle Lock</Title>
                <Badge size="xl" variant="outline" color={doorState ? "green" : "blue"}>{doorState ? "Open" : "Closed"}</Badge>
            </Group>
            <Divider />
            <Group>
                <Button mt={20} onClick={async () => await OnToggleClicked()}>Togle Lock</Button>
            </Group>
        </Card>
    </>);
}