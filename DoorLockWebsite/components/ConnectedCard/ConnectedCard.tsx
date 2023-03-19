import { Web3Provider } from "@ethersproject/providers";
import { Card, Title, createStyles, rem, Text, Divider, Group, Badge, Button, Center } from "@mantine/core";
import { useWeb3React } from "@web3-react/core";

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

export default function ConnectedCard() {
  const { account } = useWeb3React<Web3Provider>()

    const { classes } = useStyles();
    return (
    <>
        <Card withBorder radius="md" className={classes.card}>
            <Group position="apart">
                <Text className={classes.title}>Connected to</Text>
                <Text>{account}</Text>
            </Group>
        </Card>
    </>);
}