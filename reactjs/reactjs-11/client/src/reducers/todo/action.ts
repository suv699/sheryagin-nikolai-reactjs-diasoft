import {createAction} from 'typesafe-actions';
import {ITodo} from '../../models/interfeces';

export enum actionTypes {
  TODOADD = '@todo/TODOADD',
  TODOCHANGEFIELD = '@todo/TODOCHANGEFIELD',
  TODOONCHANGE = '@todo/TODOONCHANGE',
  TODOMARKED = '@todo/TODOMARKED',
  TODODELETE = '@todo/TODODELETE',
  TODOUPDATE = '@todo/TODOUPDATE',
  TODOSELECTED = '@todo/TODOSELECTED',
}
export const addTodo = createAction(actionTypes.TODOADD, (newItem: ITodo) => newItem)();
export const deleteTodo = createAction(actionTypes.TODODELETE, (id: number) => id)();
export const onChangeTodoField = createAction(actionTypes.TODOCHANGEFIELD, (value: string) => value)();
export const onChangeTodos = createAction(actionTypes.TODOONCHANGE, (todos: ITodo[]) => todos)();
export const markedTodo = createAction(actionTypes.TODOMARKED, (id: number, updateItem: ITodo) => ({id, updateItem}))();
export const selectedTodo = createAction(actionTypes.TODOSELECTED, (id: number) => id)();
