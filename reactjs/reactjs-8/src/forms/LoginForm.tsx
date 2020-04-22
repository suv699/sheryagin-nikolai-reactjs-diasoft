import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { CustomTextField } from '../components/CustomTextField'

interface IProps {
	onHandleLogin?: any;
}

interface IState {
	login: String;
	password: String;
	isErrorLogin: boolean;
	isErrorPassword: boolean;
}


export default class LoginForm extends Component<IProps, IState> {
	constructor(props: IProps, state: IState) {
		super(props)
			this.state = {
				login: '',
				password: '',
				isErrorLogin: false,
				isErrorPassword: false
			};
	}

	public handlerLogin: any = (event: any) => {
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

	public render() {
		return (
			<Container component="main" maxWidth="xs">
				<div className='login-container'>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<form className='login-form' noValidate onSubmit={this.handlerLogin}>
						<CustomTextField
							error={this.state.isErrorLogin}
							required
							fullWidth
							id="login"
							label="Login"
							name="login"
							autoComplete="login"
							onChange={this.onChangeLogin}
							autoFocus
						/>
						<CustomTextField
							error={this.state.isErrorPassword}
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							onChange={this.onChangePassword}
						/>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
						>
							Sign In
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<NavLink to="/registration">
									Registration
								</NavLink>
							</Grid>
						</Grid>
					</form>
				</div>
			</Container>
		);
	}  
}
