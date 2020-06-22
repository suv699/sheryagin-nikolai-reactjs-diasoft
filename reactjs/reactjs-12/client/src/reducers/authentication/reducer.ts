import {createReducer} from 'typesafe-actions';
import {logout, login, onChangeFieldAuth, disabledFieldAuth} from './action';
import {ILogin} from '../../models/interfeces';

const checkLocalStorage = () => {
  const d = JSON.parse(localStorage.getItem('userData') as string);
  return d && !!d.userId;
};

export const initialState = {
  login: '',
  password: '',
  disabled: false,
  isAuthenticated: checkLocalStorage(),
};

interface IAction {
  type: string;
  payload?: any;
}

export const authReducer = createReducer<ILogin, IAction>(initialState)
  .handleAction([login], (state) => ({
    ...state,
    isAuthenticated: true,
  }))
  .handleAction([logout], (state) => ({
    ...state,
    ...initialState,
    isAuthenticated: false,
  }))
  .handleAction([onChangeFieldAuth], (state, {payload: {field, value}}) => ({...state, [field]: value}))
  .handleAction([disabledFieldAuth], (state, {payload: {disabled}}) => ({...state, disabled}));
