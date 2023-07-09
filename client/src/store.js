import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import auth from "./reducers/auth";
import currentUser from "./reducers/currentUser";
import serviceReducer from "./reducers/serviceReducer"

let store = createStore(combineReducers({
    serviceReducer: serviceReducer,
    auth:auth,
    
    currentUser :currentUser,
}), applyMiddleware(thunk))

export default store