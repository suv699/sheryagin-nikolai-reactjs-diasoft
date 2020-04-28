import React, {ChangeEvent, FormEvent, FC, useState} from 'react';
import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {TextField} from '@material-ui/core';
import {WrapperTextField} from '../components/WrapperTextField';

const Login = WrapperTextField(TextField);
const Password = WrapperTextField(TextField);
interface IProps {
  registrationAction(isAuth: boolean): void;
}

export const RegistrationForm: FC<IProps> = ({registrationAction}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onChangeLogin = ({target: {value: login}}: ChangeEvent<HTMLInputElement>) => {
    setLogin(login);
  };
  const onChangePassword = ({target: {value: password}}: ChangeEvent<HTMLInputElement>) => {
    setPassword(password);
  };
  const onChangeEmail = ({target: {value: email}}: ChangeEvent<HTMLInputElement>) => {
    setEmail(email);
  };

  const handlerRegistration = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!login || !password) {
      return;
    }
    registrationAction(true);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className="login-container">
        <Typography component="h1" variant="h5">
          Registration
        </Typography>
        <form className="login-form" onSubmit={handlerRegistration}>
          <Login
            variant="outlined"
            margin="normal"
            onChange={onChangeLogin}
            value={login}
            required
            fullWidth
            id="login"
            label="Login"
            name="login"
            autoComplete="login"
            autoFocus
          />
          <Password
            variant="outlined"
            margin="normal"
            onChange={onChangePassword}
            value={password}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            onChange={onChangeEmail}
            value={email}
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Registration
          </Button>
          <Grid container>
            <Grid item xs>
              <NavLink to="/">Sign In</NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
