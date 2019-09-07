import React from "react"
import "./navigation.scss"
import { Link } from "react-router-dom"
import { auth } from "../../../firebase/firebase.utils"

const navigation = (props) => {
    return (
        <div className="navigation">
            <div className="navigation__button">
                <Link to="/">Home</Link>
            </div>
            { props.currentUser ? 
                <div className="navigation__button">
                    <span onClick={ () => auth.signOut() }>Log Out</span>
                </div> 
                :
                <div className="navigation__button">
                    <Link to="/signin">Log In</Link>
                </div> }
            
        </div>
    )
}

export default navigation