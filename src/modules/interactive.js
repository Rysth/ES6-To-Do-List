const toggleTaskComplete = (ID, collection) => {
  const task = collection[ID];

  if (task) {
    if (task.complete) {
      task.complete = false;
      return;
    }
    task.complete = true;
  }
};

const removeAllCompleted = (collection) => {
  const tasks = collection.filter((element) => element.complete === true);

  //Tasks [0, 1]

  if (tasks) {
    tasks.forEach((task) => {
      collection.splice(task.index - 1, 1);

      if (collection.length !== 0) {
        // Update the index of each task after removal
        collection.forEach((task, index) => {
          task.index = index + 1;
        });
      }
    });
  }
};
export { toggleTaskComplete, removeAllCompleted };
