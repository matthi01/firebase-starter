import React from "react"
import "./navigation.scss"
import { Link } from "react-router-dom"

const navigation = (props) => {
    return (
        <div className="navigation">
            <div className="navigation__button">
                <Link to="/">Home</Link>
            </div>
            <div className="navigation__button">
                <Link to="/signin">Log In</Link>
            </div>
        </div>
    )
}

export default navigation