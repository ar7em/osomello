import { createSelector } from "reselect";

export const sortedLists = createSelector(
  state => state.lists.all,
  (lists) => lists.slice().sort((a, b) => a.position - b.position)
);
