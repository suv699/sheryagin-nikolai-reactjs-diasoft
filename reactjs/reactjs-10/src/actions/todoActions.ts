import {ActionTypes} from '../models/types';
import {ITodo} from '../models/intefeces';

export const onChangeTodoField = (value: string) => {
  return {
    type: ActionTypes.TODOCHANGEFIELD,
    payload: value,
  };
};

export const addTodo = (newTodo: ITodo) => {
  return {
    type: ActionTypes.TODOADD,
    payload: {...newTodo},
  };
};

export const deleteTodo = (id: number) => {
  return {
    type: ActionTypes.TODODELETE,
    payload: id,
  };
};

export const markedTodo = (id: number) => {
  return {
    type: ActionTypes.TODOMARKED,
    payload: id,
  };
};
