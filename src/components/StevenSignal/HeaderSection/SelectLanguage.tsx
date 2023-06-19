import { Select, Text } from '@chakra-ui/react'

const SelectLanguage = () => (
  <Select
    maxW="55px"
    fontWeight={700}
    fontSize="16px"
    lineHeight="20px"
    variant="unstyled"
  >
    <option value="english">
      <Text as="span" color="#fff" bg="#3475EF">
        EN
      </Text>{' '}
      English
    </option>
    <option value="russian">
      <Text as="span" color="#fff" bg="#3475EF">
        РУ
      </Text>{' '}
      Русский
    </option>
  </Select>
)

export default SelectLanguage
