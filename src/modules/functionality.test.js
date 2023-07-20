const { addTask, removeTask, editTask } = require('./functionality');
const { mockStorage } = require('./mockStorage');

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
describe('Edit Functionality', () => {
  test('Should Edit a task within the collection', () => {
    const updatedCollection = JSON.parse(mockStorage.getItem('collection'));

    editTask(2, 'Task 3.3', updatedCollection);
    expect(updatedCollection).toEqual([
      {
        index: 1,
        description: 'Task 1',
        complete: false,
      },
      {
        index: 2,
        description: 'Task 2',
        complete: true,
      },
      {
        index: 3,
        description: 'Task 3.3',
        complete: false,
      },
      {
        index: 4,
        description: 'Task 4',
        complete: true,
      }
    ]);
  });
});