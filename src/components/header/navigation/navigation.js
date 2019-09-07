import React from "react"
import "./navigation.scss"

const navigation = (props) => {
    return (
        <div className="navigation">
            <div className="navigation__button">
                { props.loggedIn ? " Log Out" : "Log In" }
            </div>
        </div>
    )
}

export default navigation