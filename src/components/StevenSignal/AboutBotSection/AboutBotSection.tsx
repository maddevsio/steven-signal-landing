import CustomIcon from '@/components/shared/CustomIcon'
import IconText from '@/components/shared/IconText'
import { Box, Flex, Text } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import Slider from './Slider'

const AboutBotSection = () => {
  const { t } = useTranslation()

  return (
    <Box
      as="section"
      bg="#3475EF"
      py="40px"
      px="16px"
      w="100%"
      borderRadius="16px"
      m="auto"
      textAlign="center"
    >
      <Text
        fontWeight={900}
        fontSize={{ base: '24px', md: '40px' }}
        lineHeight={{ base: '29px', md: '49px' }}
        color="#fff"
      >
        {t('ABOUT_BOT_TITLE')}
      </Text>
      <Box maxW="697px" m="auto" mt="16px" mb="56px">
        <Text
          fontWeight={400}
          fontSize={{ base: '16px', md: '18px' }}
          lineHeight={{ base: '19px', md: '22px' }}
          color="#fff"
        >
          {t('ABOUT_BOT_DESCRIPTION')}
        </Text>
      </Box>
      <Flex
        gap={{ base: '24px', lg: '40px' }}
        justifyContent="center"
        direction={{ base: 'column', lg: 'row' }}
        alignItems="center"
        mb="56px"
      >
        <IconText
          title={t('FIRST_STEP')}
          imagePath="./assets/images/svg/pattern.svg"
        />
        <CustomIcon
          imageSrc="./assets/images/svg/arrow.svg"
          alt="Arrow"
          width={{ base: '40px', lg: '80px' }}
          height={{ base: '40px', lg: '80px' }}
          transform={{ base: 'rotate(90deg)', lg: 'none' }}
        />
        <IconText
          title={t('SECOND_STEP')}
          imagePath="./assets/images/svg/signal.svg"
        />
      </Flex>
      <Slider />
    </Box>
  )
}

export default AboutBotSection
