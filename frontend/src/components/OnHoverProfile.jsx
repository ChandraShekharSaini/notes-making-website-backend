
import React from 'react'



const hoverStyles = {
    position: "absolute",
    right: "40px",
    top: "30px",
    width: "340px",
    height: "100px",
    backgroundColor: "white",
    boxShadow: '1px 2px 5px gray',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: "10px",

    transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
}

const hoverImageBox = {

}

const hoverImage = {

    width: "60px",
    borderRadius: '50px',

}

const hoverUserDetails = {
    width: "70%",

    textAlign: 'center',
}


const OnHoverProfile = ({ currentUser }) => {



    return (
        <div>
            <div style={hoverStyles}>
                <div style={hoverImageBox} >
                    {
                        currentUser && <img style={hoverImage} src={currentUser.profileImage.google || currentUser.default} />
                    }
                </div>

                <div style={hoverUserDetails} >
                    {
                        currentUser && <p>{currentUser.username}</p>

                    }

                    {
                        currentUser && <p>{currentUser.email}</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default OnHoverProfile