import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Riwandi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to My Blog
        </h1>
      </main>
    </div>  
  )
}
