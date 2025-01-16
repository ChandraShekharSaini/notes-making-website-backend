import React from 'react'
import styles from "../Styles/contactus.module.css"
import { Link } from 'react-router-dom'
const ContactUS = () => {
    return (
        <section>
            <div className={styles.contactus}>

                <div className={styles.contactLeft}>
                    <h1>How can we help?</h1>
                    <p>
                        Send us a message or question and we’ll help you as soon as we can.
                    </p>

                    <form className={styles.contactInputs}>

                        <input type='text' placeholder='Enter' />
                        <input type='text' placeholder='Enter' />
                        <input type='text' placeholder='Enter' />
                        <button type='submit'>Send</button>
                    </form>

                    <img className={styles.LeftRobot} src="https://assets.quillbot.com/images/misc/quill_wave_old.png" />
                </div>



                <div className={styles.contactusRight}>
                    <div className={styles.contactusRightBox1}>

                        <div className={styles.subBox1}>
                            <h5>Chicago</h5>
                            <p className={styles.address}>303 East Wacker, Suite 2101 <br></br> Chicago, IL 60601 <br></br>
                                United States of America</p>
                            <Link className={styles.links}>view map &#8594;</Link>

                            <p>For General Inquiries and Billing: <br></br> +1 (833) 982-1803 <br></br>(10AM-5PM Weekdays)</p>


                        </div>
                        <img src="https://assets.quillbot.com/images/theme/commonImages/contact/city-chicago.svg" />

                    </div>

                    <div className={styles.contactusRightBox2}>

                        <div className={styles.subBox1}>
                            <h5>Jaipur</h5>
                            <p className={styles.address}>5th floor, Gt Square Mall, Kalyan<br></br> Colony, D-Block, Malviya Nagar,<br></br> Jaipur, Rajasthan 302017</p>
                            <Link className={styles.links}>view map &#8594;</Link>

                        </div>
                        <img src="https://assets.quillbot.com/images/theme/commonImages/contact/city-Jaipur.svg" />

                    </div>

                </div>
            </div>
        </section >
    )
}

export default ContactUS