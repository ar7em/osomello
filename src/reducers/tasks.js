import { TASKS_ADD, TASKS_EDIT, TASKS_CANCEL_EDIT, TASKS_RENAME, TASKS_REORDER } from "actions/tasks";

const initialState = {
  all: [],
  edit: null
};

const normalizeIds = (tasks) => (
  tasks
    .map((task, index) => ({...task, _id: task._id || index}))
);

const normalizePosition = (tasks) => (
  tasks
    .sort((a, b) => {
      if (typeof a.position !== "number") {
        return 1;
      }

      if (typeof b.position !== "number") {
        return -1;
      }

      return (a.position - b.position);
    })
    .map((task, index, all) => {
      const sameListId = all.filter((item) => item.listId === task.listId);
      let position = sameListId.indexOf(task);

      if (position < 0) {
        position = sameListId.length;
      }

      return ({...task, position: position});
    })
);

const reorder = (tasks, _id, fromList, toList, startPosition, endPosition) => {
  const destinationList = tasks.filter((task) => task.listId === toList);
  let sourceList;

  if (toList === fromList) {
    sourceList = destinationList;
  } else {
    sourceList = tasks.filter((task) => task.listId === fromList);
  }

  destinationList.splice(endPosition, 0, sourceList.splice(startPosition, 1)[0]);

  return tasks
    .map((task) => {
      if (task._id === _id) {
        task.listId = toList;
      }

      let newPosition = destinationList.indexOf(task);

      if (newPosition <= -1) {
        newPosition = sourceList.indexOf(task);
      }

      if (newPosition > -1) {
        task.position = newPosition;
      }

      return task;
    })
    .sort((a, b) => a.position - b.position);
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TASKS_ADD: {
      const tasks = normalizePosition(normalizeIds(state.all.concat(payload.tasks)));
      return Object.assign({}, state, {
        all: tasks
      });
    }
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
        all: state.all.map((task) => {
          if (payload._id === task._id) {
            return ({...task, name: payload.name});
          }
          return task;
        })
      });
    case TASKS_REORDER:
      return Object.assign({}, state, {
        all: reorder(state.all, payload._id, payload.fromList, payload.toList, payload.startPosition, payload.endPosition)
      });
    default:
      return state;
  }
};
