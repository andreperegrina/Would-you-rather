import {combineReducers} from "redux";

import users from './users.reducer'
import questions from './questions.reducer'
import authentication from './authentication.reducer'

export default combineReducers({
   users,
   questions,
   authentication
})
