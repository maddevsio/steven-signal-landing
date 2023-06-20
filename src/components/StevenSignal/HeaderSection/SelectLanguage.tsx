import { Select } from '@chakra-ui/react'
import { i18n } from 'next-i18next'
import { useRouter } from 'next/router'

const SelectLanguage = () => {
  const router = useRouter()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onToggleLanguageClick = (event: any) => {
    const selectedLocale = event.target.value
    i18n?.changeLanguage(selectedLocale)
    router.push(router.pathname, router.asPath, { locale: selectedLocale })
  }

  return (
    <Select
      maxW="55px"
      fontWeight={700}
      fontSize="16px"
      lineHeight="20px"
      variant="unstyled"
      onChange={onToggleLanguageClick}
      defaultValue={i18n?.language}
    >
      <option value="en">EN English</option>
      <option value="ru">РУ Русский</option>
    </Select>
  )
}

export default SelectLanguage
