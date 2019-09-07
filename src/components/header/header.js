import React from "react"
import "./header.scss"
import Navigation from "./navigation/navigation"

const header = () => {
    return (
        <div className="header">
            <Navigation />
        </div>
    )
}

export default header