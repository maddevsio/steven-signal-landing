import { getStaticPaths, makeStaticProps } from '@/lib/getStatic'
import { Link } from '@chakra-ui/react'

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