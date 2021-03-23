import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Navbar from '../components/Navbar'
import utilStyles from '../styles/utils.module.css'



export default function About() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
        this is about page
        </p>
      </section>
    </Layout>
  )
}
