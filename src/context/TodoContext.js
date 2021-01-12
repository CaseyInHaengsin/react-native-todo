import createDataContext from './createDataContext'

const toDoReducer = (state, action) => {
  switch (action.type) {
    case 'delete_todo':
      return state.filter((toDo) => toDo.id !== action.payload)
    case 'add_todo':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: `Todo # ${state.length + 1}`
        }
      ]
    default:
      return state
  }
}

const addTodo = dispatch => {
  return () => {
    dispatch({ type: 'add_todo' })
  }
}

const deleteTodo = dispatch => {
  return (id) => {
    dispatch({type: 'delete_todo', payload: id})
  }
}

export const { Context, Provider } = createDataContext(
    toDoReducer,
  { addTodo, deleteTodo },
  []
)
