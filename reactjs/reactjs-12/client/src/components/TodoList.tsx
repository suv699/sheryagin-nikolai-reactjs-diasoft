import React, {FC} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import {Typography} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {ITodo} from '../models/interfeces';
import {Link} from 'react-router-dom';

interface IHandlers {
  toggleChecked(id: number): void;
  toggleDelete(id: number): void;
}
type IProps = {
  todo: ITodo[];
};

export const TodoList: FC<IProps & IHandlers> = ({todo, toggleChecked, toggleDelete}) => {
  const handleToggleCheck = (id: number) => () => {
    toggleChecked(id);
  };
  const handleToggleDelete = (id: number) => () => {
    toggleDelete(id);
  };
  if (!todo.length) {
    return <Typography color="textSecondary">Записей нет</Typography>;
  }
  return (
    <>
      <Paper>
        <List dense component="div" role="list" className="todo-view">
          {todo.map(({checked, id, title}) => {
            const labelId = `transfer-list-item-${id}-label`;
            const classes = checked ? 'completed' : '';
            return (
              <ListItem key={id} role="listitem" button className={classes}>
                <ListItemIcon>
                  <Checkbox
                    checked={checked}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{'aria-labelledby': labelId}}
                    onClick={handleToggleCheck(id)}
                  />
                </ListItemIcon>

                <Link to={`/todo/${id}`} key={id} style={{flex: '1 1 auto'}}>
                  <ListItemText id={labelId} primary={title} />
                </Link>

                <ListItemIcon>
                  <DeleteForeverIcon onClick={handleToggleDelete(id)} />
                </ListItemIcon>
              </ListItem>
            );
          })}
          <ListItem />
        </List>
      </Paper>
    </>
  );
};
