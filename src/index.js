// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'semantic-ui-css/semantic.min.css'

// Data
import store from './store';

// App
import App from './App';

// Style
import './index.css';

ReactDOM.render(
   <Provider store={store}>
      <App/>
   </Provider>,
   document.getElementById('root')
);
