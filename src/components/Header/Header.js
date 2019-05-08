import React from 'react'
import styles from './header.module.css'

export default function Header() {
  return (
    <div className={styles.header_wrapper}>

      <div className={styles.header_home}>
        <a href="/"> <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Accedo Home"/> </a>
      </div>

      <div className={styles.header_history}>
        <a href="/history"> <h4> History </h4> </a>
      </div>

    </div>
  )
}


