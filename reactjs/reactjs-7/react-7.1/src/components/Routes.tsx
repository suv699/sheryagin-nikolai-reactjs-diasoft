import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import LoginForm from "../forms/LoginForm"
import RegistrationForm from "../forms/RegistrationForm"

export const useRoutes = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Redirect to="/" />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" exact>
        <LoginForm />
      </Route>
      <Route path="/registration">
        <RegistrationForm />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}
