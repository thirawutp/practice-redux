import { combineReducers } from 'redux'
import InputReducer from './InputReducer'

const rootReducer = combineReducers({
  todo: InputReducer,
})

export default rootReducer