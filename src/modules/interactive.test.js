const { toggleTaskComplete, removeAllCompleted } = require('./interactive');

// Simple mock storage object
const mockStorage = {
  data: {},
  setItem(key, value) {
    this.data[key] = value;
  },
  getItem(key) {
    return this.data[key] || null;
  },
  removeItem(key) {
    delete this.data[key];
  },
  clear() {
    this.data = {};
  },
};

/* John: toggleTaskComplete() */
describe('Toggle Task Functionality', () => {
  test('Should change the status to Checked', () => {
    const collection = [
      {
        index: 1,
        description: 'Hello World',
        complete: false,
      },
    ];
    toggleTaskComplete(0, collection);
    expect(collection).toEqual([
      { index: 1, description: 'Hello World', complete: true },
    ]);
  });
});

/* John: removeAllCompleted() */
describe('Remove All Completed Functionality', () => {
  test('Should remove completed tasks', () => {
    const collection = [
      {
        index: 1,
        description: 'Task 1',
        complete: true,
      },
      {
        index: 2,
        description: 'Task 2',
        complete: false,
      },
      {
        index: 3,
        description: 'Task 3',
        complete: true,
      },
    ];

    removeAllCompleted(collection);

    // After calling removeAllCompleted(), it should remove the completed tasks
    expect(collection).toEqual([
      { index: 1, description: 'Task 2', complete: false },
    ]);
  });

  test('Should update indexes after removing tasks', () => {
    const collection = [
      {
        index: 1,
        description: 'Task 1',
        complete: true,
      },
      {
        index: 2,
        description: 'Task 2',
        complete: false,
      },
      {
        index: 3,
        description: 'Task 3',
        complete: true,
      },
    ];

    removeAllCompleted(collection);

    // After calling removeAllCompleted(), it should update the indexes of the remaining tasks
    expect(collection).toEqual([
      { index: 1, description: 'Task 2', complete: false },
    ]);
  });

  test('Should not change collection if there are no completed tasks', () => {
    const collection = [
      {
        index: 1,
        description: 'Task 1',
        complete: false,
      },
      {
        index: 2,
        description: 'Task 2',
        complete: false,
      },
    ];

    removeAllCompleted(collection);

    // After calling removeAllCompleted(), the collection should remain unchanged
    expect(collection).toEqual([
      { index: 1, description: 'Task 1', complete: false },
      { index: 2, description: 'Task 2', complete: false },
    ]);
  });
});
