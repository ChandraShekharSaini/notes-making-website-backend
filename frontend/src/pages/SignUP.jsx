import React, { useState } from 'react'
import styles from "../Styles/signup.module.css"
import { Link, useNavigate } from "react-router-dom"
import useCustomHooks from '../CustomHooks/CustomHooks';

export const SignUP = () => {

    const navigate = useNavigate();
    const [formdata, setformData] = useState({})

    const { handleGoogleAuth } = useCustomHooks();

    const handleChage = (ev) => {
        console.log(ev.target.name)
        setformData({ ...formdata, [ev.target.name]: ev.target.value })
    }

    console.log(formdata)
    const handleSignup = async (e) => {
        e.preventDefault();


        try {
            const response = await fetch('https://notes-creating-backend.onrender.com/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formdata),
            });
            console.log(response)
            if (response.ok) {
                const result = await response.json();
                console.log(result)

                setTimeout(() => {
                    navigate("/login");
                }, 2000)
            }

        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    }



    return (
        <section>
            <div className={styles.signupPage}
            >
                <div className={styles.signupColumn}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <div className={styles.signupSubCol}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq86rwBFHelCnedKHpe7aUqDfc9IFI6HjzeA&s" />
                            <h1>Welcome to Evernote!</h1>
                            <p>Sign up and start taking notes.</p>
                        </div>

                        <div className={styles.signuInputs}>



                            <form onSubmit={handleSignup} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                <input onChange={handleChage} type='email' name='email' placeholder='Enter address' autoComplete='on' />
                                <button type='submit' className={styles.continuousBtn}>Continue</button>
                                <div className={styles.horizontalrule}> <hr /> or <hr /></div>
                            </form>




                            <div className={styles.authBtn}>
                                <button onClick={handleGoogleAuth}>
                                    <img src="/google.svg" className={styles.svgLogo} alt="Google" />
                                    Continue with Google
                                </button>
                                <button >
                                    <img src="/google.svg" className={styles.svgLogo} alt="Github" />
                                    Continue with Apple
                                </button>
                            </div>

                            <p className={styles.terms}>By creating an account, you are agreeing to our <span>Terms of Service</span> and acknowledging receipt of our <span>Privacy Policy</span>.</p>

                            <p className={styles.termsLogin}>Already have an account?<Link to="/login"> <span> Log in </span> </Link></p>

                        </div>
                    </div>

                </div>

                {/* <div className={styles.signInputs}>





                </div> */}

                <div className={styles.signupPageImage}>
                    <img
                        src="/splash.webp"
                        alt="Evernote Splash"

                    />
                </div>
            </div>
        </section>
    )
}


export default SignUP
