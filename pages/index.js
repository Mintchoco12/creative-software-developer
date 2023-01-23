import Head from 'next/head'
import Nav from '../components/nav'

export default function Home() {
  return (
    <>
      <Head>
        <title>Creative Software Developer — Grafisch Lyceum Utrecht</title>
        <meta name="description" content="Creative Software Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/glu_favicon.png" />
      </Head>

      <Nav />
      
    </>
)};
