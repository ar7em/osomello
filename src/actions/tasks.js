export const TASKS_RETRIEVE = "TASKS_RETRIEVE";
export const TASKS_ADD = "TASKS_ADD";

export const retrieve = () => ({
  type: TASKS_RETRIEVE,
  meta: {
    request: {
      uri: "https://raw.githubusercontent.com/divineforest/shmello/master/api/tasks.json",
      success: ({tasks}) => add(tasks)
    }
  }
});

export const add = tasks => ({
  type: TASKS_ADD,
  payload: {
    tasks
  }
});
