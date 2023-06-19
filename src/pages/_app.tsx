import { ChakraProvider } from '@chakra-ui/react'
import { type AppProps } from 'next/app'
import Head from 'next/head'
import { ReactElement } from 'react'

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <>
      <Head>
        <title>Steven Signal</title>
        <link rel="shortcut icon" href="./assets/images/logo.ico" />
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default App
