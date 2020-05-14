import React, {FC} from 'react';
import {useRoutes} from './components/Routes';
import {BrowserRouter as Router} from 'react-router-dom';
import {useSelector} from 'react-redux';
import NavBar from './containers/NavBar';
import {TRootStore} from './reducers/rootReducer';

export const App: FC = () => {
  const isAuth = useSelector<TRootStore>(({auth}) => auth.isAuthenticated) as boolean;
  const routes = useRoutes(isAuth);
  return (
    <div className="App">
      <Router>
        {isAuth && <NavBar />}
        {routes}
      </Router>
    </div>
  );
};
