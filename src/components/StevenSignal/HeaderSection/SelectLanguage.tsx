import { Select } from '@chakra-ui/react'

const SelectLanguage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onToggleLanguageClick = (newLocale: any) => {
    console.log(newLocale)
  }

  return (
    <Select
      maxW="55px"
      fontWeight={700}
      fontSize="16px"
      lineHeight="20px"
      variant="unstyled"
      onChange={onToggleLanguageClick}
    >
      <option value="en">EN English</option>
      <option value="ru">РУ Русский</option>
    </Select>
  )
}

export default SelectLanguage
