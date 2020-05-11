import {ActionTypes} from '../models/types';
import {ILogin, IRegistration} from '../models/intefeces';

export const Logout = () => {
  localStorage.clear();
  return {
    type: ActionTypes.LOGOUT,
    isAuthenticated: false,
  };
};
export const onChangeFieldAuth = (name: string, value: string) => {
  return {
    type: ActionTypes.ONCHAGEAUTHFIELD,
    field: name,
    value,
  };
};
export const onChangeFieldRegistration = (name: string, value: string) => {
  return {
    type: ActionTypes.ONCHAGEREGISTRATIONFIELD,
    field: name,
    value,
  };
};

export const disabledLoginFormField = () => {
  return {
    type: ActionTypes.DISABLEDLOGIN,
  };
};

export const enabledLoginFormField = () => {
  return {
    type: ActionTypes.ENABLEDLOGIN,
  };
};

export const disabledRegistrationFormField = () => {
  return {
    type: ActionTypes.DISABLEDREGISTRATION,
  };
};

export const enabledRegistrationFormField = () => {
  return {
    type: ActionTypes.ENABLEDREGISTRATION,
  };
};

const Login = ({login}: ILogin) => {
  localStorage.setItem(
    'userData',
    JSON.stringify({
      login: login,
    }),
  );
  return {
    type: ActionTypes.SIGNIN,
    isAuthenticated: true,
  };
};
//заготовка к связке с использованием запросов на сервер
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
export const authAction = (data: ILogin) => {
  return async (dispatch: any) => {
    try {
      dispatch(disabledLoginFormField());
      //fetch
      await delay(1000);
      //если все ок - логинимся
      dispatch(Login(data));
      dispatch(enabledLoginFormField());
    } catch (e) {
      dispatch(enabledLoginFormField());
      console.log('request error - ', e.message);
    }
  };
};
//заготовка к связке с использованием запросов на сервер
const Registration = () => {
  return {
    type: ActionTypes.REGISTRATION,
  };
};
export const registrationAction = (data: IRegistration) => {
  return async (dispatch: any) => {
    try {
      dispatch(disabledRegistrationFormField());
      //fetch
      await delay(1000);
      dispatch(Registration());
      dispatch(enabledRegistrationFormField());
    } catch (e) {
      dispatch(enabledRegistrationFormField());
      console.log('Error auth');
    }
  };
};
