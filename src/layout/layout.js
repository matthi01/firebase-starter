import React from "react"
import "./layout.scss"
import Header from "../components/header/header"

const layout = (props) => {
    return (
        <div>
            <Header />
            { props.children }
        </div>
    )
}

export default layout