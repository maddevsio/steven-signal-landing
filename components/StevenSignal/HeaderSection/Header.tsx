import { ArrowDownIcon, ChevronDownIcon } from '@chakra-ui/icons'
import {
  Box,
  Center,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'
import { LanguageSwitcher } from 'next-export-i18n'
import useTranslation from '../../../utils/useTranslation'
import HeaderLogo from './Logo'

const Header = () => {
  const [t, currentLang] = useTranslation()

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
              {currentLang.toUpperCase()}
              <ChevronDownIcon />
            </Flex>
          </MenuButton>
          <MenuList borderRadius="none">
            <MenuItem>
              <LanguageSwitcher lang="en">
                <Text w="100%">EN</Text>
              </LanguageSwitcher>
            </MenuItem>
            <MenuDivider />
            <MenuItem>
              <LanguageSwitcher lang="ru">
                <Text w="100%">RU</Text>
              </LanguageSwitcher>
            </MenuItem>
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
