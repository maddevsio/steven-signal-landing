import languageDetector from '@/lib/languageDetector'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const useRedirect = (to) => {
  const router = useRouter()
  to = to || router.asPath
  // language detection
  useEffect(() => {
    const detectedLng = languageDetector.detect()
    console.log({ detectedLng, route: router.route })
    if (to.startsWith('/' + detectedLng) && router.route === '/404') {
      router.replace('/' + detectedLng + router.route)
      return
    }

    languageDetector.cache(detectedLng)
    router.replace('/' + detectedLng + to)
    return
  })

  return <></>
}

export const Redirect = () => {
  useRedirect()
  return <></>
}

// eslint-disable-next-line react/display-name
export const getRedirect = (to) => () => {
  useRedirect(to)
  return <></>
}
