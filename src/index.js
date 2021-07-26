// Import dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from 'redux/store'
// Import Css
import 'index.css';
// Import components
import App from 'App';

// Render App
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
