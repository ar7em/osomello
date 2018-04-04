export const TASKS_RETRIEVE = "TASKS_RETRIEVE";
export const TASKS_ADD = "TASKS_ADD";
export const TASKS_EDIT = "TASKS_EDIT";
export const TASKS_RENAME = "TASKS_RENAME";
export const TASKS_CANCEL_EDIT = "TASKS_CANCEL_EDIT";

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

export const edit = task => ({
  type: TASKS_EDIT,
  payload: {
    task
  }
});

export const cancelEdit = () => ({
  type: TASKS_CANCEL_EDIT,
});

export const rename = (_id, name) => ({
  type: TASKS_RENAME,
  payload: {
    _id,
    name
  }
});
