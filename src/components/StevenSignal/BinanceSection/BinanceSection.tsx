import CustomIcon from '@/components/shared/CustomIcon'
import { Box, Flex, Text } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'

const BinanceSection = () => {
  const { t } = useTranslation(['common'])
  return (
    <Box
      py={{ base: '32px', md: '40px' }}
      px={{ base: '16px', md: '48px' }}
      borderRadius="16px"
      bg="#F5F5F5"
    >
      <Text
        textAlign="center"
        fontWeight={900}
        mb="32px"
        fontSize={{ base: '24px', md: '40px' }}
        lineHeight={{ base: '29px', md: '49px' }}
      >
        {t('BINANCE_SECTION_TITLE')}
      </Text>
      <Flex
        alignItems={{ base: 'center', md: 'flex-start' }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Flex
          direction="column"
          gap="30px"
          w={{ base: '100%', md: '50%' }}
          pr={{ base: '0', md: '40px' }}
          pb={{ base: '32px', md: '0' }}
        >
          <CustomIcon
            imageSrc="assets/images/svg/binanceIcon.svg"
            maxW={{ base: '200px', md: '292px' }}
            alt="Binance"
            mx={{ base: 'auto', md: 'unset' }}
          />
          <Text
            fontWeight={400}
            fontSize="18px"
            lineHeight="22px"
            textAlign={{ base: 'center', md: 'left' }}
          >
            {t('CRYPTO_TRADERS_DESCRIPTION')}
          </Text>
        </Flex>
        <Flex
          direction="column"
          gap="24px"
          w={{ base: '100%', md: '50%' }}
          pl={{ base: '0', md: '40px' }}
          pt={{ base: '32px', md: '0' }}
          borderLeft={{ base: 'none', md: '7px solid #000' }}
          borderTop={{ base: '4px solid #000', md: 'none' }}
        >
          <Flex
            alignItems="center"
            gap="36px"
            justifyContent={{ base: 'center', md: 'flex-start' }}
          >
            <CustomIcon
              imageSrc="assets/images/svg/paxgIcon.svg"
              maxW="292px"
              alt="Binance"
            />
            <CustomIcon
              imageSrc="assets/images/svg/usdtIcon.svg"
              maxW="292px"
              alt="Binance"
            />
          </Flex>
          <Text
            fontWeight={400}
            fontSize="18px"
            lineHeight="22px"
            textAlign={{ base: 'center', md: 'left' }}
          >
            {t('TOKENIZED_ASSETS')}
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}

export default BinanceSection
