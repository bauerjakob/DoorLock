import DoorLockContractService from "@/services/DoorLockContractService";
import { Card, Title, createStyles, rem, Text, Divider, Group, Badge, Button } from "@mantine/core";

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
    const { classes, theme } = useStyles();

    async function OnToggleClicked()
    {
        const doorLockService = new DoorLockContractService() 
        try
        {
            await doorLockService.ToggleDoorState();

        }   
        catch
        {

        }
    }

    return (
    <>
        <Card withBorder radius="md" className={classes.card}>
            <Group position="apart">
                <Title className={classes.title}>Toogle Lock</Title>
                <Badge size="xl" variant="outline" color="green">Open</Badge>
            </Group>
            <Divider />
            <Group>
                <Button mt={20} onClick={async () => await OnToggleClicked()}>Togle Lock</Button>
            </Group>
        </Card>
    </>);
}