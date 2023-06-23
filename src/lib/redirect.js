import { useRouter } from 'next/router'
import { useEffect } from 'react'
import languageDetector from './languageDetector'

export const useRedirect = (to) => {
  const router = useRouter()
  to = to || router.asPath

  // language detection
  useEffect(() => {
    const detectedLng = languageDetector.detect()
    if (to.startsWith('/' + detectedLng) && router.route === '/404') {
      console.log({ to, detectedLng, route: router.route })
      // prevent endless loop
      router.replace('/' + detectedLng + router.route)
      return
    }
    console.log({ to, detectedLng, route: router.route })
    languageDetector.cache(detectedLng)
    router.replace('/' + detectedLng + to)
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
