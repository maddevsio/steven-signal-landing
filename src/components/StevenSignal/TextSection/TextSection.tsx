import { Box, Text } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'

const TextSection = () => {
  const { t } = useTranslation(['common'])
  return (
    <Box bg="#000" borderRadius="16px" py="24px" px="26px" textAlign="center">
      <Text
        margin="auto"
        maxW="1023px"
        color="#fff"
        fontWeight={400}
        fontSize="18px"
        lineHeight="22px"
      >
        {t('IMPORTANT_NOTE')}
      </Text>
    </Box>
  )
}

export default TextSection
