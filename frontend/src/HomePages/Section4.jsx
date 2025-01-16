import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../HomePagesStyles/section4.module.css"

const Section4 = () => {
    return (

        <section>
            <div className={styles.section4Container}>

                <div className={styles.svg1}>
                    <img src="/star.svg" />
                </div>

                <div className={styles.section4SubCon}>
                    <h1>Tame your work, <br></br>organize your life</h1>
                    <p>Remember everything and tackle any project with your notes, tasks, and schedule all in one place.</p>
                    <Link to="/signup">
                        <button>Get Evernote Free</button>
                    </Link>
                </div>

                <div className={styles.svg2}>
                    <img src="/cloud.svg" />
                </div>


            </div>
        </section>
    )
}

export default Section4