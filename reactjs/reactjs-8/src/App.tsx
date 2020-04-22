import React, {Component} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import NavBar from './components/Navbar'
import LoginForm from './forms/LoginForm'
import RegistrationForm from './forms/RegistrationForm'
import {Welcome} from './components/Welcome'
import {Todo} from './components/Todo'

class App extends Component {
  public state = {
    isAuthenticated: false,
  }

	public onHandleLogin: any = (isAuthenticated: boolean) => {
		this.setState({isAuthenticated: isAuthenticated})
		localStorage.setItem('isAuthenticated', JSON.stringify('true'))
	}
	public componentDidMount() {
			const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated') || 'false') as boolean
			this.setState({isAuthenticated})
	}

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          {this.state.isAuthenticated && <NavBar onHandleLogin={this.onHandleLogin}/>}

          {this.state.isAuthenticated ? (
            <Switch>
              <Route path="/" component={Welcome} exact></Route>
              <Route path="/todo" component={Todo}></Route>
              <Redirect to="/" />
            </Switch>
          ) : (
            <Switch>
              <Route path="/" exact>
                <LoginForm onHandleLogin={this.onHandleLogin}/>
              </Route>
              <Route path="/registration">
                <RegistrationForm onHandleLogin={this.onHandleLogin}/>
              </Route>
              <Redirect to="/" />
            </Switch>
          )}
        </BrowserRouter>
      </div>
    )
  }
}

export default App
