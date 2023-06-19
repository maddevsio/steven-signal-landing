import { Select } from '@chakra-ui/react'

const SelectLanguage = () => (
  <Select
    maxW="55px"
    fontWeight={700}
    fontSize="16px"
    lineHeight="20px"
    variant="unstyled"
  >
    <option value="english">EN English</option>
    <option value="russian">РУ Русский</option>
  </Select>
)

export default SelectLanguage
