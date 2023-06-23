import { useRouter } from 'next/router'
import { useEffect } from 'react'
import languageDetector from './languageDetector'

export const useRedirect = (to) => {
  const router = useRouter()
  to = to || router.asPath

  const redirectTo = (to) => {
    const detectedLng = languageDetector.detect()
    if (to.startsWith('/' + detectedLng) && router.route === '/404') {
      router.replace('/' + detectedLng + router.route)
      return
    }

    languageDetector.cache(detectedLng)
    router.replace('/' + detectedLng + to)
  }

  useEffect(() => {
    redirectTo(to)
  }, [])

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
