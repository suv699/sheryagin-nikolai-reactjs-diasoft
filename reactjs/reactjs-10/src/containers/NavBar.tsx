import React from 'react';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {Logout} from '../actions/authActions';
import {useHistory} from 'react-router';

import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);
interface IProps {
  logout: () => void;
}
function NavBar({logout}: IProps) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            React App
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              history.push('/welcome');
            }}>
            Welcome
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              history.push('/todo');
            }}>
            Todo
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              logout();
            }}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    logout: () => {
      dispatch(Logout());
    },
  };
};
export default connect(null, mapDispatchToProps)(NavBar);
