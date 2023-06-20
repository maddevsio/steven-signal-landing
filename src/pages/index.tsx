import AboutBotSection from '@/components/StevenSignal/AboutBotSection'
import BinanceSection from '@/components/StevenSignal/BinanceSection'
import DevelopmentPatterns from '@/components/StevenSignal/DevelopmentPatterns'
import Footer from '@/components/StevenSignal/Footer'
import Header from '@/components/StevenSignal/HeaderSection'
import PatternTypes from '@/components/StevenSignal/PatternTypes'
import RecognizablePatterns from '@/components/StevenSignal/RecognizablePatterns'
import TextSection from '@/components/StevenSignal/TextSection'
import { Container, Flex } from '@chakra-ui/react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { FC } from 'react'

const StevenSignal: FC = () => (
  <>
    <Container maxW="1164px">
      <Flex direction="column" gap={{ base: '16px', md: '32px' }}>
        <Header />
        <AboutBotSection />
        <TextSection />
        <BinanceSection />
        <RecognizablePatterns />
        <PatternTypes />
        <DevelopmentPatterns />
      </Flex>
    </Container>
    <Footer />
  </>
)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getStaticProps(context: any) {
  // extract the locale identifier from the URL
  const { locale } = context

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  }
}

export default StevenSignal
