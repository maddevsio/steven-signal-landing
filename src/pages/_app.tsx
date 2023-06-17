import { type AppProps } from 'next/app'
import { ReactElement } from 'react'
import { ChakraProvider } from '@chakra-ui/react'

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
