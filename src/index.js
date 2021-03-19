import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store/index'
//We pass our store through as a prop to "provide" it to all components within our app
import { Provider } from 'react-redux'
window.store = store;
ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
     <App />
   </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

