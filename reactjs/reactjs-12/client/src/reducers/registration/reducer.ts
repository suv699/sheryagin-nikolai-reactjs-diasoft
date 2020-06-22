import {createReducer} from 'typesafe-actions';
import {onChangeFieldReg, disabledFieldReg, registration} from './action';
import {IRegistration} from '../../models/interfeces';

export const initialState = {
  nameRegistr: '',
  lastNameRegistr: '',
  loginRegistr: '',
  passwordRegistr: '',
  emailRegistr: '',
  disabled: false,
};
interface IAction {
  type: string;
  payload?: object;
}

export const registrationReducer = createReducer<IRegistration, IAction>(initialState)
  .handleAction([registration], (state) => ({
    ...state,
    nameRegistr: '',
    lastNameRegistr: '',
    loginRegistr: '',
    passwordRegistr: '',
    emailRegistr: '',
  }))
  .handleAction([onChangeFieldReg], (state, {payload: {field, value}}) => ({...state, [field]: value}))
  .handleAction([disabledFieldReg], (state, {payload: {disabled}}) => ({...state, disabled}));
