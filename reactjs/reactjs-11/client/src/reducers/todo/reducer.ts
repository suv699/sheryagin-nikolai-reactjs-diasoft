import {onChangeTodoField, deleteTodo, markedTodo, addTodo, onChangeTodos, selectedTodo} from './action';
import {createReducer} from 'typesafe-actions';
import {ITodo} from '../../models/interfeces';

const initialState = {
  todos: [],
  value: '',
  selectedTodo: null,
};
interface IState {
  todos: ITodo[];
  value: string;
}
interface IAction {
  type: string;
  payload?: any;
}

export const todoReducer = createReducer<IState, IAction>(initialState)
  .handleAction([onChangeTodoField], (state, {payload}) => ({
    ...state,
    value: payload,
  }))
  .handleAction([deleteTodo], (state, {payload}) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id + '' !== payload + ''),
  }))
  .handleAction([markedTodo], (state, {payload: {id, updateItem}}) => ({
    ...state,
    todos: state.todos.map((todo) => {
      return todo.id + '' !== id + '' ? todo : {...todo, ...updateItem};
    }),
  }))
  .handleAction([addTodo], (state, {payload}) => ({
    ...state,
    todos: state.todos.concat([payload]),
  }))
  .handleAction([onChangeTodos], (state, {payload}) => ({
    ...state,
    todos: payload,
  }))
  .handleAction([selectedTodo], (state, {payload}) => ({...state, selectedTodo: payload}));
