import { Link } from '@chakra-ui/react'
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic'

const Homepage = () => {
  return (
    <>
      <main>
        <div>
          <Link href="/">
            <button type="button">Go Home page</button>
          </Link>
        </div>
      </main>
    </>
  )
}

export default Homepage

const getStaticProps = makeStaticProps()
export { getStaticPaths, getStaticProps }
