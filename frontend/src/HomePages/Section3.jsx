import React from 'react'
import styles from "../HomePagesStyles/section3.module.css"


export const Section2 = () => {
    return (
        <section>
            <div className={styles.section2}>
                <div className={styles.sec2Sub1}>
                    <h1>Intuitive recall</h1>
                    <p>Intuitive Evernote search features like AI-Powered Search help you get the right information from your notes quickly and reliably. And our advanced search options aren’t limited to notes: with Evernote, you can search your PDFs, documents, and images with ease.</p>
                    
                </div>


                <div className={styles.sec2Sub2}>
                    <img src="https://evernote.com/_next/image?url=%2Fimages%2Fsplit%2Feasy-search.webp&w=640&q=75" />
                </div>
            </div>
        </section>
    )
}


export default Section2