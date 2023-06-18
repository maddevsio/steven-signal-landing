import { Box, Flex, Text } from '@chakra-ui/react'
import Marquee from 'react-fast-marquee'

const DevelopmentPatterns = () => {
  const firstList = [
    { text: 'BREAKWAY', bg: '#2974B8' },
    { text: 'BELT-HOLD', bg: '#4F8BC9' },
    { text: 'UNIQUE 3 RIVER', bg: '#245FAB' },
    { text: 'RICKSHAW MAN', bg: '#0A4A94' },
    { text: 'ADVANCE BLOCK', bg: '#395DA7' },
    { text: 'STALLED PATTERN', bg: '#203466' },
    { text: 'CONCEALING BABY SWALLOW', bg: '#395DA7' },
    { text: 'STALLED PATTERN', bg: '#203466' },
    { text: 'STALLED PATTERN', bg: '#203466' },
    { text: 'STALLED PATTERN', bg: '#203466' },
  ]
  const secondList = [
    { text: 'BREAKWAY', bg: '#2974B8' },
    { text: 'BELT-HOLD', bg: '#4F8BC9' },
    { text: 'UNIQUE 3 RIVER', bg: '#245FAB' },
    { text: 'RICKSHAW MAN', bg: '#0A4A94' },
    { text: 'ADVANCE BLOCK', bg: '#395DA7' },
    { text: 'STALLED PATTERN', bg: '#203466' },
    { text: 'CONCEALING BABY SWALLOW', bg: '#395DA7' },
    { text: 'STALLED PATTERN', bg: '#203466' },
    { text: 'STALLED PATTERN', bg: '#203466' },
    { text: 'STALLED PATTERN', bg: '#203466' },
  ]
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
          fontSize="40px"
          lineHeight="49px"
          color="#fff"
          textAlign="center"
        >
          Паттерны в разработке
        </Text>
        <Text
          fontWeight={400}
          fontSize="18px"
          lineHeight="22px"
          color="#fff"
          maxW="697px"
          textAlign="center"
        >
          На данный момент мы работаем над распознаванием ряда паттернов ботом,
           для более точного прогнозирования графика.
        </Text>
      </Flex>
      <Box mb="-24px">
        <Marquee>
          {firstList.map(({ text, bg }, index) => (
            <Text bg={bg} borderRadius="6px" mx="4px" py="4px" px="9px">
              {text}
            </Text>
          ))}
        </Marquee>
      </Box>
      <Box>
        <Marquee direction="right">
          {secondList.map(({ text, bg }, index) => (
            <Text bg={bg} borderRadius="6px" mx="4px" py="4px" px="9px">
              {text}
            </Text>
          ))}
        </Marquee>
      </Box>
    </Flex>
  )
}

export default DevelopmentPatterns
