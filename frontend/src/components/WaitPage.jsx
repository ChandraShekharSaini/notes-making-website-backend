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
        //     const queryParams = new URLSearchParams(window.location.search);
        //  const token = queryParams.get('token');

        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InByb2ZpbGVJbWFnZSI6eyJnb29nbGUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NJYnl0aHpvRWtKbDBsMXJEVmlySVpzeVA1QjUzZXZGOFlVQlFtd0pDeUJJYWozNmE4PXM5Ni1jIiwiZGVmYXVsdCI6Imh0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vNTEyLzQ5MTgvNDkxODExNi5wbmcifSwiX2lkIjoiNjc4ODdkZDc4N2U0MjA2MTAwNjMxOTQyIiwiZnVsbE5hbWUiOiJDaGFuZHJhIFNoZWtoYXIgU2FpbmkiLCJwYXNzd29yZCI6Im9sTEs5KEIjRjFeZiIsInVzZXJuYW1lIjoiQ2FsbVBhbmRhNzMzIiwiZW1haWwiOiJjaGFuZHJhc2hla2hhcnNhaW5pMzIyQGdtYWlsLmNvbSIsImdvb2dsZUlkIjoiMTAzNjAzNTQ2OTUxODA5NDcxMjM2IiwiYWNjZXNzVG9rZW4iOiJ5YTI5LmEwQVJXNW03NGxySHFCRTVqNk9RelIzMTg4dk1aanMycmpIeGpXMUZUZnVhZVJ6LUtoU3gyRkVzTTAtTjFGaDM4dEI3TG5oOUgyTnp3S01GSEM4YjhJMEVXLS1meWpyMVVzZnNxRlJwdmVMeGZiaWJVZ1JYaUZCMmFqQTJ6UktZUXhXRDR6Vmo2d3ZFcnB6ZTl4OFFEWWNLWjVxbHRLMjJCdjVnYUNnWUtBWUFTQVJBU0ZRSEdYMk1pdHZJbEFWT0RMZW5fVXdSRDJOTVdXdzAxNjkiLCJfX3YiOjB9LCJpYXQiOjE3MzcwMDI5MjUsImV4cCI6MTczNzAwNjUyNX0.UqhN-78gOMGzExp7iRHOqhRhCcVDSDNF2oN7gEcUYCc"
        if (token) {
            try {
                console.log("AuthToken", token);
                const decodedToken = jwtDecode(token);
                console.log(decodedToken.user);

                // Dispatch the decoded user data
                dispatch(signInSuccess(decodedToken.user));

                // Navigate to the dashboard
                // navigate("/dashbord");
            } catch (error) {
                console.error("Error decoding token:", error);
                dispatch(signInFailure("Invalid token"));
                //  navigate("/login"); // Redirect to login on error
            }
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