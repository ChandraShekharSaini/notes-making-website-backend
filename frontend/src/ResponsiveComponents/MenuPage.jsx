import React, { useState } from 'react'
import { createContext } from 'react'
import styles from "../ResponsiveStyles/menupage.module.css"
import NavigationBar from '../components/NavigationBar'

const MenuProvider = createContext();


const MenuPage = () => {

    const [visibleMenu, setVisibleMenu] = useState(false)

    const handleMenu = () => {
        setVisibleMenu((preclear) => !preclear)
    }


    <MenuProvider.Provider value={{ handleMenu, setVisibleMenu }}>
        <NavigationBar />
    </MenuProvider.Provider>


    return (
        <section>
            <div style={{ "left": visibleMenu ? "0" : "-200px" }} className={styles.mobileMenu}>

            </div>
        </section>
    )
}

export default MenuPage

export {MenuProvider }