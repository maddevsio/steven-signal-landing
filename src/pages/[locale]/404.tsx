import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'

import Header from '@/components/StevenSignal/HeaderSection'
import LinkComponent from '@/components/shared/Link'

const Homepage = () => {
  const { t } = useTranslation(['404', 'common'])

  return (
    <>
      <main>
        <Header />
        <div>
          <LinkComponent href="/">
            <button type="button">{t('404:HOME_LINK')}</button>
          </LinkComponent>
        </div>
      </main>
    </>
  )
}

export default Homepage

const getStaticProps = makeStaticProps(['404', 'common'])
export { getStaticPaths, getStaticProps }
