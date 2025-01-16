import React, { useEffect } from 'react'
import styles from "../Styles/waitpage.module.css"
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { signInStart, signInFailure, signInSuccess } from "../redux/user/userSlice"
const WaitPage = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

  

    useEffect(() => {

        const queryParamas = new URLSearchParams(window.location.search)
        const token = queryParamas.get('token');

        if (token) {
            console.log("AuthToken", token)
            const decodedToken = jwtDecode(token)
            console.log(decodedToken.user)
            dispatch(signInSuccess(decodedToken.user))

            
          navigate("/dashbord")
  

        } 
           
        

    }, [])



    return (

        <section>
            <div className={styles.waitPage}>
                <nav className={styles.waitpageNav}>

                </nav>

                <h1>Redirecting To Dahbord Page</h1>

            </div>
        </section>
    )
}

export default WaitPage