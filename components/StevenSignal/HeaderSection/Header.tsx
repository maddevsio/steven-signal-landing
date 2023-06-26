import { ArrowDownIcon } from '@chakra-ui/icons'
import { Box, Center, Flex, Link, Text } from '@chakra-ui/react'
import { LanguageSwitcher, useTranslation } from 'next-export-i18n'
import HeaderLogo from './Logo'

const Header = () => {
  const { t } = useTranslation()
  return (
    <header>
      <Flex>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            gap: '8px',
            marginLeft: 'auto',
            justifyContent: 'flex-end',
            paddingTop: '26px',
            paddingBottom: '26px',
            fontSize: '12px',
          }}
        >
          <li>
            <LanguageSwitcher lang="en">EN </LanguageSwitcher>
          </li>
          <li>
            <LanguageSwitcher lang="ru">RU </LanguageSwitcher>
          </li>
        </ul>
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
            Telegram!
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
