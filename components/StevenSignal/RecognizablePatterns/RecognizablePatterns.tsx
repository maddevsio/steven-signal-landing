import { Flex, Image, Text } from '@chakra-ui/react'
import { useTranslation } from 'next-export-i18n'
import CustomIcon from '../../shared/CustomIcon'

const RecognizablePatterns = () => {
  const { t } = useTranslation()

  return (
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
          {t('RECOGNIZABLE_PATTERNS_TITLE')}
        </Text>
        <Flex>
          <ul style={{ listStyle: 'none', color: '#fff' }}>
            {Array.from(
              t('RECOGNIZABLE_PATTERNS_LIST'),
              (item: string, index: number) => (
                <li style={{ display: 'flex', gap: '16px' }} key={index}>
                  <Image src="/assets/images/arrow-right.svg" alt="arrow" />
                  {item}
                </li>
              )
            )}
          </ul>
        </Flex>
      </Flex>
      <CustomIcon
        imageSrc="./assets/images/svg/recognizable-patterns.svg"
        alt="Patterns"
      />
    </Flex>
  )
}

export default RecognizablePatterns
