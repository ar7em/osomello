import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { DragDropContext } from "react-beautiful-dnd";
import * as tasksActions from "actions/tasks";
import App from "containers/App";
import request from "middleware/request";
import rootReducer from "reducers/root";

import "global.css";

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      request
    )
  )
);

render(
  <DragDropContext
    onDragEnd={result => {
      const taskId = result.draggableId;
      const fromList = result.source.droppableId;
      const toList = result.destination.droppableId;
      const startPosition = result.source.index;
      const endPosition = result.destination.index;

      store.dispatch(tasksActions.reorder(taskId, fromList, toList, startPosition, endPosition));
    }}
  >
    <Provider store={store}>
      <App/>
    </Provider>
  </DragDropContext>,
  document.getElementById("root")
);
