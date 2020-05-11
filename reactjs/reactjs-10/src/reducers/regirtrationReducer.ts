import {ActionTypes} from '../models/types';

const initialState = {
  nameRegistr: '',
  lastNameRegistr: '',
  loginRegistr: '',
  passwordRegistr: '',
  emailRegistr: '',
  disabledRegistration: false,
};

export const registrationReducer = (state = initialState, action: any) => {
  switch (action.type) {
    //просто чистим поля на форме, типа зарегали и все ок
    case ActionTypes.REGISTRATION:
      return {
        ...state,
        nameRegistr: '',
        lastNameRegistr: '',
        loginRegistr: '',
        passwordRegistr: '',
        emailRegistr: '',
      };
    case ActionTypes.ONCHAGEREGISTRATIONFIELD:
      return {
        ...state,
        [action.field]: action.value,
      };
    case ActionTypes.DISABLEDREGISTRATION:
      return {
        ...state,
        disabledRegistration: true,
      };
    case ActionTypes.ENABLEDREGISTRATION:
      return {
        ...state,
        disabledRegistration: false,
      };
    //просто чистим поля на форме, типа зарегали и все ок

    default:
      return state;
  }
};
