import React, {ChangeEvent, FC, useEffect} from 'react';
import {connect} from 'react-redux';
import {TodoList} from '../components/TodoList';
import {Container, Button, TextField} from '@material-ui/core';
import {addTodo, deleteTodo, markedTodo, onChangeTodoField} from '../actions/todoActions';
import {ITodo} from '../models/intefeces';

interface IProps {
  addTodo: (newItem: ITodo) => void;
  deleteTodo: (id: number) => void;
  markedTodo: (id: number) => void;
  onChange: (value: string) => void;
  fieldValue: string;
  todos: ITodo[];
}
const Todo: FC<IProps> = ({addTodo, deleteTodo, markedTodo, onChange, fieldValue, todos}: IProps) => {
  const handleOnChangeTitle = ({target: {value: title}}: ChangeEvent<HTMLInputElement>) => {
    onChange(title);
  };
  const add = () => {
    fieldValue &&
      addTodo({
        title: fieldValue,
        id: new Date().getTime() + 1,
        checked: false,
      });
    onChange('');
  };
  const handleToggleChecked = (id: number) => {
    markedTodo(id);
  };
  const handleToggleDelete = (id: number) => {
    deleteTodo(id);
  };

  //обновляем в localStorage как только todos меняется
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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
          <TodoList toggleChecked={handleToggleChecked} toggleDelete={handleToggleDelete}>
            {todos}
          </TodoList>
        </Container>
      </main>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    todos: state.todos.todos,
    fieldValue: state.todoField.value,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addTodo: (newItem: ITodo) => {
      dispatch(addTodo(newItem));
    },
    deleteTodo: (id: number) => {
      dispatch(deleteTodo(id));
    },
    markedTodo: (id: number) => {
      dispatch(markedTodo(id));
    },
    onChange: (value: string) => {
      dispatch(onChangeTodoField(value));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
