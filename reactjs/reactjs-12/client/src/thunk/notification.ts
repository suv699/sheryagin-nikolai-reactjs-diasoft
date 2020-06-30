import {INotification} from '../models/interfeces';
import {hideNotification, notification} from '../reducers/notification/action';

export const emptyField = () => {
  return async (dispatch: any) => {
    const msg: INotification = {
      text: 'Заполните все обязательные поля!',
      mode: 'error',
      show: true,
    };
    dispatch(notification(msg)) &&
      setTimeout(() => {
        dispatch(hideNotification());
      }, 3000);
  };
};
