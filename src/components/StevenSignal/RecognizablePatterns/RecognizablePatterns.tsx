import CustomIcon from '@/components/shared/CustomIcon'
import { Flex, Text } from '@chakra-ui/react'

const RecognizablePatterns = () => (
  <Flex
    bg="#3475EF"
    borderRadius="8px"
    py={{ base: '32px', md: '25px' }}
    px={{ base: '20px', md: '48px' }}
    wrap="wrap"
    alignItems="flex-start"
    gap={{ base: '32px', sm: '50px' }}
  >
    <Flex
      gap={{ base: '32px', sm: '50px' }}
      alignItems="flex-start"
      wrap="wrap"
    >
      <Text
        textAlign={{ base: 'center', md: 'left' }}
        color="#fff"
        fontWeight={700}
        fontSize={{ base: '24px', md: '20px' }}
        lineHeight={{ base: '29px', md: '24px' }}
      >
        Распознаваемые паттерны
      </Text>
      <CustomIcon imageSrc="./assets/images/svg/patterns-list.svg" alt="List" />
    </Flex>
    <CustomIcon
      imageSrc="./assets/images/svg/recognizable-patterns.svg"
      alt="Patterns"
    />
  </Flex>
)

export default RecognizablePatterns
