import React from "react"
import "./signInSignUp.scss"
import Layout from "../../layout/layout"

import SignIn from "../../components/signIn/signIn"
import SignUp from "../../components/signUp/signUp"

const signInSignUp = () => {
    return (
        <Layout>
            <div className="signInSignUp">
                <SignIn />
                <SignUp />
            </div>
        </Layout>
    )
}

export default signInSignUp