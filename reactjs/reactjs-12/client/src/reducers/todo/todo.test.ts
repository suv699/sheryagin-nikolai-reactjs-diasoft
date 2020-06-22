import {todoReducer} from './reducer';
import {initialState} from './reducer';
import {onChangeTodoField, addTodo, deleteTodo, onChangeTodos, markedTodo, selectedTodo} from './action';
import {actionTypes} from './action';
import {ITodo} from '../../models/interfeces';

describe('reducers and action', () => {
  it('initial state', () => {
    const state = todoReducer(undefined, {type: 'default'});
    expect(state).toEqual({...initialState});
  });

  it('action TODOCHANGEFIELD', () => {
    const payload = 'hello todo';
    const act = {
      type: actionTypes.TODOCHANGEFIELD,
      payload,
    };

    expect(onChangeTodoField(payload)).toEqual(act);
  });

  it('reducers TODOCHANGEFIELD', () => {
    const value = 'hello todo';
    const act = {
      ...initialState,
      value,
    };
    const state = todoReducer(initialState, onChangeTodoField(value));

    expect(state).toEqual(act);
  });

  it('action TODOADD', () => {
    const payload: ITodo = {
      id: 1,
      checked: false,
      title: 'add new todo',
    };
    const act = {
      type: actionTypes.TODOADD,
      payload,
    };

    expect(addTodo(payload)).toEqual(act);
  });

  it('reducers TODOADD', () => {
    const payload: ITodo = {
      id: 1,
      checked: false,
      title: 'add new todo',
    };

    const act = {
      ...initialState,
      todos: [payload],
    };
    const state = todoReducer(initialState, addTodo(payload));

    expect(state).toEqual(act);
  });

  it('action TODODELETE', () => {
    const payload = 1;
    const act = {
      type: actionTypes.TODODELETE,
      payload,
    };

    expect(deleteTodo(payload)).toEqual(act);
  });

  it('reducers TODODELETE', () => {
    const newtodos: ITodo[] = [
      {
        id: 1,
        checked: false,
        title: 'add new todo',
      },
      {
        id: 2,
        checked: false,
        title: 'add new todo',
      },
    ];

    const newState = {
      ...initialState,
      todos: newtodos,
    };

    const payload = 1;
    const act = {
      ...initialState,
      todos: [
        {
          id: 2,
          checked: false,
          title: 'add new todo',
        },
      ],
    };
    const state = todoReducer(newState, deleteTodo(payload));

    expect(state).toEqual(act);
  });

  it('action TODOONCHANGE', () => {
    const payload: ITodo[] = [
      {
        id: 1,
        checked: false,
        title: 'change todo',
      },
    ];
    const act = {
      type: actionTypes.TODOONCHANGE,
      payload,
    };

    expect(onChangeTodos(payload)).toEqual(act);
  });

  it('reducers TODOONCHANGE', () => {
    const newtodos: ITodo[] = [
      {
        id: 1,
        checked: false,
        title: 'add new todo',
      },
      {
        id: 2,
        checked: false,
        title: 'add new todo',
      },
    ];

    const newState = {
      ...initialState,
      todos: newtodos,
    };

    const act = {
      ...initialState,
      todos: [
        {
          id: 1,
          checked: false,
          title: 'add new todo',
        },
        {
          id: 2,
          checked: false,
          title: 'add new todo',
        },
      ],
    };
    const state = todoReducer(newState, onChangeTodos(newtodos));

    expect(state).toEqual(act);
  });

  it('action TODOMARKED', () => {
    const id = 1;
    const updateItem: ITodo = {
      id: 1,
      checked: false,
      title: 'marked todo',
    };
    const act = {
      type: actionTypes.TODOMARKED,
      payload: {id, updateItem},
    };

    expect(markedTodo(id, updateItem)).toEqual(act);
  });

  it('reducers TODOMARKED', () => {
    const id = 2;
    const newtodos: ITodo[] = [
      {
        id: 1,
        checked: false,
        title: 'add new todo',
      },
      {
        id: 2,
        checked: false,
        title: 'add new todo',
      },
    ];

    const updateItem = {
      id: 2,
      checked: true,
      title: 'add new todo',
    };
    const newState = {
      ...initialState,
      todos: newtodos,
    };

    const act = {
      ...initialState,
      todos: [
        {
          id: 1,
          checked: false,
          title: 'add new todo',
        },
        {
          id: 2,
          checked: true,
          title: 'add new todo',
        },
      ],
    };
    const state = todoReducer(newState, markedTodo(id, updateItem));

    expect(state).toEqual(act);
  });

  it('action TODOSELECTED', () => {
    const payload = 1;
    const act = {
      type: actionTypes.TODOSELECTED,
      payload,
    };

    expect(selectedTodo(payload)).toEqual(act);
  });

  it('reducers TODOSELECTED', () => {
    const payload = 2;
    const newtodos: ITodo[] = [
      {
        id: 1,
        checked: false,
        title: 'add new todo',
      },
      {
        id: 2,
        checked: false,
        title: 'add new todo',
      },
    ];

    const newState = {
      ...initialState,
      todos: newtodos,
    };

    const act = {
      ...newState,
      selectedTodo: 2,
    };
    const state = todoReducer(newState, selectedTodo(payload));

    expect(state).toEqual(act);
  });
});
