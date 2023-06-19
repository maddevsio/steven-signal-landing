import { Box, Text } from '@chakra-ui/react'
import Cards from './Cards'

const PatternTypes = () => {
  const firstCards = [
    {
      title: 'DOUBLE BOTTOM',
      image: './assets/images/pattern-types/double-bottom.svg',
    },
    {
      title: 'DOUBLE TOP',
      image: './assets/images/pattern-types/double-top.svg',
    },
    { title: 'HAMMER', image: './assets/images/pattern-types/hammer.svg' },
  ]
  return (
    <Box
      bg="#F5F5F5"
      py={{ base: '32px', md: '40px' }}
      px={{ base: '24px', md: '48px' }}
      borderRadius="16px"
    >
      <Text
        fontWeight={900}
        fontSize={{ base: '24px', md: '40px' }}
        lineHeight={{ base: '29px', md: '49px' }}
        textAlign="center"
        mb="64px"
      >
        Виды распознаваемых паттернов
      </Text>
      <Cards cardList={firstCards} />
    </Box>
  )
}

export default PatternTypes
