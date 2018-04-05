import { createSelector } from "reselect";
import { sortedLists } from "selectors/lists";
import { tasksByLists } from "selectors/tasks";

export const listsWithTasks = createSelector(
  sortedLists,
  tasksByLists,
  (lists, tasks) => lists
    .map(list => ({
      ...list,
      tasks: tasks[list.id] || []
    }))
);
