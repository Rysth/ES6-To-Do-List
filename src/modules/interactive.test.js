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
        description: 'Hello World',
        complete: false,
      },
      {
        index: 2,
        description: 'Hello World!',
        complete: true,
      },
    ];

    toggleTaskComplete(0, collection);
    toggleTaskComplete(1, collection);

    // Update localStorage after calling toggleTaskComplete()
    mockStorage.setItem('collection', JSON.stringify(collection));

    const updatedCollection = JSON.parse(mockStorage.getItem('collection'));

    expect(updatedCollection).toEqual([
      { index: 1, description: 'Hello World', complete: true },
      { index: 2, description: 'Hello World!', complete: false },
    ]);
  });
});

/* John: removeAllCompleted() */
/* describe('Remove All Completed Functionality', () => {
  test('Should remove completed tasks', () => {});
}); */
