import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import languageDetectorInstance from './languageDetector'

export const useRedirect = (to) => {
  const router = useRouter()
  const [isRedirected, setRedirected] = useState(false)
  to = to || router.asPath

  useEffect(() => {
    const detectedLng = languageDetectorInstance.detect()
    if (router.isReady) {
      const isRedirect =
        router.pathname === '/' && router.asPath !== router.pathname
      if (sessionStorage.getItem('hasRedirected')) {
        sessionStorage.removeItem('hasRedirected')
        if (isRedirect) router.replace('/404')
      } else if (!isRedirected) {
        if (to.startsWith('/' + detectedLng) && router.route === '/404') {
          setRedirected(true)
          router.replace('/' + detectedLng + router.route)
        } else {
          setRedirected(true)
          router.replace('/' + detectedLng + to)
        }
      }
    }
  }, [isRedirected, router, to])

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
