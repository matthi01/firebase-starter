import React from "react"
import "./signIn.scss"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { signInWithGoogle } from "../../firebase/firebase.utils"

class SignIn extends React.Component {

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
            <div className="sign-in">
                <form className="sign-in__form" onSubmit={ this.handleSubmit }>
                    <h3>Sign In:</h3>
                    <TextField
                        id="standard-email-input"
                        label="Email"
                        type="email"
                        required
                        name="email"
                        className="sign-in__form__input"
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
                        className="sign-in__form__input"
                        onChange={ this.handleChange } 
                        value={ this.state.password }
                    />
                    <Button 
                        variant="contained" 
                        color="primary" 
                        className="sign-in__form__button"
                        style={{ display: "block", marginTop: "30px", marginBottom: "15px" }}
                        type="submit"
                        onClick={ this.handleSubmit }>
                            Sign In
                    </Button>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        className="sign-in__form__button"
                        onClick={ signInWithGoogle }>
                            Sign In with Google
                    </Button>
                </form>
            </div>
        )
    }
}

export default SignIn