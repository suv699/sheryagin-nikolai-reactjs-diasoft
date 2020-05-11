import {ActionTypes} from '../models/types';

const initialState = {
  text: '',
  mode: '',
  show: false,
};

export const notificationReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.NOTIFICATION:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
