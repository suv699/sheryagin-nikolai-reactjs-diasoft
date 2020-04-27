import React, {ChangeEvent, FC, useState, useEffect} from 'react'
import {Container, Button, TextField} from '@material-ui/core'
import {TodoList} from './TodoList'

interface ITodo {
  title: string
  id: number
  checked: boolean
}

interface IState {
  todos: ITodo[]
  title?: String
}

export const Todo: FC = () => {
  const [title, setTitle] = useState('')
  const [todos, setTodos] = useState<ITodo[]>([])

  const handleOnChangeTitle = ({target: {value: title}}: ChangeEvent<HTMLInputElement>) => {
    setTitle(title)
  }
  const addTodo = () => {
    title &&
      setTodos((prev) => [
        {
          title: title,
          id: new Date().getTime() + 1,
          checked: false,
        },
        ...prev,
      ])

    setTitle('')
  }
  const handleToggleChecked = (id: number) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          item.checked = !item.checked
        }
        return item
      }),
    )
  }
  const handleToggleDelete = (id: number) => {
    setTodos(todos.filter((it) => it.id !== id))
  }
  //при заходе на форму проверяем localStorage
  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[])
  }, [])

  //обновляем в localStorage как только todos меняется
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

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
            name="totitledo"
            value={title}
            onChange={handleOnChangeTitle}
            autoComplete="title"
            autoFocus
          />
          <Button type="submit" variant="contained" color="primary" onClick={addTodo}>
            Add Todo
          </Button>

          <hr />
          <TodoList todo={todos} toggleChecked={handleToggleChecked} toggleDelete={handleToggleDelete} />
        </Container>
      </main>
    </div>
  )
}
