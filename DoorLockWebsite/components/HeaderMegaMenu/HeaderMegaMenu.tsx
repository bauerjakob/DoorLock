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
                            <Image src={"/logos/website.svg"} alt={""} width={40} height={40}></Image>
                            <Text size={'lg'} weight={700} ml={10}>HomePortal</Text>
                        </Center>
                    </Group>
                    <Group>
                        {active ? <Badge size="lg" variant="dot" color="green">Connected</Badge> :
                            <></>
                        }
                    </Group>
                </Group>
            </Header>
        </Box>
    );
}