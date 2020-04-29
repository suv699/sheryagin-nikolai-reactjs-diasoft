import {combineReducers} from 'redux';
import {authReducer} from './authReducer';
import {notificationReducer} from './notificationReducer';
import {registrationReducer} from './regirtrationReducer';
import {todoReducer, todoFormReducer} from './todoReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  registration: registrationReducer,
  notification: notificationReducer,
  todos: todoReducer,
  todoField: todoFormReducer,
});
