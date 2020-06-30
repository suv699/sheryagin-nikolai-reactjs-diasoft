import {notificationReducer} from './reducer';
import {initialState} from './reducer';
import {actionTypes, notification, hideNotification} from './action';
import {INotification} from '../../models/interfeces';

describe('reducers and action', () => {
  it('initial state', () => {
    const state = notificationReducer(undefined, {type: 'default'});
    expect(state).toEqual({...initialState});
  });

  it('action NOTIFICATION', () => {
    const payload: INotification = {
      mode: 'info',
      show: true,
      text: 'hello notify',
    };
    const act = {
      type: actionTypes.NOTIFICATION,
      payload,
    };

    expect(notification(payload)).toEqual(act);
  });

  it('reducers NOTIFICATION', () => {
    const payload: INotification = {
      mode: 'info',
      show: true,
      text: 'hello notify',
    };
    const state = notificationReducer(initialState, notification(payload));
    const act = {
      ...initialState,
      ...payload,
    };
    expect(state).toEqual(act);
  });

  it('action HIDE_NOTIFICATION', () => {
    const act = {
      type: actionTypes.HIDE_NOTIFICATION,
    };

    expect(hideNotification()).toEqual(act);
  });

  it('reducers HIDE_NOTIFICATION', () => {
    const state = notificationReducer(initialState, hideNotification());
    const act = {
      ...initialState,
      show: false,
    };
    expect(state).toEqual(act);
  });
});
