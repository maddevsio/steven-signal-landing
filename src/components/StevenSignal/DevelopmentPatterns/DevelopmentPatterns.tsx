import { Box, Flex, Text } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import Marquee from 'react-fast-marquee'
import { firstList, secondList } from './patternsData'

const DevelopmentPatterns = () => {
  const { t } = useTranslation(['common'])

  return (
    <Flex
      direction="column"
      gap="40px"
      borderRadius="16px"
      bg="#3475EF"
      py="40px"
      position="relative"
    >
      <Flex gap="16px" direction="column" alignItems="center">
        <Text
          fontWeight={900}
          fontSize={{ base: '24px', md: '40px' }}
          lineHeight={{ base: '29px', md: '49px' }}
          color="#fff"
          textAlign="center"
        >
          {t('DEVELOPMENT_PATTERNS_TITLE')}
        </Text>
        <Text
          fontWeight={400}
          fontSize="18px"
          lineHeight="22px"
          color="#fff"
          maxW="697px"
          textAlign="center"
          px="10px"
        >
          {t('DEVELOPMENT_PATTERNS_DESCRIPTION')}
        </Text>
      </Flex>
      <Box mb="-24px">
        <Marquee speed={15}>
          {firstList.map(({ text, bg }, index) => (
            <Text
              key={index}
              bg={bg}
              borderRadius="6px"
              mx="4px"
              py="4px"
              px="9px"
            >
              {text}
            </Text>
          ))}
        </Marquee>
      </Box>
      <Box>
        <Marquee direction="right" speed={15}>
          {secondList.map(({ text, bg }, index) => (
            <Text
              bg={bg}
              key={index}
              borderRadius="6px"
              mx="4px"
              py="4px"
              px="9px"
            >
              {text}
            </Text>
          ))}
        </Marquee>
      </Box>
    </Flex>
  )
}

export default DevelopmentPatterns
