import {createStore,combineReducers,applyMiddleware} from 'redux';
import * as home from './reducers/homeReducer';
import * as user from './reducers/userReducer';
import thunk from 'redux-thunk';


let store = createStore(
    combineReducers({...home,...user}),  //合并reducer
    applyMiddleware(thunk)               //中间件，异步action
);
export default store;