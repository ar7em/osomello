import { createSelector } from "reselect";

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

export const editTask = createSelector(
  state => state.tasks.edit,
  (task) => task ? ({...task}) : null
);
