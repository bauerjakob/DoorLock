import { Web3Provider } from '@ethersproject/providers';
import { Header, Group, Button, Text, Center, Box, Badge } from '@mantine/core'; 
import { useWeb3React } from '@web3-react/core';
import Image from 'next/image';



export function HeaderMegaMenu() {

  const { active } = useWeb3React<Web3Provider>()
    return (
        <Box>
            <Header height={60} px="md">
                <Group position="apart" sx={{ height: '100%' }}>
                    <Group>
                        <Center>
                            <Image src={"/logos/metamask.svg"} alt={""} width={40} height={40}></Image>
                            <Text size={'lg'} weight={700} ml={10}>MetaMask</Text>
                        </Center>
                    </Group>
                    <Group>
                        {active ? <Badge size="xl" variant="dot">Connected</Badge> :
                            <Button>Connect</Button>
                        }
                    </Group>
                </Group>
            </Header>
        </Box>
    );
}