import {registrationReducer} from './reducer';
import {initialState} from './reducer';
import {actionTypes, registration, disabledFieldReg, onChangeFieldReg} from './action';

describe('reducers and action', () => {
  it('initial state', () => {
    const state = registrationReducer(undefined, {type: 'default'});
    expect(state).toEqual({...initialState});
  });

  it('action REGISTRATION', () => {
    const act = {
      type: actionTypes.REGISTRATION,
    };

    expect(registration()).toEqual(act);
  });

  it('reducers REGISTRATION', () => {
    const act = {
      ...initialState,
      nameRegistr: '',
      lastNameRegistr: '',
      loginRegistr: '',
      passwordRegistr: '',
      emailRegistr: '',
    };
    const state = registrationReducer(initialState, registration());

    expect(state).toEqual(act);
  });

  it('action DISABLEDREGISTRATION', () => {
    const disabled = true;
    const act = {
      type: actionTypes.DISABLEDREGISTRATION,
      payload: {disabled},
    };

    expect(disabledFieldReg(disabled)).toEqual(act);
  });

  it('reducers DISABLEDREGISTRATION', () => {
    const disabled = true;
    const act = {
      ...initialState,
      disabled,
    };
    const state = registrationReducer(initialState, disabledFieldReg(disabled));

    expect(state).toEqual(act);
  });

  it('action ONCHAGEFIELDAUTH', () => {
    const field = 'login';
    const value = 'admin';
    const act = {
      type: actionTypes.ONCHAGEFIELDREGISTRATION,
      payload: {field, value},
    };

    expect(onChangeFieldReg(field, value)).toEqual(act);
  });

  it('reducers ONCHAGEFIELDAUTH', () => {
    const field = 'login';
    const value = 'admin';
    const act = {
      ...initialState,
      [field]: value,
    };
    const state = registrationReducer(initialState, onChangeFieldReg(field, value));

    expect(state).toEqual(act);
  });
});
