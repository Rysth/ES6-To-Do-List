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
