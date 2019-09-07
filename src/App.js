import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./pages/home/home"
import SignInSignUp from "./pages/signInSignUp/signInSignUp"
import { auth } from "./firebase/firebase.utils"
import Header from "./components/header/header"

class App extends React.Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user })
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header currentUser={ this.state.currentUser } />
          <Switch>
            <Route path="/signIn" component={SignInSignUp} />
            <Route path="/" exact component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
