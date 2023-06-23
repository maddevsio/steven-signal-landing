import Logo from '@/components/shared/Logo'
import { Flex, Text } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'

const HeaderLogo = () => {
  const { t } = useTranslation(['common'])

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
      >
        {t('LOGO_TEXT')}
      </Text>
    </Flex>
  )
}

export default HeaderLogo
