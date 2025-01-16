
const useCustomHooks = () => {
    const handleGoogleAuth = () => {
      window.location.href = "https://notes-creating-backend.onrender.com/auth/google"
    }
    return {handleGoogleAuth};
}

export default useCustomHooks
