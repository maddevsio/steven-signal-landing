import Logo from '@/components/shared/Logo'
import { Flex, Text } from '@chakra-ui/react'

const HeaderLogo = () => (
  <Flex direction="column" alignItems="center" gap="16px">
    <Logo w={{ base: '80px', md: '111px' }} h={{ base: '80px', md: '111px' }} />
    <Text
      fontWeight={700}
      fontSize={{ base: '16px', md: '20px' }}
      lineHeight={{ base: '19px', md: '24px' }}
    >
      Стивен Сигнал
    </Text>
  </Flex>
)

export default HeaderLogo
