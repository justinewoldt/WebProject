import Head from 'next/head'
import Header from '../components/Header'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/Link'
import ImageGallery from "../components/ImageGallery";

export default function About() {
  return (
    <div>
      <Header></Header>
      <Layout home>
        <Head>
          <title>ImHungry!</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Hi, Im Justin Ewoldt.  I enjoy doing outdoor activities such as Snowboarding, 
            playing basketball, and swimming.  The motivation behind this website was assisting
            in the decision of where to cure my hunger after participating in activities such as these!
            I hope this website can help you too!
          </p>
        <ImageGallery />        </section>
      </Layout>

    </div>
    
  )
}