import Head from 'next/head'
import Header from '../components/Header'
import Tweet from '../components/Tweet'
export default function Hunger() {
  return (
    <div className="page">
      <Head>
        <title>ImHungry!</title>
      </Head>

      <Header></Header>
      <Tweet></Tweet>
    </div>
      
      
  )
}