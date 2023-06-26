import { Box, Flex, Image, Text, useMediaQuery } from '@chakra-ui/react'
import { useTranslation } from 'next-export-i18n'
import { DesktopCards, MobileCards } from './Cards'
import { patternCards, сards } from './cardsData'

const PatternTypes = () => {
  const { t } = useTranslation()
  const [isLessThan768] = useMediaQuery('(max-width: 768px)')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const groups = сards.reduce((acc: any[], curr, index) => {
    const groupIndex = Math.floor(index / 3)
    if (!acc[groupIndex]) acc[groupIndex] = []
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
        {t('PATTERN_TYPES_TITLE')}
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
      <Text
        fontWeight={400}
        fontSize="18px"
        lineHeight="22px"
        textAlign={{ base: 'left', sm: 'center' }}
        my="32px"
      >
        {t('ADDITIONAL_PATTERNS')}:
      </Text>
      {isLessThan768 ? (
        <MobileCards cardList={patternCards} />
      ) : (
        <Flex gap="16px">
          {patternCards.map((pattern, index) => (
            <Flex direction="column" gap="8px" key={index}>
              <Image src={pattern.image} alt={pattern.title} />
              <Text
                py="15px"
                fontWeight={700}
                fontSize="20px"
                lineHeight="24px"
                textAlign="center"
                color="#fff"
                bg="#203466"
              >
                {pattern.title}
              </Text>
            </Flex>
          ))}
        </Flex>
      )}
    </Box>
  )
}

export default PatternTypes
