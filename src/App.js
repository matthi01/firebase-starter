import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./pages/home/home"
import SignInSignUp from "./pages/signInSignUp/signInSignUp"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signIn" component={SignInSignUp} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
