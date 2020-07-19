// Libraries
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'

// List of all the reducers
import reducers from './reducers';

// Configure redux extension used in Chrome
const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
   trace: true,
   traceLimit: 25
})) || compose;

// Create the store that will contain all the application data and the functions you can use to manipulated
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
