const { toggleTaskComplete, removeAllCompleted } = require('./interactive');

// This is a simple mockStorage object to simulate localStorage behavior
const mockStorage = {
  data: {}, // This object will store data as if it were in localStorage

  getItem: function (key) {
    return this.data[key] || null;
  },

  setItem: function (key, value) {
    this.data[key] = value;
  },
};

/* John: toggleTaskComplete() */
describe('Toggle Task Functionality', () => {
  test('Should change the status to Checked', () => {
    const collection = [
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
        description: 'Task 3',
        complete: false,
      },
    ];

    toggleTaskComplete(0, collection);
    toggleTaskComplete(1, collection);
    toggleTaskComplete(2, collection);

    // Update localStorage after calling toggleTaskComplete()
    mockStorage.setItem('collection', JSON.stringify(collection));

    const updatedCollection = JSON.parse(mockStorage.getItem('collection'));

    expect(updatedCollection).toEqual([
      { index: 1, description: 'Task 1', complete: true },
      { index: 2, description: 'Task 2', complete: false },
      { index: 3, description: 'Task 3', complete: true },
    ]);
  });
});

/* John: removeAllCompleted() */
describe('Remove All Completed Functionality', () => {
  test('Should remove completed tasks', () => {
    const collection = JSON.parse(mockStorage.getItem('collection'));
    removeAllCompleted(collection);

    expect(collection).toEqual([
      { index: 1, description: 'Task 2', complete: false },
    ]);
  });
});
