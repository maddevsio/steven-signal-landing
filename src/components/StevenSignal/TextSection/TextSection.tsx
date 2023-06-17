import { Box, Text } from '@chakra-ui/react'

const TextSection = () => (
  <Box bg="#000" borderRadius="16px" py="24px" px="26px" textAlign="center">
    <Text
      margin="auto"
      maxW="1023px"
      color="#fff"
      fontWeight={400}
      fontSize="18px"
      lineHeight="22px"
    >
      Сигналы бота не являются финансовыми рекомендациями. Применяйте информацию
      на свой страх и риск. Не следуйте слепо рекомендациям бота. Валидируйте
      сигналы с вашей торговой или инвестиционной стратегией и анализом.
    </Text>
  </Box>
)

export default TextSection
