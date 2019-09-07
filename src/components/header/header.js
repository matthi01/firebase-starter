import React from "react"
import "./header.scss"
import Navigation from "./navigation/navigation"

const header = (props) => {
    return (
        <div className="header">
            <Navigation currentUser={ props.currentUser } />
        </div>
    )
}

export default header