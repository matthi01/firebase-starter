import React from "react"
import "./signIn.scss"
import Layout from "../../layout/layout"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
            <Layout>
                <div className="sign-in">
                    <form className="sign-in__form" onSubmit={ this.handleSubmit }>
                        <h3>Sign In:</h3>
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                        />
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                        />
                        <input
                            type="email"
                            placeholder="email"
                            required
                            name="email"
                            onChange={ this.handleChange } 
                            value={ this.state.email }
                        />
                        <input
                            type="password"
                            placeholder="password"
                            required
                            name="password"
                            onChange={ this.handleChange } 
                            value={ this.state.password }
                        />
                        <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                            Submit
                        </Button>
                    </form>
                </div>
            </Layout>
        )
    }
}

export default SignIn