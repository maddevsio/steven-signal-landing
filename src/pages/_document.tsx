import { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import i18nextConfig from '../../next-i18next.config'

interface MyDocumentProps {
  locale?: string
}

const MyDocument: React.FC<MyDocumentProps> = ({ locale }) => {
  const currentLocale = locale || i18nextConfig.i18n.defaultLocale

  return (
    <Html lang={currentLocale}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export async function getServerSideProps(ctx: DocumentContext) {
  const { query } = ctx
  const locale = query.locale || i18nextConfig.i18n.defaultLocale

  return {
    props: {
      locale,
    },
  }
}

export default MyDocument
