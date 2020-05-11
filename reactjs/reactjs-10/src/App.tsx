import React, {FC} from 'react';
import {useRoutes} from './components/Routes';
import {BrowserRouter as Router} from 'react-router-dom';
import {useSelector} from 'react-redux';
import NavBar from './containers/NavBar';

interface RootItem {
  isAuthenticated: boolean;
}
interface RootState {
  auth: RootItem;
}

export const App: FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const routes = useRoutes(isAuthenticated);
  return (
    <div className="App">
      <Router>
        {isAuthenticated && <NavBar />}
        {routes}
      </Router>
    </div>
  );
};
