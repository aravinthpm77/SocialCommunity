import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import auth from "./reducers/auth";
import currentUserReducer from "./reducers/currentUser";
import serviceReducer from "./reducers/serviceReducer"

let store = createStore(combineReducers({
    serviceReducer: serviceReducer,
    auth:auth,
    currentUserReducer :currentUserReducer,
}), applyMiddleware(thunk))

export default store