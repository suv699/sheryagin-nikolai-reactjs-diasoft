import {createAction} from 'typesafe-actions';

export enum actionTypes {
  SIGNIN = '@auth/SIGNIN',
  LOGOUT = '@auth/LOGOUT',
  ONCHAGEFIELDAUTH = '@auth/ONCHAGEAUTHFIELD',
  DISABLEDLOGIN = '@auth/DISABLEDLOGIN',
}

export const login = createAction(actionTypes.SIGNIN)();
export const logout = createAction(actionTypes.LOGOUT)();
export const onChangeFieldAuth = createAction(actionTypes.ONCHAGEFIELDAUTH, (field: string, value: string) => ({
  field,
  value,
}))();
export const disabledFieldAuth = createAction(actionTypes.DISABLEDLOGIN, (disabled: boolean) => ({disabled}))();
