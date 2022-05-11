import React from 'react'
import styles from './Menu.module.css'

const Menu = () => {
  return (
    <div>
        <ul className={styles.App_Menu_ul}>
            <li className={styles.App_Menu_li}>INÍCIO</li>
            <li className={styles.App_Menu_li}>SOBRE</li>
            <li className={styles.App_Menu_li}>PAINEL</li>
        </ul>
    </div>
  )
}

export default Menu