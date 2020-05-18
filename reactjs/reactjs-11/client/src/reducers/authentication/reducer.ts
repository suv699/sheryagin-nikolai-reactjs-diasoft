import {createReducer} from 'typesafe-actions';
import {logout, login, onChangeFieldAuth, disabledFieldAuth} from './action';
import {ILogin} from '../../models/interfeces';

const checkLocalStorage = () => {
  const d = JSON.parse(localStorage.getItem('userData') as string);
  return d && !!d.userId;
};

const initialState = {
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
  .handleAction([login], (state, {payload}) => ({
    ...state,
    isAuthenticated: payload,
  }))
  .handleAction([logout], (state, {payload}) => ({
    ...state,
    ...initialState,
    isAuthenticated: payload,
  }))
  .handleAction([onChangeFieldAuth], (state, {payload: {field, value}}) => ({...state, [field]: value}))
  .handleAction([disabledFieldAuth], (state, {payload: {disabled}}) => ({...state, disabled}));
