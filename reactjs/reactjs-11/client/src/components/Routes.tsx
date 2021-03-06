import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import LoginForm from '../containers/LoginForm';
import RegistrationForm from '../containers/RegistrationForm';
import {Welcome} from './Welcome';
import Todo from '../containers/Todo';
import ViewTodo from '../containers/ViewTodo';
import {fetchGetTodo} from '../thunk/fetchTodo';

export const useRoutes = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/welcome" exact component={Welcome}></Route>
        <Route path="/todo" exact component={Todo}></Route>
        <Route
          path="/todo/:id"
          exact
          render={({match}) => {
            fetchGetTodo();
            return <ViewTodo id={match.params.id} />;
          }}></Route>
        <Redirect to="/welcome" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/" exact component={LoginForm}></Route>
      <Route path="/registration" component={RegistrationForm}></Route>
      <Redirect to="/" />
    </Switch>
  );
};
