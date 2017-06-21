import { UPDATE_TEXT, ADD_TODO } from '../constrants'

const initialState = {
  text: '',
  todoList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TEXT:
      return { ...state, text: action.payload }
    case ADD_TODO:
      return { ...state, todoList: [...state.todoList, action.payload] }
    default:
      return state
  }
}