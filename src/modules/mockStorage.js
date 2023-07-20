const mockStorage = {
  data: {}, // This object will store data as if it were in localStorage

  getItem: function (key) {
    return this.data[key] || null;
  },

  setItem: function (key, value) {
    this.data[key] = value;
  },
};

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
  {
    index: 4,
    description: 'Task 4',
    complete: true,
  },
];

mockStorage.setItem('collection', JSON.stringify(collection));

module.exports = {
  mockStorage,
};
