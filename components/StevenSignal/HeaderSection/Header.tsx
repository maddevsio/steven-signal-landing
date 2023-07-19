import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Box,
  Center,
  Flex,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import i18nextConfig from '../../../next-i18next.config'
import LanguageSwitchLink from '../../shared/LanguageSwitcherLink'
import HeaderLogo from './Logo'

const Header = ({ title, linkDescription }: { title: string, linkDescription: string }) => {
  const router = useRouter()
  const currentLocale =
    router.query.locale || i18nextConfig.i18n.defaultLocale

  return (
    <header>
      <Flex
        justifyContent="flex-end"
        paddingTop="26px"
        paddingBottom="26px"
        fontSize="12px"
      >
        <Menu autoSelect={false}>
          <MenuButton>
            <Flex alignItems="center" gap="3px">
              {Array.isArray(currentLocale) ? currentLocale[0].toUpperCase() : currentLocale.toUpperCase()}
              <ChevronDownIcon />
            </Flex>
          </MenuButton>
          <MenuList borderRadius="none">
            {i18nextConfig.i18n.locales.map((locale, index) => {
              if (locale === currentLocale) return null
              return (
                <MenuItem key={index}>
                  <LanguageSwitchLink locale={locale} key={locale} />
                </MenuItem>
              )
            })}
          </MenuList>
        </Menu>
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
          {title}{' '}
          <Text as="span" color="#3474ef">
            Telegram!
          </Text>
        </Text>
      </Box>
      <Center mt={{ base: '103px', md: '121px' }}>
        <Link
          color="#fff"
          fontWeight={700}
          fontSize={{ base: '16px', md: "18px" }}
          py="16px"
          px={{ base: '16px', md: "24px" }}
          borderRadius="12px"
          bg="#000"
          _hover={{
            bg: '#3475EF',
            transition: '0.3s all'
          }}
          transition='0.3s all'
          href="https://t.me/steven_signal_bot"
          isExternal
          display="flex"
          alignItems='center'
          gap="16px"
        >
          <Image maxW="32px" maxH="32px" src="/assets/images/svg/telegram.svg" alt="landing image" />
          <Text>{linkDescription}</Text>
        </Link>
      </Center>
    </header >
  )
}

export default Header

// delete the scrollToAnchor helper
