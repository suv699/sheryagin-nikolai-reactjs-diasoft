import {combineReducers} from 'redux';
import {authReducer} from '../reducers/authentication/reducer';
import {notificationReducer} from './notification/reducer';
import {registrationReducer} from './registration/reducer';
import {todoReducer} from './todo/reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  registration: registrationReducer,
  notification: notificationReducer,
  todos: todoReducer,
});

export type TRootStore = ReturnType<typeof rootReducer>;
