import { TASKS_ADD, TASKS_EDIT, TASKS_CANCEL_EDIT, TASKS_RENAME, TASKS_REORDER } from "actions/tasks";

const initialState = {
  all: [],
  byLists: {},
  edit: null
};

const normalizeIds = (tasks) => (
  tasks
    .map((task, index) => ({...task, _id: index}))
);

const distributeByLists = (tasks) => (
  tasks
    .sort((a, b) => a.position - b.position)
    .reduce((acc, task) => {
      if (!acc[task.listId]) {
        acc[task.listId] = [];
      }

      acc[task.listId].push(task._id);

      return acc;
    }, {})
);

const reorder = (lists, _id, fromList, toList, startPosition, endPosition) => {
  lists[fromList] = lists[fromList].filter((taskId) => taskId !== _id);

  if (lists[toList]) {
    lists[toList].splice(endPosition, 0, _id);
  } else {
    lists[toList] = [_id];
  }

  return lists;
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TASKS_ADD: {
      const tasks = normalizeIds(payload.tasks);
      return Object.assign({}, state, {
        all: normalizeIds(tasks),
        byLists: distributeByLists(tasks)
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
        all: state.all.map((task) => {
          if (payload._id === task._id) {
            task.listId = payload.toList;
          }
          return task;
        }),
        byLists: reorder(state.byLists, payload._id, payload.fromList, payload.toList, payload.startPosition, payload.endPosition)
      });
    default:
      return state;
  }
};
