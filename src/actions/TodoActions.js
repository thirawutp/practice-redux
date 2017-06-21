import { UPDATE_TEXT, ADD_TODO } from '../constrants'

const updateText = (text) => ({
  type: UPDATE_TEXT,
  payload: text
})

const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo
})

export {
  updateText,
  addTodo
}