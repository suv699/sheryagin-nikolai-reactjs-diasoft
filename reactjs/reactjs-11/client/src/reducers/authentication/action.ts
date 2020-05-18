import {createAction} from 'typesafe-actions';

export enum actionTypes {
  SIGNIN = '@auth/SIGNIN',
  LOGOUT = '@auth/LOGOUT',
  ONCHAGEFIELDAUTH = '@auth/ONCHAGEAUTHFIELD',
  DISABLEDLOGIN = '@auth/DISABLEDLOGIN',
}

export const login = createAction(actionTypes.SIGNIN, () => true)();
export const logout = createAction(actionTypes.LOGOUT, () => false)();
export const onChangeFieldAuth = createAction(actionTypes.ONCHAGEFIELDAUTH, (field: string, value: string) => ({
  field,
  value,
}))();
export const disabledFieldAuth = createAction(actionTypes.DISABLEDLOGIN, (disabled: boolean) => ({disabled}))();
