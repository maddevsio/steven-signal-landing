import { Text, Image, Flex } from '@chakra-ui/react'
import { FC } from 'react'
import Logo from '@/components/shared/Logo';

const HeaderLogo: FC = () => {
  return (
    <Flex direction="column" alignItems="center" gap="16px">
      <Logo w="111px" h="111px" />
      <Text fontWeight={700} fontSize="20px" lineHeight="24px">
        Стивен Сигнал
      </Text>
    </Flex>
  )
}

export default HeaderLogo
