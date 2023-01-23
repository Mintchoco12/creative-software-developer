import React from 'react'
import Head from 'next/head'
import Nav from '../components/Nav'

export default function alumni() {
  return (
    <>
      <Head>
        <title>Alumni werk — Grafisch Lyceum Utrecht</title>
        <meta name="description" content="Studenten werk van GLU" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/glu_favicon.png" />
      </Head>

      <Nav />
    </> 
  )
}
