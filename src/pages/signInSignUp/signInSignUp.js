import React from "react"
import "./signInSignUp.scss"

import SignIn from "../../components/signIn/signIn"
import SignUp from "../../components/signUp/signUp"

const signInSignUp = () => {
    return (
        <div className="signInSignUp">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default signInSignUp