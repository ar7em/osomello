import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import request from "middleware/request";
import rootReducer from "reducers/root";

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      request,
      thunk
    )
  )
);

export default store;
