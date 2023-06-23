import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import languageDetectorInstance from './languageDetector'

export const useRedirect = (to) => {
  const router = useRouter()
  const [isRedirected, setRedirected] = useState(false)
  to = to || router.asPath
  debugger

  useEffect(() => {
    const detectedLng = languageDetectorInstance.detect()
    debugger
    if (
      !isRedirected &&
      to.startsWith('/' + detectedLng) &&
      router.route === '/404'
    ) {
      debugger
      setRedirected(true)
      router.replace('/' + detectedLng + router.route)
      return
    }
    if (!isRedirected) {
      debugger
      setRedirected(true)
      router.replace('/' + detectedLng + to)
      return
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
