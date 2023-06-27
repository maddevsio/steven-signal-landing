import { Box, Container, Flex } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import AboutBotSection from '../components/StevenSignal/AboutBotSection'
import BinanceSection from '../components/StevenSignal/BinanceSection'
import DevelopmentPatterns from '../components/StevenSignal/DevelopmentPatterns'
import Footer from '../components/StevenSignal/Footer'
import Header from '../components/StevenSignal/HeaderSection'
import PatternTypes from '../components/StevenSignal/PatternTypes'
import RecognizablePatterns from '../components/StevenSignal/RecognizablePatterns'
import TextSection from '../components/StevenSignal/TextSection'

const StevenSignal = () => {
  const router = useRouter()
  const [selectedLanguage, setSelectedLanguage] = useState('')

  const getMeta = (currentLanguage: string) => {
    switch (currentLanguage) {
      case 'en':
      case '':
        return (
          <>
            <title>
              Steven Signal - AI bot for crypto traders and investors
            </title>
            <meta
              name="description"
              content="Steven Signal is an AI-based bot that detects trading patterns and alerts you via Telegram."
            />
          </>
        )
      case 'ru':
        return (
          <>
            <title>
              Стивен Сигнал - AI бот для крипто-трейдеров и инвесторов
            </title>
            <meta
              name="description"
              content="Steven Signal - бот на основе ИИ, который распознает торговые паттерны и высылает вам сигналы в Telegram."
            />
          </>
        )
      default:
        return null
    }
  }

  useEffect(() => {
    setSelectedLanguage(router.query.lang as string)
  }, [router.query.lang])

  return (
    <>
      <Head>{getMeta(selectedLanguage)}</Head>
      <Container maxW="1164px">
        <Flex direction="column" gap={{ base: '16px', md: '32px' }}>
          <Header />
          <Box mt={{ base: '103px', md: '121px' }}>
            <AboutBotSection />
          </Box>
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
}

export default StevenSignal
