import React, { Component } from 'react'
import { Container, Button } from '@material-ui/core'
import { CustomTextField } from './CustomTextField'
import TodoList from './TodoList'

interface ITodo {
	title?: String;
	id?: number;
	checked?: boolean;
}
type IProps = {
	
}

interface IState {
	todos?: ITodo[];
	title?: String;
}

export class Todo extends Component<IProps, IState> {
	constructor(props: IProps, state: IState) {
		super(props)
			this.state = {
				todos: this.checkLocalStorage(),
				title: ''
			};
	}
	public checkLocalStorage = (): ITodo[] => {
		const newTodos = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
		return newTodos
	}

	public componentDidUpdate() {
		localStorage.setItem('todos', JSON.stringify(this.state.todos))
	}

	public handleToggleDelete = (id: number) => {
		const newTodos = this.state.todos!.filter((it)=>it.id !== id)
		this.setState({todos: newTodos})
	}
	public handleToggleChecked = (id: number) => {
		const newTodos = this.state.todos!.map((item) => {
			if(item.id === id) {
				item.checked = !item.checked
			}
			return item
		})

		this.setState({todos: newTodos})
	}

	public handleToggle = () => {
		this.state.title && this.setState(prev => (
			{todos: [{
				id: new Date().getTime() + 1,
				title: this.state.title,
				checked: false
			}, ...prev.todos!], title:''}
		))
	}

	public handleOnChangeTitle: any = ({target: { value: title }}: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({title})
	}
	
	render() {
		return (
			<div className='todo-container'>
				<main className='todo-content'>
					<Container maxWidth="lg" className='todo-box'>
						<CustomTextField
							fullWidth
							id="title"
							label="title"
							name="totitledo"
							value={this.state.title}
							onChange={this.handleOnChangeTitle}
							autoComplete="title"
							autoFocus
						/>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							onClick={this.handleToggle}
						>
							Add Todo
						</Button>
	
						<hr />
						<TodoList todo={this.state.todos!} toggleChecked={this.handleToggleChecked} toggleDelete={this.handleToggleDelete}/>
	
					</Container>
				</main>
			</div>
		)
	}
}