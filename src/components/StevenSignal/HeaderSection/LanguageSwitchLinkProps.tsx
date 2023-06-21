import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

declare const languageDetector: {
  cache: (locale: string) => void
}

interface LanguageSwitchLinkProps {
  locale: string
  href?: string
}

const LanguageSwitchLink: FC<LanguageSwitchLinkProps> = ({
  locale,
  ...rest
}) => {
  const router = useRouter()

  let href = rest.href || router.asPath
  let pName = router.pathname
  Object.keys(router.query).forEach((k) => {
    if (k === 'locale') {
      pName = pName.replace(`[${k}]`, locale)
      return
    }
    pName = pName.replace(`[${k}]`, router.query[k] as string)
  })
  if (locale) {
    href = rest.href ? `/${locale}${rest.href}` : pName
  }

  return (
    <Link href={href} onClick={() => languageDetector?.cache(locale)}>
      <button style={{ fontSize: 'md' }}>{locale}</button>
    </Link>
  )
}

export default LanguageSwitchLink
