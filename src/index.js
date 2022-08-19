import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./store/reducers";
import sagas from "./store/sagas";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagas);

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    }
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    ::-webkit-scrollbar-button {
      width: 0;
      height: 0;
    }
    ::-webkit-scrollbar-thumb {
      background: #757575;
      border: 0 none #ffffff;
      border-radius: 1px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #969696;
    }
    ::-webkit-scrollbar-thumb:active {
      background: #c8c8c8;
    }
    ::-webkit-scrollbar-track {
      background: rgb(18,18,18);
      border: none;
      border-radius: 0;
    }
    ::-webkit-scrollbar-track:hover {
      background: rgb(18,18,18);
    }
    ::-webkit-scrollbar-track:active {
      background: rgb(18,18,18);
    }
    ::-webkit-scrollbar-corner {
      background: transparent;
    }
`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
