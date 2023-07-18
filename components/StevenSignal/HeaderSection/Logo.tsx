import { Flex, Text } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import Logo from '../../shared/Logo'

const HeaderLogo = () => {
  const { t } = useTranslation()

  return (
    <Flex direction="column" alignItems="center" gap="16px">
      <Logo
        w={{ base: '80px', md: '111px' }}
        h={{ base: '80px', md: '111px' }}
      />
      <Text
        fontWeight={700}
        fontSize={{ base: '16px', md: '20px' }}
        lineHeight={{ base: '19px', md: '24px' }}
        suppressHydrationWarning
      >
        {t('LOGO_TEXT')}
      </Text>
    </Flex>
  )
}

export default HeaderLogo
