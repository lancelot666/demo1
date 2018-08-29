import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import store from './redux/store';
import './index.css';
import App from './App';
import notfound from './view/notfound';
import registerServiceWorker from './registerServiceWorker';
import {logSwitch} from './config/config';
import 'whatwg-fetch';
import 'es6-promise';
import {get,post} from './config/fetchAPI';
window.get = get;
window.post = post;
logSwitch();    //实例打印开关
ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter>
            <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/404" component={notfound} />
            </Switch>    
        </BrowserRouter>
    </Provider>
    , 
document.getElementById('root'));
registerServiceWorker();
/* <Provider store = {store}>
            <App />
        </Provider> */