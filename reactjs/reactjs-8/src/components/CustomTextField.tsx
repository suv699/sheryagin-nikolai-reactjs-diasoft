import React from 'react'
import { TextField } from '@material-ui/core'

export const CustomTextField = ({variant = 'outlined', margin = 'normal', ...rest}: any) => {
	return (
		<TextField 
			variant={variant}
			margin={margin}
			{...rest}/>
	)
}