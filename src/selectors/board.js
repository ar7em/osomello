import { createSelector } from "reselect";

export const sortedLists = createSelector(
  state => state.lists.all,
  (lists) => lists
    .map(list => ({...list}))
    .sort((a, b) => a.position - b.position)
);

export const sortedTasks = createSelector(
  state => state.tasks.all,
  (tasks) => tasks
    .map((task, index) => ({...task, _id: index}))
    .sort((a, b) => {
      const priority = a.position - b.position;

      if (priority) {
        return priority;
      }

      return a._id - b._id;
    })
);

export const listsWithTasks = createSelector(
  sortedLists,
  sortedTasks,
  (lists, tasks) => lists
    .map(list => ({
      ...list,
      tasks: tasks.filter(task => task.listId === list.id)
    }))
);
