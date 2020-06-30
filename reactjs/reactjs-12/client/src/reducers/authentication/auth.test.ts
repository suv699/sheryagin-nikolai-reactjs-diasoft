import {authReducer} from './reducer';
import {initialState} from './reducer';
import {actionTypes, login, logout, disabledFieldAuth, onChangeFieldAuth} from './action';

describe('reducers and action', () => {
  it('initial state', () => {
    const state = authReducer(undefined, {type: 'default'});
    expect(state).toEqual({...initialState});
  });

  it('action SIGNIN', () => {
    const act = {
      type: actionTypes.SIGNIN,
    };

    expect(login()).toEqual(act);
  });

  it('reducers SIGNIN', () => {
    const state = authReducer(initialState, login());
    const act = {
      ...initialState,
      isAuthenticated: true,
    };

    expect(state).toEqual(act);
  });

  it('action LOGOUT', () => {
    const act = {
      type: actionTypes.LOGOUT,
    };

    expect(logout()).toEqual(act);
  });

  it('reducers LOGOUT', () => {
    const state = authReducer(initialState, logout());
    const act = {
      ...initialState,
      isAuthenticated: false,
    };

    expect(state).toEqual(act);
  });

  it('action DISABLEDLOGIN', () => {
    const disabled = true;
    const act = {
      type: actionTypes.DISABLEDLOGIN,
      payload: {disabled},
    };

    expect(disabledFieldAuth(disabled)).toEqual(act);
  });

  it('reducers DISABLEDLOGIN', () => {
    const disabled = false;
    const state = authReducer(initialState, disabledFieldAuth(disabled));
    const act = {
      ...initialState,
      disabled,
    };

    expect(state).toEqual(act);
  });

  it('action ONCHAGEFIELDAUTH', () => {
    const field = 'login';
    const value = 'admin';
    const act = {
      type: actionTypes.ONCHAGEFIELDAUTH,
      payload: {field, value},
    };

    expect(onChangeFieldAuth(field, value)).toEqual(act);
  });

  it('reducers ONCHAGEFIELDAUTH', () => {
    const field = 'login';
    const value = 'admin';
    const state = authReducer(initialState, onChangeFieldAuth(field, value));
    const act = {
      ...initialState,
      [field]: value,
    };

    expect(state).toEqual(act);
  });
});
