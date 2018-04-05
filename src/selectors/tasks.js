import { createSelector } from "reselect";

export const sortedTasks = createSelector(
  state => state.tasks.all,
  all => all.sort((a, b) => a.position - b.position)
);

export const editTask = createSelector(
  state => state.tasks.edit,
  (task) => task ? ({...task}) : null
);
