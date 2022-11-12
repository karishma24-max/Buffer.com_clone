import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { Authreducer } from "./Authenticated/authenticated.reducer";
import { Templatereducer } from "./Template/template.reducer";


const RootReducers = combineReducers({
    template : Templatereducer,
    auth : Authreducer
})

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = legacy_createStore(RootReducers , createComposer(applyMiddleware(thunk)) )