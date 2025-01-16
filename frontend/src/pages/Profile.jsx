import React, { useState } from 'react'
import styles from "../Styles/profile.module.css"
import { IoMenuOutline } from "react-icons/io5";
import { useSelector } from "react-redux"
const Profile = () => {

  const [menu, setOpenMenu] = useState(false)

  const { currentUser } = useSelector((state) => state.user)

  const handleMenu = () => {
    setOpenMenu(preclear => !preclear)
  }



  return (
    <section>
      <div className={styles.Profilepage}>
        <nav>
          <div className={styles.navbar}>
            <  IoMenuOutline className={styles.navbarMenu} onClick={handleMenu} />

            <div className={styles.navbarliks}>

            </div>

            <div className={styles.profileImage}>
              {
                currentUser && (
                  <img src={currentUser.profileImage.google || currentUser.profileImage.default} />
                )
              }
            </div>

          </div>
        </nav>

        <div className={styles.mainContainer}>
          <div className={styles.proChild1}>

            <div className={styles.profilemenu} style={{ left: menu ? "0" : "-200px" }}>

            </div>

          </div>


          <div className={styles.proChild2}>

          </div>


          <div className={styles.proChild3}>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile