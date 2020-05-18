import React, {FC, useEffect} from 'react';
import {Button, Container} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {Typography} from '@material-ui/core';
import {ITodo} from '../models/interfeces';
import {getSelectTodo} from '../thunk/fetchTodo';
interface IOwnProps {
  id: number;
}
interface IProps {
  id?: number;
  todos?: ITodo[];
  selectedTodo: ITodo;
  getSelectTodo: (id: number) => void;
}
const ViewTodo: FC<IProps> = ({id, selectedTodo, getSelectTodo}) => {
  const history = useHistory();
  // const item = todos[todos.length - 1] || {};
  const item = selectedTodo;
  useEffect(() => {
    getSelectTodo(id!);
  }, []);

  if (!item) {
    return <div>Loading ...</div>;
  }
  return (
    <Container maxWidth="lg">
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        {`todo view item id - ${id}`}
      </Typography>
      <Typography variant="h5" color="textSecondary">
        Title - {item.title}
      </Typography>
      <Typography variant="h5" color="textSecondary">
        Checked - {item.checked ? 'Yes' : 'No'}
      </Typography>

      <Typography variant="h5" color="textSecondary">
        Date - {new Date(item.id).toDateString()}
      </Typography>
      <hr />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={() => {
          history.push('/todo');
        }}>
        Back
      </Button>
    </Container>
  );
};

export default connect(
  ({todos}: any, {id}: IOwnProps) => ({
    selectedTodo: todos.selectedTodo,
  }),
  {getSelectTodo},
)(ViewTodo);
