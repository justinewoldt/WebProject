import Head from 'next/head'
import Header from '../components/Header'
export default function Home() {
  return (
    <div className="homePage">
      <Head>
        <title>ImHungry!</title>
      </Head>
      <Header></Header>
      <div className="homeContent">
        <h1 className="homeTitle">Welcome to ImHungry!</h1>
        <h2 className="homeDesc">We are a non-profit organization that takes great pride in understanding that everybody gets hungry.
          In fact, ImHungry! right now.  Go ahead and head over to our HungerGenerator! to get started on 
          ur investigation into what will eventually be in your belly soon!
        </h2>
        <h2 className="listTitle">Did you know?</h2>
        <ul className="list">
          <li>Dark Chocolate has huge health benefits!</li>
          <li>Broccoli contains more protein that steak!</li>
          <li>Pistachios are actually fruits!</li>
          <li>Raspberries are considered part of the Rose family!</li>
          <li>Hawaiian pizza is not from Hawaii!</li>
          <li>SPAM is short for "Spiced Ham"!</li>
          <li>Bananas are berries, and strawberries arent!</li>
        </ul>
      </div>
      
      <style jsx>{`
        .page {
          height: 100%;
          color:white;
        }
      `}</style>
    </div>
      
      
  )
}