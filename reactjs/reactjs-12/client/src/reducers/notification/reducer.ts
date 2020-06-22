import {createReducer} from 'typesafe-actions';
import {notification, hideNotification} from './action';
import {INotification} from '../../models/interfeces';

export const initialState: INotification = {
  text: '',
  mode: 'info',
  show: false,
};
export interface IAction {
  type: string;
  payload?: object;
}

export const notificationReducer = createReducer<INotification, IAction>(initialState)
  .handleAction([notification], (state, {payload}) => ({
    ...state,
    ...payload,
  }))
  .handleAction([hideNotification], (state) => ({
    ...state,
    show: false,
  }));
