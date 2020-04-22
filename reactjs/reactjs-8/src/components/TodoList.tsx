import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import Paper from '@material-ui/core/Paper'
import { Typography } from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

interface ITodo {
	title?: String;
	id?: number;
	checked?: boolean;
}

type IProps = {
	todo?: ITodo[],
	toggleChecked?(id: number): any,
	toggleDelete?(id: number): any
}

export default function TodoList(props: IProps) {

  const handleToggleCheck = (id: any) => () => {
		props.toggleChecked!(id)
	};

	const handleToggleDelete = (id: any) => () => {
		props.toggleDelete!(id)
	};
	
	const todos: ITodo[] = props.todo!
  const customList = (items: ITodo[]) => (
    <Paper>
      <List dense component="div" role="list">
        {items.map((value: ITodo) => {
          const labelId = `transfer-list-item-${value}-label`;
					const classes = value.checked ? 'completed' : ''
          return (
            <ListItem key={value.id} role="listitem" button className={classes}>
              <ListItemIcon>
                <Checkbox
                  checked={value.checked}
                  tabIndex={-1}
                  disableRipple
									inputProps={{ 'aria-labelledby': labelId }}
									onClick={handleToggleCheck(value.id)}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value.title!} />
							<ListItemIcon>
								<DeleteForeverIcon onClick={handleToggleDelete(value.id)}/>
              </ListItemIcon>
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
	);
	if (!todos.length) {
		return (
			<Typography  color="textSecondary">
				Записей нет
			</Typography>
		)
	}
	return (<>{customList(todos)}</>)

}
