import { DefaultSeo } from 'next-seo'

const Seo = ({ canonicalUrl }) => {
  return (
    <>
      <DefaultSeo canonical={canonicalUrl} />
    </>
  )
}

export default Seo
