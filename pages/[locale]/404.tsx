import { Box, Flex, Text } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import HeaderLogo from '../../components/StevenSignal/HeaderSection/Logo'
import LinkComponent from '../../components/shared/CustomLink'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'

const Homepage = () => {
  const { t } = useTranslation()

  return (
    <main style={{ position: 'relative', height: '100vh' }}>
      <Box position="absolute" top='50%' left="50%" transform="translate(-50%, -50%)">
        <Text
          textAlign="center"
          fontWeight={900}
          fontSize={{ base: '32px', md: '46px', lg: '64px' }}
          lineHeight={{ base: '39px', md: '48px', lg: '78px' }}
          mb="20px"
        >
          {t('404:title')}
        </Text>
        <HeaderLogo />
        <Flex mt="16px" justifyContent='center' color="#3474ef">
          <LinkComponent href="/"><>{t('404:link')}</></LinkComponent>
        </Flex>
      </Box>
    </main >
  )
}

export default Homepage

const getStaticProps = makeStaticProps(['404', 'common'])
export { getStaticPaths, getStaticProps }
