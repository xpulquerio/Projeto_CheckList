import React from 'react'
import styles from './Menu.module.css'
import Panel from './Panel.js'

const Menu = ({activeMenu, changeMenu}) => {
  return (
    <div>
        <ul className={styles.App_Menu_ul}>
            <li onClick={() => changeMenu(1)} className={styles.App_Menu_li}>INÍCIO</li>
            <li onClick={() => changeMenu(2)} className={styles.App_Menu_li}>SOBRE</li>
            <li onClick={() => changeMenu(3)} className={styles.App_Menu_li}>PAINEL</li>
        </ul>
    </div>
  )
}

export default Menu