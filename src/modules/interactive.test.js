const { toggleTaskComplete, removeAllCompleted } = require('./interactive');
const { mockStorage } = require('./mockStorage');

/* John: toggleTaskComplete() */
describe('Toggle Task Functionality', () => {
  test('Should change the status to Checked', () => {
    const collection = JSON.parse(mockStorage.getItem('collection'));
    toggleTaskComplete(0, collection);
    toggleTaskComplete(1, collection);
    toggleTaskComplete(2, collection);
    toggleTaskComplete(3, collection);

    // Update localStorage after calling toggleTaskComplete()
    mockStorage.setItem('collection', JSON.stringify(collection));

    const updatedCollection = JSON.parse(mockStorage.getItem('collection'));

    expect(updatedCollection).toEqual([
      { index: 1, description: 'Task 1', complete: true },
      { index: 2, description: 'Task 2', complete: false },
      { index: 3, description: 'Task 3', complete: true },
      { index: 4, description: 'Task 4', complete: false },
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
      { index: 2, description: 'Task 4', complete: false },
    ]);
  });
});
