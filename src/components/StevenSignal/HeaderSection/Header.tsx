import HeaderLogo from '@/components/StevenSignal/HeaderSection/Logo'
import SelectLanguage from '@/components/StevenSignal/HeaderSection/SelectLanguage'
import { ArrowDownIcon } from '@chakra-ui/icons'
import { Box, Center, Flex, Link, Text } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'

const Header = () => {
  const { t } = useTranslation()

  return (
    <Box as="header">
      <Flex justifyContent="flex-end" py="26px">
        <SelectLanguage />
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
          {t('MAIN_TITLE')}
        </Text>
      </Box>
      <Center mt={{ base: '91px', md: '141px' }}>
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
    </Box>
  )
}

export default Header
