import {ActionTypes} from '../models/types';

const checkLocalStorage = () => {
  const d = JSON.parse(localStorage.getItem('userData') as string);
  return d && !!d.login;
};
const initialState = {
  login: '',
  password: '',
  disabledLoginForm: false,
  isAuthenticated: checkLocalStorage(),
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SIGNIN:
      return {
        ...state,
        isAuthenticated: action.isAuthenticated,
        login: '',
        password: '',
      };
    case ActionTypes.LOGOUT:
      return {
        ...state,
        isAuthenticated: action.isAuthenticated,
      };
    case ActionTypes.DISABLEDLOGIN:
      return {
        ...state,
        disabledLoginForm: true,
      };
    case ActionTypes.ENABLEDLOGIN:
      return {
        ...state,
        disabledLoginForm: false,
      };
    case ActionTypes.ONCHAGEAUTHFIELD:
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
};
