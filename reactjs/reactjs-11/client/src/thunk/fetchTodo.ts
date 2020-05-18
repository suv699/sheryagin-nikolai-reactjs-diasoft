import {ITodo} from '../models/interfeces';
import {deleteTodo, addTodo, onChangeTodos, markedTodo, selectedTodo} from '../reducers/todo/action';

const headers = {
  'Content-Type': 'application/json',
};
//получить все записи
export const fetchGetTodo = () => {
  return async (dispatch: any) => {
    const response = await fetch('api/todo');
    const json = await response.json();

    dispatch(onChangeTodos(json.data));
  };
};

//добавить запись
export const fetchAddTodo = (newTodo: ITodo) => {
  return async (dispatch: any) => {
    try {
      const response = await fetch('/api/todo', {
        method: 'POST',
        body: JSON.stringify({...newTodo}),
        headers,
      });
      const json = await response.json();
      json.success && dispatch(addTodo(json.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const getSelectTodo = (id: number) => {
  return async (dispatch: any) => {
    const response = await fetch(`/api/todo/${id}`, {
      method: 'POST',
      body: JSON.stringify({id}),
      headers,
    });
    const json = await response.json();
    json.success && dispatch(selectedTodo(json.data));
  };
};

// удалить запись по id
export const fetchDeleteTodo = (id: number) => {
  return async (dispatch: any) => {
    const response = await fetch(`/api/todo/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({id}),
      headers,
    });
    const json = await response.json();
    json.success && dispatch(deleteTodo(json.id));
  };
};
// обновить запись
export const fetchUpdateTodo = (item: ITodo) => {
  return async (dispatch: any) => {
    const {id} = item;
    const response = await fetch(`/api/todo/${id}`, {
      method: 'PUT',
      body: JSON.stringify({...item}),
      headers,
    });

    const json = await response.json();
    json.success && dispatch(markedTodo(json.data.id, json.data));
  };
};
