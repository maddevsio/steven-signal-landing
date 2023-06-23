import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const useRedirect = (to) => {
  const router = useRouter()
  const [isRedirected, setRedirected] = useState(false)
  to = to || router.asPath

  // language detection
  useEffect(() => {
    const detectedLng = 'en'
    if (
      !isRedirected &&
      to.startsWith('/' + detectedLng) &&
      router.route === '/404'
    ) {
      // prevent endless loop
      setRedirected(true)
      router.replace('/' + detectedLng + router.route)
      return
    }
    if (!isRedirected) {
      setRedirected(true)
      router.replace('/' + detectedLng + to)
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
