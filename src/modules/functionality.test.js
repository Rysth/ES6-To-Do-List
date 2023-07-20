const { addTask, removeTask } = require('./functionality');

/* John: addTask() */
describe('Add Functionality', () => {
  test('Should add a new task within the collection', () => {
    const collection = [];
    addTask(1, 'Hello World', collection);
    expect(collection).toEqual([
      { index: 1, description: 'Hello World', complete: false },
    ]);
  });
});

/* Bruno: removeTask() */
describe('Remove Functionality', () => {
  test('Should remove a new task within the collection', () => {
    const collection = [
      { index: 1, description: 'Hello World 1', complete: false },
      { index: 2, description: 'Hello World 2', complete: true },
    ];
    removeTask(0, collection);
    expect(collection).toEqual([
      { index: 1, description: 'Hello World 2', complete: true },
    ]);
  });
});

/* Bruno: editTask() */
