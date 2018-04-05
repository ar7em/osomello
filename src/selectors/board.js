import { createSelector } from "reselect";
import { sortedLists } from "selectors/lists";
import { sortedTasks } from "selectors/tasks";

export const listsWithTasks = createSelector(
  sortedLists,
  sortedTasks,
  (lists, tasks) => lists
    .map(list => ({
      ...list,
      tasks: tasks.filter(task => task.listId == list.id)
    }))
);
