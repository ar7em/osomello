import { createSelector } from "reselect";

export const tasksByLists = createSelector(
  state => state.tasks.all,
  state => state.tasks.byLists,
  (all, byLists) => {
    const listsWithIds = Object.keys(byLists);
    const getTaskById = _id => all.find(task => task._id === _id);
    const listsWithTasks = listsWithIds.reduce((acc, listId) => {
      acc[listId] = byLists[listId].map((_id, index) => ({...getTaskById(_id), position: index}));
      return acc;
    }, {});

    return listsWithTasks;
  }
);

export const editTask = createSelector(
  state => state.tasks.edit,
  (task) => task ? ({...task}) : null
);
