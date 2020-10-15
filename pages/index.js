import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={utilStyles.headingMd}>
        <p>This is a TDD Book Catalog project. I'm hoping it will allow me to refresh my learning of React and also learn more about Nextjs, Typescript, and Jest.</p>
      </section>
   </Layout>
  )
}