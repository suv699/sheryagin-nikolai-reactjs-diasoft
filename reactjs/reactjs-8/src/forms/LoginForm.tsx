import React, {FC, useState, ChangeEvent} from 'react';
import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {TextField} from '@material-ui/core';
import {WrapperTextField} from '../components/WrapperTextField';

const Login = WrapperTextField(TextField);
const Password = WrapperTextField(TextField);
interface IProps {
  loginAction(isAuth: boolean): void;
}

export const LoginForm: FC<IProps> = ({loginAction}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onChangeLogin = ({target: {value: login}}: ChangeEvent<HTMLInputElement>) => {
    setLogin(login);
  };
  const onChangePassword = ({target: {value: password}}: ChangeEvent<HTMLInputElement>) => {
    setPassword(password);
  };
  const onHandleLogin = () => {
    loginAction(true);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className="login-container">
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className="login-form" noValidate onSubmit={onHandleLogin}>
          <Login
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="login"
            label="Login"
            value={login}
            name="login"
            autoComplete="login"
            onChange={onChangeLogin}
            autoFocus
          />
          <Password
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            value={password}
            type="password"
            id="password"
            onChange={onChangePassword}
          />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <NavLink to="/registration">Registration</NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
