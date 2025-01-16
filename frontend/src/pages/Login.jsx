import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom"
import styles from "../Styles/login.module.css"
import useCustomHooks from '../CustomHooks/CustomHooks';
import { useDispatch, useSelector } from 'react-redux';
import { signInSuccess, signInStart, signInFailure } from '../redux/user/userSlice';
const Login = () => {

  const { loading, error } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [formdata, setFormData] = useState()

  const { handleGoogleAuth } = useCustomHooks();

  const handleChange = (ev) => {
    console.log(ev.target.value)
    setFormData({ ...formdata, [ev.target.name]: ev.target.value })
  }

  console.log(formdata)

  const handleLogin = async (e) => {
    e.preventDefault();


    try {
      dispatch(signInStart())
      const response = await fetch('https://notes-creating-backend.onrender.com/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formdata),
      });
      console.log(response);

      const data = await response.json();

      if (data.success === false) {
        dispatch(signInFailure(data.message))
        return
      }
      dispatch(signInSuccess(data))

      setTimeout(() => {
        navigate("/dashbord");
      }, 3000);

    } catch (error) {
      console.error('Error submitting the form:', error);
      dispatch(signInFailure(error.message))
    }
  }




  return (
    <section>
      <div className={styles.loginPage}>

        <div className={styles.starSvg}>
          <img src="/star.svg" />
        </div>
        <div className={styles.loginContainer}>



          <div className={styles.loginSub}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq86rwBFHelCnedKHpe7aUqDfc9IFI6HjzeA&s" />

            <h1 className={styles.signInText}>
              Sign in
            </h1>

            <p>to continue to your Evernote account.</p>
          </div>


          <div className={styles.loginInputs}>
            <form style={{ display: "flex", flexDirection: "column", gap: "20px" }} onSubmit={handleLogin}>
              <input onChange={handleChange} type='email' name="email" placeholder='Enter Email' autoComplete='on' />
              <input onChange={handleChange} type='password' name='password' placeholder='Enter password' autoComplete='on' />
              <button disabled={loading} type='submit' className={styles.continueBtn}> {loading ? "Loading....." : "Continue"}</button>

            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}

          </div>
          <span className={styles.horline}>  <hr />or<hr /></span>
             


          <div className={styles.authBtn}>
            <button onClick={handleGoogleAuth} >
              <img src="/google.svg" className={styles.svgLogo} alt="Google" />
              Continue with Google
            </button>
            <button >
              <img src="/google.svg" className={styles.svgLogo} alt="Github" />
              Continue with Apple
            </button>


          </div>

          <div className={styles.signupAccount}>
            <p>Don’t have an account? <Link to="/signup">Signup</Link></p>
            <p>Can't sign in? <Link to="/signup"> Click here </Link></p>
          </div>



        </div>


        <div className={styles.cloudSvg}>
          <img src="/cloud.svg" />
        </div>
      </div>
    </section >
  )
}

export default Login