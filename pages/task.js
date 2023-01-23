import React from 'react'
import Head from 'next/head'
import styles from '../styles/Task.module.css'
import Link from 'next/link'

export default function Task() {
  return (
    <>
      <Head>
        <title>Opdrachten — Grafisch Lyceum Utrecht</title>
        <meta name="description" content="Task" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/glu_favicon.png" />
      </Head>
      
      <main className={styles.main}>  
        <nav className={styles.nav}>
          <p className={styles.navbarTitle}>Opdracht</p>
          <div className={styles.navButtons}> 
            <button className={styles.navButton}>Run</button>
          </div>
          <div className={styles.navbarRight}>
              <Link href="/alumni" className={styles.navbarItem}>
                  <p>Alumni</p>
              </Link>
              <Link href="https://www.glu.nl/de-vakschool-voor-creatieve-doeners/" className={styles.navbarItem}>
                  <p>Over ons</p>
              </Link>
              <Link href="https://www.glu.nl/contact/" className={styles.navbarItem}>
                  <p>Contact</p>
              </Link>
          </div>
        </nav>

        <div className={styles.container}>
          {/* <div>
            <h1 className={styles.title}>Opdracht</h1>
          </div> */}
          <div className={styles.codeEditor}>
            <div>
              <textarea className={styles.inputArea} id='input-html'></textarea>
            </div>

            <div>
              <iframe id={styles.result}></iframe>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
