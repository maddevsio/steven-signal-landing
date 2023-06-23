import { Box, Container, Flex, Image, Link, Text } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { footerItems } from './footerData'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <Box as="footer" mt="32px" bg="#121212" pt={{ base: '32px', md: '64px' }}>
      <Container maxW="1163px">
        <Text
          id="get-bot-free"
          scrollBehavior="smooth"
          color="#fff"
          fontWeight={900}
          fontSize={{ base: '24px', md: '40px' }}
          lineHeight={{ base: '29px', md: '49px' }}
          textAlign="center"
          mb={{ base: '32px', md: '68px' }}
        >
          {t('FOOTER_TITLE')}
        </Text>
        <Flex
          gap="29px"
          alignItems="flex-start"
          direction={{ base: 'column', md: 'row' }}
          mb="83px"
        >
          {footerItems.map(({ title, description, arrow }, index) => (
            <Flex
              key={index}
              gap="29px"
              alignItems="center"
              direction={{ base: 'column', md: 'row' }}
            >
              <Flex direction="column" gap="8px">
                <Text
                  fontWeight={900}
                  fontSize="24px"
                  lineHeight="29px"
                  color="#fff"
                >
                  {index + 1}.
                </Text>
                <Text
                  fontWeight={400}
                  fontSize="24px"
                  lineHeight="29px"
                  color="#fff"
                >
                  {t(title)}
                </Text>
                <Text
                  color="#6F6A6A"
                  fontWeight={400}
                  fontSize="18px"
                  lineHeight="22px"
                >
                  {t(description)}
                </Text>
              </Flex>
              {arrow ? (
                <Image
                  w="25px"
                  h="25px"
                  src="./assets/images/svg/footer-arrow.svg"
                  alt="Footer arrow"
                  transform={{ base: 'rotate(90deg)', md: 'rotate(0)' }}
                />
              ) : null}
            </Flex>
          ))}
        </Flex>
        <Flex
          justifyContent="center"
          direction="column"
          alignItems="center"
          gap="31px"
          mb="56px"
        >
          <Link
            href="https://t.me/steven_signal_bot"
            isExternal
            p="16px"
            bg="#3475EF"
            color="#fff"
            maxW="350px"
            w="100%"
            textAlign="center"
            fontWeight={700}
            fontSize={{ base: '16px', md: '18px' }}
            lineHeight={{ base: '19px', md: '22px' }}
            display="flex"
            alignItems="center"
            gap="10px"
            justifyContent="center"
          >
            <Image
              src="./assets/images/svg/telegram.svg"
              alt="Telegram Icon"
              display="inline"
              w="26px"
              h="22px"
            />
            {t('FOOTER_LINK_TEXT')}
          </Link>
          <Text
            color="#6F6A6A"
            fontWeight={400}
            fontSize="18px"
            lineHeight="22px"
            position="relative"
          >
            {t('FOOTER_SECONDARY_TEXT')}
            <Image
              src="./assets/images/svg/top-arrow.svg"
              alt="Top arrow"
              position="absolute"
              right="-20%"
              top="-65%"
            />
          </Text>
        </Flex>
      </Container>
      <Box p={{ base: '16px', md: '24px' }} bg="#000">
        <Text
          color="#282828"
          fontWeight={900}
          fontSize="14px"
          lineHeight="17px"
          textAlign="center"
        >
          {t('FOOTER_BOTTOM_TEXT')}
        </Text>
      </Box>
    </Box>
  )
}

export default Footer
