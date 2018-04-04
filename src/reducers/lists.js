import { LISTS_ADD } from "actions/lists";

const initialState = {
  all: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LISTS_ADD:
      return Object.assign({}, state, {
        all: state.all.concat(payload.lists)
      });
    default:
      return state;
  }
};
