import { useRouter } from 'next/router'
import { useEffect } from 'react'
import languageDetectorInstance from './languageDetector'

export const useRedirect = (to) => {
  const router = useRouter()
  to = to || router.asPath

  // language detection
  useEffect(() => {
    const detectedLng = languageDetectorInstance.detect()
    if (to.startsWith('/' + detectedLng) && router.route === '/404') {
      // prevent endless loop
      router.replace('/' + detectedLng + router.route)
      return
    }

    languageDetectorInstance.cache(detectedLng)
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
