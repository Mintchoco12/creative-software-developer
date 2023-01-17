import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Creative Software Developer — Grafisch Lyceum Utrecht</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/glu_favicon.png" />
      </Head>
      <div className={styles.navbar}>
        <Link href="/">
          <Image
            src="/glu_black.png"
            alt="GLU Logo"
            className={styles.gluLogo}
            width={200}
            height={90}
            priority
          />
        </Link>
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

      </div>
    </>
)};