import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"

import serviceReducer from "./reducers/serviceReducer"


let store = createStore(combineReducers({
    serviceReducer: serviceReducer,
    
}), applyMiddleware(thunk))

export default store