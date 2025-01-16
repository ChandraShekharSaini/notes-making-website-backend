import React from 'react'
import styles from "../Styles/home.module.css"
import NavigationBar from '../components/NavigationBar'
import { Link, useNavigate } from 'react-router-dom'
import Section1 from '../HomePages/Section1'
import Section2 from '../HomePages/Section2'
import Section3 from '../HomePages/Section3'
import Section4 from '../HomePages/Section4'

const Home = () => {

    const navigate = useNavigate()
    console.log(import.meta.env)


    const handleLogin = () => {
        navigate("/login")
    }

    const handleSignup = () => {
        navigate("/signup")
    }


    return (
        <div>
            <NavigationBar />
            <section>
                <div className={styles.crousel} >

                    <div className={styles.subCrousel}>
                        <h1>What will you <br></br>
                            <strong>achieve</strong> today?
                        </h1>

                        <p className={styles.heading1}> Remember everything and tackle any project with your notes, tasks, <br />and schedule all in one place.</p>

                        <button onClick={handleSignup}>Get Evernote free</button>

                        <p onClick={handleLogin} className={styles.heading2}>Already have an account? <span>Log in</span></p>
                        <Link to="/contact">click</Link>
                    </div>

                </div>
            </section>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
        </div>
    )
}

export default Home