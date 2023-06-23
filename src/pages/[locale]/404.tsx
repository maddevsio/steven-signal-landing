import HeaderLogo from '@/components/StevenSignal/HeaderSection/Logo'
import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'

import LinkComponent from '@/components/shared/Link'
import { Box, Flex } from '@chakra-ui/react'

const Homepage = () => {
  const { t } = useTranslation(['404'])

  return (
    <>
      <main>
        <Flex mt="24px" direction="column" gap="10px">
          <HeaderLogo />
          <Box textAlign="center">
            <LinkComponent href="/">
              <button type="button" color="#00f">
                {t('HOME_LINK')}
              </button>
            </LinkComponent>
          </Box>
        </Flex>
      </main>
    </>
  )
}

export default Homepage

const getStaticProps = makeStaticProps(['common', '404'])
export { getStaticPaths, getStaticProps }
