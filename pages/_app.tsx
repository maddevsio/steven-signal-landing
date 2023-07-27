import { ChakraProvider } from '@chakra-ui/react'
import { appWithTranslation } from 'next-i18next'
import { type AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ReactElement, useEffect, useState } from 'react'
import { metadata as englishMetadata } from '../metadata/metadata.en'
import { metadata as russianMetadata } from '../metadata/metadata.ru'
import i18nextConfig from '../next-i18next.config'
import '../styles/_global.css'
interface MetadataMap {
  [locale: string]: {
    ogImage: string;
    ogTitle: string;
    ogDescription: string;
  };
}

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  const router = useRouter();
  const { query } = router;
  const [metadata, setMetadata] = useState(englishMetadata)
  useEffect(() => {
    const metadataMap: MetadataMap = {
      en: englishMetadata,
      ru: russianMetadata,
    };
    // change the <html lang={}> attribute
    const currentLocale = query.locale || i18nextConfig.i18n.defaultLocale;
    document.documentElement.lang = Array.isArray(currentLocale) ? currentLocale[0] : currentLocale;
    // change the metadata
    const lang = Array.isArray(query.locale) ? query.locale[0] : query.locale;
    setMetadata((lang && metadataMap[lang]) || englishMetadata)
  }, [query.locale]);

  return (
    <>
      <Head>
        <title>{metadata.ogTitle}</title>
        <link rel="shortcut icon" href="/assets/images/logo.ico" />
        <link rel="alternate" href="https://stevensignal.ai/en/" hrefLang="x-default" />
        <link rel="alternate" href="https://stevensignal.ai/en/" hrefLang="en" />
        <link rel="alternate" href="https://stevensignal.ai/ru/" hrefLang="ru" />
        <meta property="og:image" content={metadata.ogImage} />
        <meta property="og:title" content={metadata.ogTitle} />
        <meta property="og:description" content={metadata.ogDescription} />
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default appWithTranslation(App)
