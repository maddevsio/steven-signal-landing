import { Box, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box as="footer" mt="32px">
      <Box p="24px" bg="#000">
        <Text
          color="#282828"
          fontWeight={900}
          fontSize="14px"
          lineHeight="17px"
          textAlign="center"
        >
          Стивен Сигнал
        </Text>
      </Box>
    </Box>
  )
}

export default Footer
