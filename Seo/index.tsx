import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Seo = () => {
  const router = useRouter()
  const [canonicalUrl, setCanonicalUrl] = useState<string>('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const canonical = window.location.href.endsWith('/')
        ? window.location.href
        : `${window.location.href}/`

      setCanonicalUrl(canonical)
    }
  }, [router.asPath])

  return <DefaultSeo canonical={canonicalUrl} />
}

export default Seo
