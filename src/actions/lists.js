export const LISTS_RETRIEVE = "LISTS_RETRIEVE";
export const LISTS_ADD = "LISTS_ADD";

export const retrieve = () => ({
  type: LISTS_RETRIEVE,
  meta: {
    request: {
      uri: "https://raw.githubusercontent.com/divineforest/shmello/master/api/lists.json",
      success: ({lists}) => add(lists)
    }
  }
});

export const add = lists => ({
  type: LISTS_ADD,
  payload: {
    lists
  }
});
