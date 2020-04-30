import {Dispatch} from 'redux';
import {ActionTypes} from '../models/types';
import {INotification} from '../models/intefeces';

export const showNotification = ({text, mode}: INotification) => {
  return {
    type: ActionTypes.NOTIFICATION,
    payload: {text, mode, show: true},
  };
};

export const hideNotification = () => {
  return {
    type: ActionTypes.NOTIFICATION,
    payload: {text: '', mode: '', show: false},
  };
};

export const emptyField = () => {
  return async (dispatch: Dispatch) => {
    const msg: INotification = {
      text: 'Заполните все обязательные поля!',
      mode: 'error',
      show: true,
    };
    dispatch(showNotification(msg)) &&
      setTimeout(() => {
        dispatch(hideNotification());
      }, 3000);
  };
};
