import { Box, Text, useMediaQuery } from '@chakra-ui/react'
import { DesktopCards, MobileCards } from './Cards'
import { сards } from './cardsData'

const PatternTypes = () => {
  const [isLessThan768] = useMediaQuery('(max-width: 768px)')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const groups = сards.reduce((acc: any[], curr, index) => {
    const groupIndex = Math.floor(index / 3)
    if (!acc[groupIndex]) {
      acc[groupIndex] = []
    }
    acc[groupIndex].push(curr)
    return acc
  }, [])

  return (
    <Box
      bg="#F5F5F5"
      py={{ base: '32px', md: '40px' }}
      px={{ base: '16px', md: '48px' }}
      borderRadius="16px"
    >
      <Text
        fontWeight={900}
        fontSize={{ base: '24px', md: '40px' }}
        lineHeight={{ base: '29px', md: '49px' }}
        textAlign="center"
        mb={{ base: '32px', md: '32px' }}
      >
        Виды распознаваемых паттернов
      </Text>
      {isLessThan768 ? (
        <MobileCards cardList={сards} />
      ) : (
        groups.map((group, index) => (
          <Box key={index}>
            <DesktopCards cardList={group} />
          </Box>
        ))
      )}
    </Box>
  )
}

export default PatternTypes
