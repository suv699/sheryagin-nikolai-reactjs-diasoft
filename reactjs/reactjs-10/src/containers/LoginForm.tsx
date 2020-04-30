import React, {ChangeEvent} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {Notification} from '../components/Alert';
import {Title} from '../components/Title';
import Container from '@material-ui/core/Container';
import {onChangeFieldAuth, authAction} from '../actions/authActions';
import {INotification, ILogin} from '../models/intefeces';
import {emptyField} from '../actions/appActions';

import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

interface IProps {
  msg: INotification;
  onChangeFieldAuth: (n: string, v: string) => void;
  logIn: (param: ILogin) => void;
  emptyField: () => void;
  authData: ILogin;
}
const LoginForm: React.FC<IProps> = ({
  authData: {login, password, disabledLoginForm: disabled},
  msg,
  onChangeFieldAuth,
  logIn,
  emptyField,
}: IProps) => {
  const classes = useStyles();
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeFieldAuth(event.target.name, event.target.value);
  };
  const handleLogIn = () => {
    try {
      // const {login, password} = props.authData;
      logIn({login, password});
    } catch (e) {
      console.log('Ошибка авторизации');
    }
  };
  return (
    <div>
      {msg.show && <Notification text={msg.text} mode={msg.mode} />}
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Title title="Sign in"></Title>
          <ValidatorForm className={classes.form} onSubmit={handleLogIn} onError={() => emptyField()}>
            <TextValidator
              variant="outlined"
              margin="normal"
              fullWidth
              id="login"
              label="Login"
              name="login"
              value={login}
              onChange={onChangeHandler}
              autoComplete="login"
              disabled={disabled}
              validators={['required']}
              errorMessages={['field is required']}
              autoFocus
            />
            <TextValidator
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              value={password}
              onChange={onChangeHandler}
              label="Password"
              type="password"
              disabled={disabled}
              validators={['required']}
              errorMessages={['field is required']}
              id="password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              disabled={disabled}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={disabled}>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <NavLink to="/registration">Registration</NavLink>
              </Grid>
            </Grid>
          </ValidatorForm>
        </div>
      </Container>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    authData: state.auth,
    msg: state.notification,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logIn: (data: ILogin) => {
      dispatch(authAction(data));
    },
    onChangeFieldAuth: (name: string, value: string) => {
      dispatch(onChangeFieldAuth(name, value));
    },
    emptyField: () => {
      dispatch(emptyField());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
