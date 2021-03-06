import React, {FC} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import {Typography} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {ITodo} from '../models/intefeces';
import {Link} from 'react-router-dom';

type IProps = {
  todo: ITodo[];
  toggleChecked(id: number): void;
  toggleDelete(id: number): void;
};

export const TodoList: FC<IProps> = ({todo, toggleChecked, toggleDelete}: IProps) => {
  const handleToggleCheck = (id: number) => () => {
    toggleChecked(id);
  };
  const handleToggleDelete = (id: number) => () => {
    toggleDelete(id);
  };
  const customList = (items: ITodo[]) => (
    <Paper>
      <List dense component="div" role="list" className="todo-view">
        {items.map(({checked, id, title}) => {
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
  );
  if (!todo.length) {
    return <Typography color="textSecondary">Записей нет</Typography>;
  }
  return <>{customList(todo)}</>;
};
