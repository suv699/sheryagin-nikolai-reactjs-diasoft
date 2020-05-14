import React, {ChangeEvent, FC, useEffect} from 'react';
import {connect} from 'react-redux';
import {TodoList} from '../components/TodoList';
import {Container, Button, TextField} from '@material-ui/core';
import {onChangeTodoField} from '../reducers/todo/action';
import {ITodo} from '../models/interfeces';
import {fetchAddTodo, fetchDeleteTodo, fetchGetTodo, fetchUpdateTodo} from '../thunk/fetchTodo';

interface IHandlers {
  addTodo: (newItem: ITodo) => void;
  deleteTodo: (id: number) => void;
  markedTodo: (item: ITodo) => void;
  onChange: (value: string) => void;
  getTodos: () => void;
}
interface IProps {
  fieldValue: string;
  todos: ITodo[];
}
const Todo: FC<IProps & IHandlers> = ({getTodos, addTodo, deleteTodo, markedTodo, onChange, fieldValue, todos}) => {
  const handleOnChangeTitle = ({target: {value: title}}: ChangeEvent<HTMLInputElement>) => {
    onChange(title);
  };
  const add = () => {
    fieldValue &&
      addTodo({
        title: fieldValue,
        id: new Date().getTime() + 1, // лучше генерить на сервере, переделать !?
        checked: false,
      });
    onChange('');
  };
  const handleToggleChecked = (id: number) => {
    const updateItem = todos.filter((item) => {
      return item.id + '' === id + '';
    });
    markedTodo({
      ...updateItem[0],
      checked: !updateItem[0].checked,
    });
  };
  const handleToggleDelete = (id: number) => {
    deleteTodo(id);
  };

  useEffect(() => {
    console.log('useEffect');
    getTodos();
  }, []);

  return (
    <div className="todo-container">
      <main className="todo-content">
        <Container maxWidth="lg" className="todo-box">
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="title"
            label="title"
            name="title"
            value={fieldValue}
            onChange={handleOnChangeTitle}
            autoComplete="title"
            autoFocus
          />
          <Button type="submit" variant="contained" color="primary" onClick={add}>
            Add Todo
          </Button>

          <hr />
          <TodoList todo={todos} toggleChecked={handleToggleChecked} toggleDelete={handleToggleDelete} />
        </Container>
      </main>
    </div>
  );
};

export default connect(
  (state: any) => ({
    todos: state.todos.todos,
    fieldValue: state.todos.value,
  }),
  (dispatch: any) => {
    return {
      getTodos: () => {
        dispatch(fetchGetTodo());
      },
      addTodo: (newItem: ITodo) => {
        dispatch(fetchAddTodo(newItem));
      },
      deleteTodo: (id: number) => {
        dispatch(fetchDeleteTodo(id));
      },
      markedTodo: (item: ITodo) => {
        dispatch(fetchUpdateTodo(item));
      },
      onChange: (value: string) => {
        dispatch(onChangeTodoField(value));
      },
    };
  },
)(Todo);
