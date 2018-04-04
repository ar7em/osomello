export default store => next => action => {
  if (action.meta && action.meta.request) {
    fetch(action.meta.request.uri, {
      method: "GET",
    })
      .then(response => response.json())
      .then(json => {
        const successAction = action.meta.request.success(json);
        store.dispatch(successAction);
      });
  }

  next(action);
};
