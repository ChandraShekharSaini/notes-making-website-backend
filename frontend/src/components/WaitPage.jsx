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
        const queryParams = new URLSearchParams(window.location.search);
        const token = queryParams.get('token');
    
        if (token) {
            try {
                console.log("AuthToken", token);
                const decodedToken = jwtDecode(token);
                console.log(decodedToken.user);
    
                // Dispatch the decoded user data
                dispatch(signInSuccess(decodedToken.user));
    
                // Navigate to the dashboard
                navigate("/dashbord");
            } catch (error) {
                console.error("Error decoding token:", error);
                dispatch(signInFailure("Invalid token"));
                navigate("/login"); // Redirect to login on error
            }
        } else {
            console.warn("No token found in the URL");
            dispatch(signInFailure("Token missing"));
            navigate("/login"); // Redirect to login if no token
        }
    }, []);
    



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