import {
  useLanguageQuery,
  useTranslation as useTranslationHook,
} from 'next-export-i18n'

type UseTranslation = [
  t: (selector: string) => string,
  query: 'en' | 'ru',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  trueQuery: any
]

const useTranslation = () => {
  const { t } = useTranslationHook()
  const [query] = useLanguageQuery()

  return [t, query?.lang ?? 'en', query] as UseTranslation
}

export default useTranslation
