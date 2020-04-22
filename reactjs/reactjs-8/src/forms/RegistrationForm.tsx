import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from "@material-ui/core/Grid"
import { CustomTextField } from '../components/CustomTextField'


interface IProps {
	onHandleLogin?: any
}

interface IState {
	login?: String;
	password?: String;
	email?: String;
	isErrorLogin?: boolean;
	isErrorPassword?: boolean;
	isErrorEmail?: boolean;
}

export default class RegistrationForm extends Component<IProps, IState> {
	constructor(props: IProps, state: IState) {
		super(props)
			this.state = {
				login: '',
				password: '',
				isErrorLogin: false,
				isErrorPassword: false,
				isErrorEmail: false
			};
	}
	public handlerRegistration: any = (event: any) => {
		event.preventDefault()
		if (!this.state.login || !this.state.password) {
			this.showErrorField()
			return
		}
		this.props.onHandleLogin(true)
	}

	public showErrorField: any = () => {
		this.setState({isErrorPassword: !!!this.state.password, isErrorLogin: !!!this.state.login})
	}

	public onChangeLogin: any = ({target: { value: login }}: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({login})
		this.state.isErrorLogin && setTimeout(()=>{this.showErrorField()}, 0) 	
	}
	
	public onChangePassword: any = ({target: { value: password }}: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({password})
		this.state.isErrorPassword && setTimeout(()=>{this.showErrorField()}, 0) 	
	}

	public onChangeEmail: any = ({target: { value: email }}: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({email})
		this.state.isErrorEmail && setTimeout(()=>{this.showErrorField()}, 0) 	
	}
	
  render() {
		return (
			<Container component="main" maxWidth="xs">
				<div className='login-container'>
					<Typography component="h1" variant="h5">
						Registration
					</Typography>
					<form className='login-form' noValidate onSubmit={this.handlerRegistration}>
						<CustomTextField
							error={this.state.isErrorLogin}
							onChange={this.onChangeLogin}
							required
							fullWidth
							id="login"
							label="Login"
							name="login"
							autoComplete="login"
							autoFocus
						/>
						<CustomTextField
							error={this.state.isErrorPassword}
							onChange={this.onChangePassword}
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
						/>
						<CustomTextField
							error={this.state.isErrorEmail}
							onChange={this.onChangeEmail}
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
						>
							Registration
						</Button>
						<Grid container>
							<Grid item xs>
								<NavLink to="/">
									Sign In
								</NavLink>
							</Grid>
						</Grid>
					</form>
				</div>
			</Container>
		);
	}
}
