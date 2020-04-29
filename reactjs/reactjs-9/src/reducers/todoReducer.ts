import {ITodo} from '../models/intefeces';
import {ActionTypes} from '../models/types';

const initialState = {
  todos: JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[],
};

export const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.TODOADD:
      return {
        todos: [...state.todos, {...action.payload}],
      };
    case ActionTypes.TODODELETE:
      return {
        todos: state.todos.filter((todo: ITodo) => {
          return todo.id !== action.payload;
        }),
      };
    case ActionTypes.TODOMARKED:
      return {
        todos: state.todos.map((todo: ITodo) => {
          return todo.id !== action.payload ? todo : {...todo, checked: !todo.checked};
        }),
      };

    default:
      return state;
  }
};

const initialStateForm = {value: ''};
export const todoFormReducer = (state = initialStateForm, action: any) => {
  switch (action.type) {
    case ActionTypes.TODOCHANGEFIELD:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};
