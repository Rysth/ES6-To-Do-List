const addTask = (index, description, collection) => {
  // Create a new task object with provided index, description, and set complete to false
  const task = {
    index,
    description,
    complete: false,
  };

  // Add the new task object to the collection array
  collection.push(task);
};

const removeTask = (ID, collection) => {
  if (collection.length >= 1) {
    // Remove the task at the specified index from the collection
    collection.splice(ID, 1);

    if (collection.length !== 0) {
      // Update the index of each task after removal
      collection.forEach((task, index) => {
        task.index = index + 1;
      });
    }
  }
};

const editTask = (ID, newDescription, collection) => {
  // Find the task with the specified ID in the collection
  const task = collection.find((element) => element.index === ID);

  if (task) {
    // Update the description of the task with the newDescription value
    task.description = newDescription;
  }
};

module.exports = {
  addTask,
  removeTask,
  editTask,
};
