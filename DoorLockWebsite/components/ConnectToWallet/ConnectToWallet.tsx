import { setHasMetamask } from "@/redux/slices/metaMaskSlice";
import { injected } from "@/utils/connectors";
import { Web3Provider } from "@ethersproject/providers";
import { Card, SimpleGrid, Text, UnstyledButton, createStyles, rem, Divider } from "@mantine/core";
import { useWeb3React } from "@web3-react/core";

import Image from 'next/image';
import { useDispatch } from "react-redux";

const mockdata = [
  { title: 'MetaMask', icon: "/logos/metamask.svg", color: 'violet' },
];

const useStyles = createStyles((theme) => ({
  card: {
    width: '100%',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    maxWidth: rem(300),
    borderRadius: theme.radius.md,
    height: rem(90),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: theme.shadows.md,
      transform: 'scale(1.02)',
    },
  },
}));



export default function ConnectToWallet() {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const { activate } = useWeb3React<Web3Provider>()



  async function connectToMetaMask() {

    // const dispatch = useDispatch();

    if (typeof (window as any).ethereum !== "undefined") {
        try {
            await activate(injected);
            dispatch(setHasMetamask(true));
        } catch (e) {
            console.log(e);
        }
    }
}
  
  const items = mockdata.map((item) => (
    <UnstyledButton key={item.title} className={classes.item}>
      <Image src={item.icon} alt={""} width={70} height={50}></Image>
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <>
    <Card withBorder radius="md" className={classes.card} onClick={() => connectToMetaMask()}>
      <Text className={classes.title}>Connect to Wallet</Text>
      <Divider />
      <SimpleGrid cols={1} mt="md">
        {items}
      </SimpleGrid>
    </Card>
    </>
  )
}
