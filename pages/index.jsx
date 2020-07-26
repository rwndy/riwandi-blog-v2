import Head from 'next/head'
import Layout from '../components/layout/layout-home'
import Navbar from '../components/nav/navigation-bar'
import Footer from '../components/footer/footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Riwandi</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"></link>
      </Head>
      <Navbar />
      <Layout>
        <div className="contact--icon-moon">
          <img src="../../assets/images/moon.svg" alt="moon" className="icon-moon"/>
        </div>
        <h1 className="home--title__white">
          Riwandi
        </h1>
        <span><p className="home--sub__white">(Front End Developer and Always Love You)</p></span>
      </Layout>
      <section className="contact">
        <div className="contac--icon-cactus-1">
          <img src="../../assets/images/cactus.svg" alt="icon cactus" className="icon-cactus"/>
          <img src="../../assets/images/barrel.svg" alt="icon barrel" className="icon-brarrel"/>
          <img src="../../assets/images/cactus-2.svg" alt="icon cactus" className="icon-cactus"/>
        </div>
      </section>
      <Footer />
    </div>  
  )
}
