import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

interface CustomDocumentProps {
  currentPath: string
}

const CustomDocument: React.FC<CustomDocumentProps> = ({ currentPath }) => {
  const alternateUrls = [
    { href: `https://stevensignal.ai${currentPath}`, hreflang: 'x-default' },
    { href: `https://stevensignal.ai${currentPath}`, hreflang: 'en' },
    { href: `https://stevensignal.ai${currentPath}`, hreflang: 'ru' },
  ]

  return (
    <Html>
      <Head>
        {alternateUrls.map(({ href, hreflang }) => (
          <link
            key={hreflang}
            rel="alternate"
            href={href}
            hrefLang={hreflang}
          />
        ))}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

CustomDocument.getInitialProps = async (ctx: DocumentContext) => {
  const initialProps = await Document.getInitialProps(ctx)
  const router = ctx?.ctx?.req?.url
  const currentPath = router?.split('?')[0] || ''

  return { ...initialProps, currentPath }
}

export default CustomDocument
