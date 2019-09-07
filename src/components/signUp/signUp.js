import React from "react"
import "./signUp.scss"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { signInWithGoogle } from "../../firebase/firebase.utils"

class SignUp extends React.Component {

    state = {
        email: "",
        password: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitted")
    }

    handleChange = (e) => {
        const { value, name } = e.target
        
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="sign-up">
                <form className="sign-up__form" onSubmit={ this.handleSubmit }>
                    <h3>Sign Up:</h3>
                    <TextField
                        id="standard-email-input"
                        label="Email"
                        type="email"
                        required
                        name="email"
                        className="sign-up__form__input"
                        onChange={ this.handleChange } 
                        value={ this.state.email }
                        margin="normal"
                    />
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        margin="normal"
                        required
                        name="password"
                        className="sign-up__form__input"
                        onChange={ this.handleChange } 
                        value={ this.state.password }
                    />
                    <Button 
                        variant="contained" 
                        color="primary" 
                        className="sign-up__form__button"
                        style={{ display: "block", marginTop: "30px", marginBottom: "15px" }}
                        type="submit"
                        onClick={ this.handleSubmit }>
                            Sign In
                    </Button>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        className="sign-up__form__button"
                        onClick={ signInWithGoogle }>
                            Sign In with Google
                    </Button>
                </form>
            </div>
        )
    }
}

export default SignUp