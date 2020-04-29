import React, {FC} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';

interface IProps {
  onLogout(isAuth: boolean): void;
}
const NavBar: FC<IProps> = ({onLogout}: IProps) => {
  const logoutAction = () => {
    onLogout(false);
    localStorage.removeItem('isAuthenticated');
  };
  return (
    <div className="nav-bar-container">
      <AppBar position="static">
        <Toolbar className="nav-bar-link">
          <Typography variant="h6" className="nav-bar-title">
            React App
          </Typography>
          <NavLink activeClassName="nav__active" color="inherit" exact to="/">
            Welcome
          </NavLink>
          <NavLink activeClassName="nav__active" color="inherit" exact to="/todo">
            Todo
          </NavLink>
          <Button color="inherit" onClick={logoutAction}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
