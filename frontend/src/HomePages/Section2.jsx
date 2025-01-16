import React from 'react'
import styles from "../HomePagesStyles/section2.module.css"


export const Section2 = () => {
    return (
        <section>
            <div className={styles.section2}>
                <div className={styles.sec2Sub1}>
                    <h1>Your information,
                        <br/>your way</h1>
                    <p>Use Evernote to capture more than just words. Harness the power of the internet with Web Clipper. Scan and store your important files, documents, and images. Remind yourself how awesome you are with audio notes. No matter if it’s meeting notes, receipts, manuals, or family recipes, Evernote keeps them secure.</p>
                    
                </div>


                <div className={styles.sec2Sub2}>
                    <img src="https://evernote.com/_next/image?url=%2Fimages%2Fsplit%2Fsketches.webp&w=640&q=75" />
                </div>
            </div>
        </section>
    )
}


export default Section2