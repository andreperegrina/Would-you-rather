import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'

import reducers from './reducers';

// Configure redux extension
const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
   trace: true,
   traceLimit: 25
})) || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
