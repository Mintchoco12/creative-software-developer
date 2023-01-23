import React from 'react'
import styles from '../styles/Nav.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function nav() {
    return (
        <>
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
  )
}
