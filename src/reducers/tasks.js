import { TASKS_ADD, TASKS_EDIT, TASKS_CANCEL_EDIT, TASKS_RENAME } from "actions/tasks";

const initialState = {
  all: [],
  edit: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TASKS_ADD:
      return Object.assign({}, state, {
        all: state.all.concat(payload.tasks)
      });
    case TASKS_EDIT:
      return Object.assign({}, state, {
        edit: payload.task
      });
    case TASKS_CANCEL_EDIT:
      return Object.assign({}, state, {
        edit: null
      });
    case TASKS_RENAME:
      return Object.assign({}, state, {
        edit: null,
        all: state.all.map((task, index) => {
          if (payload._id === index) {
            return ({...task, name: payload.name});
          }
          return task;
        })
      });
    default:
      return state;
  }
};
