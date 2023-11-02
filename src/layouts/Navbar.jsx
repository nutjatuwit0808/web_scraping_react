import React from 'react'
import styles from './Navbar.module.css'
function Navbar() {
  return (
    <div className={styles.navbar_container}>
        <div></div>
        <div className={styles.navbar_logo}>Stock Value</div>
        <div className={styles.navbar_menu_wrapper}>
            <a className={styles.navbar_menu}>menu1</a>
            <a className={styles.navbar_menu}>menu2</a>
            <a className={styles.navbar_menu}>menu3</a>
        </div>
    </div>
  )
}

export default Navbar