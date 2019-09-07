import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./pages/home/home"
import SignIn from "./pages/signIn/signIn"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signIn" component={SignIn} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
