import React from 'react'
import { Link } from "react-router-dom"
import styles from "../HomePagesStyles/section1.module.css"
const Section1 = () => {
    return (
        <section>

            <div className={styles.backgroundImage}>

            </div>


            <div className={styles.backImage}>

                <div className={styles.headings}>
                    <span>WHAT'S NEW</span>

                    <p className={styles.headings1} >We released 100 Evernote improvements in 2024</p>
                    <p className={styles.headings2}>This year, the Evernote team set an ambitious goal to ship one-hundred improvements. As 2024 comes to a close, we counted them up and… we were right on target! Product lead Federico Simionato summarizes the team’s accomplishments and previews what’s in store for 2025.</p>

                    <Link to="#">  Read More</Link>
                </div>



                <div ></div>
            </div>






        
        </section>
    )
}

export default Section1