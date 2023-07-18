import { Box, Container, Flex } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import Seo from '../../Seo'
import AboutBotSection from '../../components/StevenSignal/AboutBotSection'
import BinanceSection from '../../components/StevenSignal/BinanceSection'
import DevelopmentPatterns from '../../components/StevenSignal/DevelopmentPatterns'
import Footer from '../../components/StevenSignal/Footer'
import Header from '../../components/StevenSignal/HeaderSection'
import PatternTypes from '../../components/StevenSignal/PatternTypes'
import RecognizablePatterns from '../../components/StevenSignal/RecognizablePatterns'
import TextSection from '../../components/StevenSignal/TextSection'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'

// const metaData = {
//   en: {
//     title: 'Steven Signal - AI bot for crypto traders and investors',
//     description:
//       'Steven Signal is an AI-based bot that detects trading patterns and alerts you via Telegram.',
//   },
//   ru: {
//     title: 'Стивен Сигнал - AI бот для крипто-трейдеров и инвесторов',
//     description:
//       'Steven Signal - бот на основе ИИ, который распознает торговые паттерны и высылает вам сигналы в Telegram.',
//   },
// }

const StevenSignal = () => {
  const { t } = useTranslation()

  return (
    <>
      <Seo />
      <Container maxW="1164px">
        <Flex direction="column" gap={{ base: '16px', md: '32px' }}>
          <Header title={t('MAIN_TITLE')} linkDescription={t('TRY_FOR_FREE_LINK')} />
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

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }
