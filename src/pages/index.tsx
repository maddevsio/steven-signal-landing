import AboutBotSection from '@/components/StevenSignal/AboutBotSection'
import BinanceSection from '@/components/StevenSignal/BinanceSection'
import DevelopmentPatterns from '@/components/StevenSignal/DevelopmentPatterns'
import Header from '@/components/StevenSignal/HeaderSection'
import RecognizablePatterns from '@/components/StevenSignal/RecognizablePatterns'
import TextSection from '@/components/StevenSignal/TextSection'
import { Container, Flex } from '@chakra-ui/react'
import { FC } from 'react'

const StevenSignal: FC = () => (
  <Container maxW="1164px">
    <Flex direction="column" gap={{ base: '16px', md: '32px' }}>
      <Header />
      <AboutBotSection />
      <TextSection />
      <BinanceSection />
      <RecognizablePatterns />
      {/* sections */}
      <DevelopmentPatterns />
    </Flex>
  </Container>
)

export default StevenSignal
