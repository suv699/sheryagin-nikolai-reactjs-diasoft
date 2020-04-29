import React, {FC} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {Notification} from '../components/Alert';
import {Title} from '../components/Title';
import {emptyField} from '../actions/appActions';
import {IRegistration, INotification} from '../models/intefeces';
import {registrationAction, onChangeFieldRegistration} from '../actions/authActions';

import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

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
  regData: IRegistration;
  msg: INotification;
  onChangeFieldReg: (n: string, v: string) => void;
  registrationAction: (param: IRegistration) => void;
  emptyField: () => void;
}
const RegistrationForm: FC<IProps> = ({
  regData: {nameRegistr, lastNameRegistr, loginRegistr, passwordRegistr, emailRegistr, disabledRegistration: disabled},
  msg,
  onChangeFieldReg,
  registrationAction,
  emptyField,
}: IProps) => {
  const classes = useStyles();

  const handlerRegistration = () => {
    try {
      registrationAction({nameRegistr, lastNameRegistr, loginRegistr, passwordRegistr, emailRegistr});
    } catch (e) {
      console.log(e.message);
    }
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    onChangeFieldReg(event.target.name, event.target.value);
  };
  return (
    <div>
      {msg.show && <Notification text={msg.text} mode={msg.mode} />}
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Title title="Registration"></Title>
          <ValidatorForm className={classes.form} onSubmit={handlerRegistration} onError={() => emptyField()}>
            <TextValidator
              variant="outlined"
              margin="normal"
              fullWidth
              id="nameRegistr"
              label="Name"
              name="nameRegistr"
              value={nameRegistr}
              onChange={onChangeHandler}
              disabled={disabled}
              validators={['required']}
              errorMessages={['field is required']}
              autoFocus
            />
            <TextValidator
              variant="outlined"
              margin="normal"
              fullWidth
              name="lastNameRegistr"
              label="LastName"
              type="lastNameRegistr"
              id="lastNameRegistr"
              value={lastNameRegistr}
              onChange={onChangeHandler}
              disabled={disabled}
              validators={['required']}
              errorMessages={['field is required']}
            />
            <TextValidator
              variant="outlined"
              margin="normal"
              fullWidth
              id="loginRegistr"
              label="Login"
              name="loginRegistr"
              value={loginRegistr}
              onChange={onChangeHandler}
              disabled={disabled}
              validators={['required']}
              errorMessages={['field is required']}
            />
            <TextValidator
              variant="outlined"
              margin="normal"
              fullWidth
              name="passwordRegistr"
              label="Password"
              type="passwordRegistr"
              id="passwordRegistr"
              value={passwordRegistr}
              onChange={onChangeHandler}
              disabled={disabled}
              validators={['required']}
              errorMessages={['field is required']}
            />
            <TextValidator
              variant="outlined"
              margin="normal"
              fullWidth
              id="emailRegistr"
              label="Email Address"
              name="emailRegistr"
              value={emailRegistr}
              onChange={onChangeHandler}
              disabled={disabled}
              validators={['isEmail']}
              errorMessages={['incorrect error']}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={disabled}>
              Registration
            </Button>
            <Grid container>
              <Grid item xs>
                <NavLink to="/">Sign In</NavLink>
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
    // formUserData: state.regData,
    // appData: state.appData,
    regData: state.registration,
    msg: state.notification,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    registrationAction: (data: IRegistration) => {
      dispatch(registrationAction(data));
    },
    onChangeFieldReg: (name: string, value: string) => {
      dispatch(onChangeFieldRegistration(name, value));
    },
    emptyField: () => {
      dispatch(emptyField());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
