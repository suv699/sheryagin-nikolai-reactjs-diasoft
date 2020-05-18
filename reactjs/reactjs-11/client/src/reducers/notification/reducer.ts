import {createReducer} from 'typesafe-actions';
import {notification, hideNotification} from './action';
import {INotification} from '../../models/interfeces';

const initialState: INotification = {
  text: '',
  mode: 'info',
  show: false,
};
interface IAction {
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
