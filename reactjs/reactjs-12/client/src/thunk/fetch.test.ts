import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {fetchGetTodo, fetchDeleteTodo} from './fetchTodo';
import {onChangeTodos, deleteTodo} from '../reducers/todo/action';
import {ITodo} from '../models/interfeces';
import fetchMock from 'fetch-mock';

const mockStore = configureMockStore([thunk]);

describe('Async action', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('fetchGetTodo get and upade todo list SUCCESS', async () => {
    const payload: ITodo[] = [
      {
        id: 1,
        checked: false,
        title: 'change todo',
      },
    ];
    const resp = {success: true, data: payload, message: 'Ок'};

    fetchMock.getOnce('api/todo', {
      body: {
        ...resp,
      },
      headers: {'content-type': 'application/json'},
    });

    const expectedActions = [onChangeTodos(payload)];

    const store = mockStore({todos: [], value: '', selectedTodo: null});

    return fetchGetTodo()(store.dispatch).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('fetchGetTodo delete todo', async () => {
    const id = 1;
    const resp = {success: true, message: 'Запись удалена', id};

    fetchMock.deleteOnce(`api/todo/${id}`, resp);

    const expectedActions = [deleteTodo(id)];

    const store = mockStore({todos: [], value: '', selectedTodo: null});

    return fetchDeleteTodo(id)(store.dispatch).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
