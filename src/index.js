import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "containers/App";
import request from "middleware/request";
import rootReducer from "reducers/root";

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      request
    )
  )
);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);
