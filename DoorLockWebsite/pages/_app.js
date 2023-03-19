

import "../styles/globals.css";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { MantineProvider } from '@mantine/core';
import MetamaskProvider from "@/provider/MetamaskProvider";
import { Provider } from 'react-redux'

import store from '../redux/store'

function getLibrary(provider) {
  return new Web3Provider(provider)
}



function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <MetamaskProvider>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              colorScheme: 'light',
            }}
          >
            <Component {...pageProps} />
          </MantineProvider>
        </MetamaskProvider>
      </Web3ReactProvider>
    </Provider>

  )
}

export default MyApp;