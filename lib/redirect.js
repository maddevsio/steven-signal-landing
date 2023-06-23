import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import languageDetectorInstance from './languageDetector'

export const useRedirect = (to) => {
  const router = useRouter()
  const [isRedirected, setRedirected] = useState(false)
  to = to || router.asPath

  // Set isRedirected to true when the component is rendered
  useEffect(() => {
    setRedirected(true)
  }, [])

  // Handle the redirect
  useEffect(() => {
    if (isRedirected) {
      const detectedLng = languageDetectorInstance.detect()
      if (to.startsWith('/' + detectedLng) && router.route === '/404') {
        router.replace('/' + detectedLng + router.route)
      } else {
        router.replace('/' + detectedLng + to)
      }
    }
  }, [router, to, isRedirected])

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
