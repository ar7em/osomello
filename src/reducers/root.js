import { combineReducers } from "redux";
import tasks from "reducers/tasks";
import lists from "reducers/lists";

export default combineReducers({
  tasks,
  lists
});
