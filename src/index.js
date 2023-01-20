import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

// const store = createStore(rootReducer, compose(
//   applyMiddleware(
//     thunk
//   ),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// ))

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunk
    ),
    window.REDUX_DEVTOOLS_EXTENSION
      ? window.REDUX_DEVTOOLS_EXTENSION()
      : (f) => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
);
