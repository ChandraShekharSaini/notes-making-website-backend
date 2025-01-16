import styles from "../Styles/navigation.module.css"
import { useContext } from "react";
import { MenuProvider } from "../ResponsiveComponents/MenuPage"
import { Link } from 'react-router-dom'
import { FaListUl } from "react-icons/fa";

const NavigationBar = () => {


    const value = useContext(MenuProvider)
  
      console.log(value)
   



    return (
        <header>
            <nav className={styles.navbar}>

                <div className={styles.logo}>
                    <img src="https://evernote.com/_next/static/media/evernote-logo.c443c65f.svg" />

                    {/* <img src="/kk.png"/> */}
                    {/* <img style={{width:"150px"}} src = "https://cdn.worldvectorlogo.com/logos/note-1.svg" /> */}
                </div>

                <div className={styles.links}>
                    <Link to="">Why Evernote</Link>
                    <Link to="" >Explore</Link>
                    <Link to="">Plans</Link>
                </div>
                <div className={styles.navbarBtn}>
                    <Link className={styles.loginBtn} to="/login" >Login</Link>
                    <Link to="" >
                        <button className={styles.downloadBtn}>Download</button>
                    </Link>
                    <Link to="/signup" >
                        <button className={styles.freeBtn}>Start for free </button>
                    </Link>
                </div>
                <div className={styles.listBtn}>
                    <FaListUl  className={styles.listLogo} />
                </div>
            </nav>
        </header>
    )
}

export default NavigationBar