import { combineReducers } from "redux"; 
import usersReducers from "./reducer";


const rootReducer = combineReducers({
  user: usersReducers,
})

export default rootReducer; 