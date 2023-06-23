import HeaderLogo from '@/components/StevenSignal/HeaderSection/Logo'
import { ArrowDownIcon } from '@chakra-ui/icons'
import { Box, Center, Flex, Link, Select, Text } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import i18nextConfig from '../../../../next-i18next.config'

const Header = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale

  const handleChangeLocale = (
    selectedLocale: string | string[] | undefined
  ) => {
    const { pathname, query } = router
    query.locale = selectedLocale
    router.push({ pathname, query })
  }

  return (
    <header>
      <Flex justifyContent="flex-end" py="26px">
        <Select
          value={currentLocale}
          onChange={(e) => handleChangeLocale(e.target.value)}
          maxW="76px"
          border="none"
          _active={{ border: 'none' }}
          _hover={{ border: 'none' }}
        >
          {i18nextConfig.i18n.locales.map((locale) => (
            <option value={locale} key={locale}>
              {locale.toUpperCase()}
            </option>
          ))}
        </Select>
      </Flex>
      <Box mt="24px">
        <HeaderLogo />
      </Box>
      <Box maxW="1025px" m="auto" mt={{ base: '49px', md: '76px' }}>
        <Text
          textAlign="center"
          fontWeight={900}
          fontSize={{ base: '32px', md: '46px', lg: '64px' }}
          lineHeight={{ base: '39px', md: '48px', lg: '78px' }}
        >
          {t('MAIN_TITLE')}{' '}
          <Text as="span" color="#3474ef">
            Telegram
          </Text>
        </Text>
      </Box>
      <Center mt={{ base: '103px', md: '121px' }}>
        <Link
          textColor="#3475EF"
          fontWeight={500}
          fontSize="16px"
          lineHeight="19px"
          href="#get-bot-free"
        >
          <ArrowDownIcon boxSize={5} mr="16px" />
          {t('TRY_FOR_FREE_LINK')}
        </Link>
      </Center>
    </header>
  )
}

export default Header
