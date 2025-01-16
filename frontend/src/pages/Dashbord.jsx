import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, Link, useParams, useNavigate } from "react-router-dom";
import styles from "../Styles/dashbord.module.css"
import { IoIosMenu } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";
import { MdHelpOutline } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import OnHoverProfile from "../components/OnHoverProfile"

import { signInSuccess } from "../redux/user/userSlice"
import { useDispatch, useSelector } from "react-redux"



const Dashbord = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const location = useLocation();
  const [open, setOpen] = useState(false)
  const [menuVisible, setMenuVisible] = useState(false);
  const [user, setUser] = useState({})
  const [isHovered, setMouseHovered] = useState(false);

  const { currentUser } = useSelector((state) => state.user)

  console.log(currentUser.profileImage.google)


  const pathParts = location.pathname.split('/')
  const currentPath = pathParts[pathParts.length - 1];
  const capitalPath = currentPath.charAt(0).toUpperCase() + currentPath.slice(1);


  const toggleMenu = () => {
    setMenuVisible(prevState => !prevState);

    setOpen(!open);
  };


  return (
    <section>


      <div>
        <nav className={styles.header}>

          {open ? <  IoMdCloseCircleOutline onClick={toggleMenu} className={styles.logo} /> : <IoIosMenu onClick={toggleMenu} className={styles.logo} />}

          <p>{capitalPath}</p>


          <div className={styles.Btns}>
            <button className={styles.upgradeBtn} >Upgrade To Premium</button>
            <button className={styles.freeBtn} >Get Started's its free</button>

          </div>
          <div onMouseEnter={() => setMouseHovered(true)} onMouseLeave={() => setMouseHovered(false)} style={{ position: 'relative' }}>
            <Link to="/profile">

              {currentUser && currentUser.profileImage.google && <img className={styles.userimage} src={currentUser.profileImage.google || currentUser.profileImage.default} />}
            </Link>

            {
              isHovered && (

                <OnHoverProfile currentUser={currentUser} />

              )
            }
          </div>


        </nav>



      </div >


      <div className={styles.workspace}>
        <div className={styles.sideBarLogo} >




          <div className={styles.basicnotes}>

            <div >
              <Link to="notes">
                <img style={{ width: "30px" }} src="https://www.svgrepo.com/show/331588/standard-notes.svg" />
              </Link>
            </div>



            <div className={[styles.logodiv, styles.logodiv1].join(' ')}>
              <Link to="commingsoon">
                <img className={styles.logodivImage} src="https://assets.quillbot.com/images/theme/commonImages/paraphraser-new.svg" />
              </Link>
            </div>



            <div className={[styles.logodiv, styles.logodiv2].join(' ')}>
              <Link to="commingsoon">
                <img className={styles.logodivImage} src="https://assets.quillbot.com/images/theme/commonImages/grammar-checker-new.svg" />
              </Link>
            </div>


            <div className={[styles.logodiv, styles.logodiv3].join(' ')}>
              <Link to="commingsoon">
                <img className={styles.logodivImage} src="https://assets.quillbot.com/images/theme/light/aiDetector/ai-detector-old.svg" />
              </Link>
            </div>




            <div className={[styles.logodiv, styles.logodiv4].join(' ')}>
              <Link to="commingsoon">
                <img className={styles.logodivImage4} src="https://assets.quillbot.com/images/theme/commonImages/plag-checker-new.svg" />
              </Link>
            </div>


            <div className={[styles.logodiv, styles.logodiv5].join(' ')}>
              <Link to="commingsoon">
                <img className={styles.logodivImage} src="https://assets.quillbot.com/images/theme/commonImages/summarizer-new.svg" />
              </Link>
            </div>

            <div className={[styles.logodiv, styles.logodiv6].join(' ')}>
              <Link to="">
                <img className={styles.logodivImage} src="https://assets.quillbot.com/images/theme/light/translator/translator_icon.svg" />
              </Link>
            </div>

            <div className={[styles.logodiv, styles.logodiv7].join(' ')}>
              <Link to="commingsoon">
                <img className={styles.logodivImage} src="https://assets.quillbot.com/images/theme/commonImages/citation-generator-logo.svg" />
              </Link>
            </div>





            <div className={styles.sevicesSupport}>
              <Link to="/contact">
                <MdMailOutline />
              </Link>
              <MdHelpOutline />
            </div>



          </div>

          <div className={styles.menu} style={{ left: menuVisible ? '0px' : '-182px' }}>

            <div className={styles.menuOption}>
              <Link to="notes" >Notes</Link>
            </div>

            <div className={styles.menuOption}>
              <Link to="commingsoon" >Paraphraser</Link>
            </div>

            <div className={styles.menuOption}>
              <Link to="commingsoon" >Grammer Checker</Link>
            </div>

            <div className={styles.menuOption}>
              <Link to="commingsoon" >Al Dectector</Link>
            </div>

            <div className={styles.menuOption}>
              <Link to="one" >Plagiarism Checker</Link>
            </div>

            <div className={styles.menuOption}>
              <Link to="commingsoon" >Summarizer</Link>
            </div>

            <div className={styles.menuOption}>
              <Link to="commingsoon" >Tranlator</Link>
            </div>

            <div className={styles.menuOption}>
              <Link to="commingsoon" >Spell Checker</Link>
            </div>

          </div>
        </div>
        <div className={styles.workingArea} >
          <Outlet />
        </div>
        <div className={styles.rightBtns} ></div>

      </div>

    </section >
  )
}

export default Dashbord

