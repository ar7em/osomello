import { TASKS_ADD } from "actions/tasks";

const initialState = {
  all: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TASKS_ADD:
      return Object.assign({}, state, {
        all: state.all.concat(payload.tasks)
      });
    default:
      return state;
  }
};
