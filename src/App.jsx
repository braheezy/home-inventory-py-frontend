import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { RegisterForm, LoginForm, HomePage, Layout } from "./comps";
import { AuthProvider } from "./AuthProvider";

class App extends Component {
  render() {
    console.log("*************************************************************\nHEY YOU, ACCEPT THE RISK WITH THIS LINK, THEN RELOAD THE PAGE\n",
      process.env.API_URL,
      "\nTHANKS AND HAVE A GREAT TIME TAKING INVENTORY OF YOUR HOME\n*************************************************************");
    return (
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage></HomePage>
            </Route>

            <Route path="/register">
              <RegisterForm />
            </Route>

            <Route path="/login">
              <LoginForm />
            </Route>
          </Switch>
        </Layout>
      </AuthProvider>
    );
  }
}

export default App;
