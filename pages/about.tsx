// ↓import文の追加 --- ①
import { LoginRequired } from '@/components/auth'
import { Layout } from '@/components/Layout'

// ↓import文の追加 --- ③
import Link from 'next/link'

const AboutPage = () => (
  <LoginRequired>
    <Layout title="About | Next.js + TypeScript Example">

      <h1>About</h1>
      {/*  */}
      <p>This is the about page</p>
      <p>
        <Link href="/" >
          Go home
        </Link>
      </p>
    </Layout>
  </LoginRequired>
)
 
export default AboutPage
