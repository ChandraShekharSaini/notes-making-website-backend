import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUP from './pages/SignUP'
import Dashbord from "./pages/Dashbord"
import Profile from './pages/Profile'
import Error from "./components/Error"
import Edior from "./Edittor/One"
import PrivateRoute from './components/PrivateRoute'
import ComingSoon from './Edittor/ComingSoon'
import ConatctUs from "./pages/ContactUS"
import WaitPage from './components/WaitPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WaitPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUP />} />
        <Route path='/contact' element={<ConatctUs />} />
        <Route path="/redirecting-to-dashbord" element={<WaitPage />} />
        <Route element={<PrivateRoute />}>
          <Route path='/dashbord' element={<Dashbord />} >
            <Route path="commingsoon" element={<ComingSoon />} />
            <Route path="notes" element={<Edior />} />
         
          </Route>
          <Route path="profile" element={<Profile />} />
        </Route>



        <Route path='/*' element={<Error />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App