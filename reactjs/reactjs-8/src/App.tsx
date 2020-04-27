import React, {FC, useState, useEffect} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import NavBar from './components/Navbar'
import {LoginForm} from './forms/LoginForm'
import {RegistrationForm} from './forms/RegistrationForm'
import {Welcome} from './components/Welcome'
import {Todo} from './components/Todo'

const App: FC = () => {
  const [isAuthenticated, setAuth] = useState(false)

  const onHandleLogin = (isAuth: boolean) => {
    setAuth(isAuth)
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuth))
  }
  //для проверки авторизованного пользователя при обновлении страницы, признак храним в localStorage
  useEffect(() => {
    const isAuth = JSON.parse(localStorage.getItem('isAuthenticated') || 'false') as boolean
    setAuth(isAuth)
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        {isAuthenticated && <NavBar onLogout={onHandleLogin} />}

        {isAuthenticated ? (
          <Switch>
            <Route path="/" component={Welcome} exact></Route>
            <Route path="/todo" component={Todo}></Route>
            <Redirect to="/" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact>
              <LoginForm loginAction={onHandleLogin} />
            </Route>
            <Route path="/registration">
              <RegistrationForm registrationAction={onHandleLogin} />
            </Route>
            <Redirect to="/" />
          </Switch>
        )}
      </BrowserRouter>
    </div>
  )
}

export default App
