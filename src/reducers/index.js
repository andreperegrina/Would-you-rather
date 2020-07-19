// Libraries
import {combineReducers} from "redux";

// Reducers
import users from './users.reducer' // This reducers handle all users data
import questions from './questions.reducer' // This reducer handle all questions data
import authentication from './authentication.reducer' // this reducer handle all authentication information

// Combine the reducer using the library combine reducers so it can be use in the configuration of the store
export default combineReducers({
   users,
   questions,
   authentication
})
