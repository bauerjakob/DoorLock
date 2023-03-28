import DoorLockContractService from "@/services/DoorLockContractService";
import { Web3Provider } from "@ethersproject/providers";
import { Card, Title, createStyles, rem, Text, Divider, Group, Badge, Button, LoadingOverlay } from "@mantine/core";
import { useWeb3React } from "@web3-react/core";
import appsettings from '@/appsettings.json'
import abi from '@/abis/DoorLockAbi.json'
import { ethers } from "ethers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DoorStates, setDoorState } from "@/redux/slices/doorLockSlice";
import { notifications } from '@mantine/notifications';

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
    const { library } = useWeb3React<Web3Provider>()
    const { doorState } = useSelector((state: any) => state.doorLock)
    const dispatch = useDispatch();

    const getContract = () => {
        const signer: any = library?.getSigner();
        const contractAddress = appsettings.contractAddress;
        return new ethers.Contract(contractAddress, abi, signer);
    }

    async function ShowNotPermittedDialog()
    {
        notifications.show({
            title: 'An error occured',
            message: 'You are not permitted to change the door state.',
            styles: (theme) => ({
              root: {
                backgroundColor: theme.colors.red[6],
                borderColor: theme.colors.red[6],

                '&::before': { backgroundColor: theme.white },
              },

              title: { color: theme.white },
              description: { color: theme.white },
              closeButton: {
                color: theme.white,
                '&:hover': { backgroundColor: theme.colors.red[7] },
              },
            }),
          })
    }

    async function OnOpenDoorClicked() {
        if (library == undefined) {
            console.log("web 3 provider is undefined");
            return;
        }

        try {
            const contract = getContract();
            await contract.openDoor();
            dispatch(setDoorState(DoorStates.Pending));

        }
        catch (ex)
        {
            console.log(ex);
            ShowNotPermittedDialog();
        }
    }

    async function OnCloseDoorClicked() {
        if (library == undefined) {
            console.log("web 3 provider is undefined");
            return;
        }

        try {
            const contract = getContract();
            await contract.closeDoor();
            dispatch(setDoorState(DoorStates.Pending));

        }
        catch (ex) {
            console.log(ex);
            ShowNotPermittedDialog();
        }
    }

    let badgeColor;
    let badgeText;
    switch (doorState) {
        case DoorStates.Open:
            badgeColor = "green"
            badgeText = "Open"
            break;

        case DoorStates.Closed:
            badgeColor = "red"
            badgeText = "Locked"
            break;

        case DoorStates.Pending:
            badgeColor = "gray"
            badgeText = "Pending"
            break;

    }

    return (
        <>
            <Card withBorder radius="md" className={classes.card}>
                <Group position="apart">
                    <Text className={classes.title}>Door lock</Text>
                    <Badge size="lg" mb={2} variant="outline" color={badgeColor}>{badgeText}</Badge>
                </Group>
                <Divider mt={5} />
                <Group>
                    {
                        doorState == DoorStates.Open ?
                            <Button mt={20} onClick={async () => await OnCloseDoorClicked()}>Lock door</Button> : 
                            <></>
                    }
                    {
                        doorState == DoorStates.Closed ?
                            <Button mt={20} onClick={async () => await OnOpenDoorClicked()}>Open door</Button> : 
                            <></>
                    }
                    {
                        doorState == DoorStates.Pending ?
                            (
                                <Group>
                                    <LoadingOverlay visible></LoadingOverlay>
                                    <Button mt={20} disabled>Pending</Button>
                                </Group>
                            ) : 
                            <></>
                    }
                </Group>
            </Card>
        </>);
}