import { ChakraProvider } from '@chakra-ui/react'
import { type AppProps } from 'next/app'
import Head from 'next/head'
import { ReactElement } from 'react'
import '../styles/_global.css'

const App = ({ Component, pageProps }: AppProps): ReactElement => (
  <>
    <Head>
      <title>Steven Signal</title>
      <link rel="shortcut icon" href="./assets/images/logo.ico" />
      <link rel="alternate" href="https://stevensignal.ai/en" hrefLang="x-default" />
      <link rel="alternate" href="https://stevensignal.ai/en" hrefLang="en" />
      <link rel="alternate" href="https://stevensignal.ai/ru" hrefLang="ru" />
    </Head>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  </>
)

export default App
