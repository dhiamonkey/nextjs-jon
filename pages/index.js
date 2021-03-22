import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey my name is Jon Dhia and I love Yuni Shara so much! <br/> &lt;3 uWu </p>
        <p>

        </p>
      </section>
    </Layout>
  )
}
