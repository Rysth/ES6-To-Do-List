const markTaskComplete = (ID, collection) => {
  const task = collection.find((element) => element.index === ID);
  if (task) {
    task.complete = true;
  }
};

const markTaskIncomplete = (ID, collection) => {
  const task = collection.find((element) => element.index === ID);
  if (task) {
    task.complete = false;
  }
};

const removeAllCompleted = (collection) => {
  const tasks = collection.filter((element) => element.complete === true);

  if (tasks) {
    tasks.forEach((task) => {
      collection.splice(task.index, 1);

      if (collection.length !== 0) {
        // Update the index of each task after removal
        collection.forEach((task, index) => {
          task.index = index;
        });
      }
    });
  }
};
export { markTaskComplete, markTaskIncomplete, removeAllCompleted };
