import * as reducers from './reducers'
import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from 'redux-devtools-extension';

const reducer = combineReducers(reducers);

const store = createStore(reducer, devToolsEnhancer());

export default store;