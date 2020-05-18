import {ILogin, INotification, IRegistration} from '../models/interfeces';
import {disabledFieldAuth, login, logout} from '../reducers/authentication/action';
import {notification, hideNotification} from '../reducers/notification/action';
import {disabledFieldReg, registration} from '../reducers/registration/action';

const headers = {
  'Content-Type': 'application/json',
};

export const authAction = (data: ILogin) => {
  return async (dispatch: any) => {
    try {
      dispatch(disabledFieldAuth(true));
      //fetch
      // await delay(1000);
      const body = JSON.stringify(data);
      const response = await fetch('/api/auth', {
        method: 'POST',
        body,
        headers,
      });
      const json = await response.json();
      const msgData: INotification = {
        text: json.message,
        mode: response.status !== 200 ? 'error' : 'success',
        show: true,
      };
      if (!json.userId) {
        dispatch(notification(msgData)) &&
          setTimeout(() => {
            dispatch(hideNotification());
          }, 3000);
      } else {
        localStorage.setItem(
          'userData',
          JSON.stringify({
            userId: json.userId,
          }),
        );

        dispatch(login());
      }
      dispatch(disabledFieldAuth(false));
    } catch (e) {
      dispatch(disabledFieldAuth(false));
      console.log('request error - ', e.message);
    }
  };
};
//заготовка к связке с использованием запросов на сервер
export const registrationAction = (data: IRegistration) => {
  return async (dispatch: any) => {
    try {
      dispatch(disabledFieldReg(true));
      //fetch
      // await delay(1000);
      const {
        nameRegistr: name,
        lastNameRegistr: lastName,
        loginRegistr: login,
        passwordRegistr: password,
        emailRegistr: email,
      } = data;
      const response = await fetch('/api/registration', {
        method: 'POST',
        body: JSON.stringify({
          name,
          lastName,
          login,
          password,
          email,
        }),
        headers,
      });
      const json = await response.json();
      const msgData: INotification = {
        text: json.message,
        mode: response.status !== 201 ? 'error' : 'success',
        show: true,
      };
      dispatch(notification(msgData)) &&
        setTimeout(() => {
          dispatch(hideNotification());
        }, 3000);
      //если ок, то чистим форму
      response.status === 201 && dispatch(registration());
      dispatch(disabledFieldReg(false));
    } catch (e) {
      dispatch(disabledFieldReg(false));
      console.log('Error auth');
    }
  };
};

export const logoutAction = () => {
  return (dispatch: any) => {
    localStorage.clear();
    dispatch(logout());
  };
};
