import {createAction} from 'typesafe-actions';

export enum actionTypes {
  REGISTRATION = '@auth/REGISTRATION',
  ONCHAGEFIELDREGISTRATION = '@auth/ONCHAGEREGISTRATIONFIELD',
  DISABLEDREGISTRATION = '@auth/DISABLEDREGISTRATION',
}

export const registration = createAction(actionTypes.REGISTRATION)();
export const onChangeFieldReg = createAction(actionTypes.ONCHAGEFIELDREGISTRATION, (field: string, value: string) => ({
  field,
  value,
}))();
export const disabledFieldReg = createAction(actionTypes.DISABLEDREGISTRATION, (disabled: boolean) => ({disabled}))();
