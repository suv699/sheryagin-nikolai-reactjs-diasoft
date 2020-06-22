import {createAction} from 'typesafe-actions';
import {INotification} from '../../models/interfeces';

export enum actionTypes {
  NOTIFICATION = '@app/NOTIFICATION',
  HIDE_NOTIFICATION = '@app/HIDE_NOTIFICATION',
}

export const notification = createAction(actionTypes.NOTIFICATION, ({text, mode, show}: INotification) => ({
  text,
  mode,
  show,
}))();
export const hideNotification = createAction(actionTypes.HIDE_NOTIFICATION)();
