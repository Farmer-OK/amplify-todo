// ↓import文の追加 --- ①
import AWSConfig from '@/aws-exports'
import { Layout } from '@/components/Layout'
import { Amplify } from 'aws-amplify';
// ↓import文の追加 --- ②
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';
// ↓import文の追加 --- ③
import Link from 'next/link'
 
// ↓Amplifyの設定を読み込み --- ④
Amplify.configure(AWSConfig)
 
const AboutPage = () => (
 // ↓AmplifyAuthenticatorで囲う --- ⑤
 // 最新のAuthenticatorでは<Authenticator>になっている。 
 <Authenticator>
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
   {/* ↓閉じタグも忘れずに --- ⑤ */}
 </Authenticator>
)
 
export default AboutPage
