/**
 * @jest-environment jsdom
 */

const { toggleTaskComplete, removeAllCompleted } = require('./interactive');
const { mockStorage } = require('./mockStorage');
const { traverseTasks } = require('./DOM');

/* John: toggleTaskComplete() */
describe('Toggle Task Functionality and DOM Manipulation by using JSDOM', () => {
  test('Should change the status to Checked', () => {
    const collection = JSON.parse(mockStorage.getItem('collection'));
    toggleTaskComplete(0, collection);
    toggleTaskComplete(1, collection);
    toggleTaskComplete(2, collection);
    toggleTaskComplete(3, collection);

    // Update localStorage after calling toggleTaskComplete()
    mockStorage.setItem('collection', JSON.stringify(collection));

    const updatedCollection = JSON.parse(mockStorage.getItem('collection'));

    // DOM Manipulation: Count the LI elements from a UL element.
    // After we changed every complete property from each Task.
    document.body.innerHTML = `
    <ul class="todo-list" id="todo-list">
      ${traverseTasks(updatedCollection)}
    </ul>`;
    const todoList = document.querySelectorAll('#todo-list li');
    expect(todoList).toHaveLength(4);

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

    // DOM Manipulation: Count the LI elements from a UL element.
    // After we deleted every complete task from the collection.
    document.body.innerHTML = `
    <ul class="todo-list" id="todo-list">
      ${traverseTasks(collection)}
    </ul>`;
    const todoList = document.querySelectorAll('#todo-list li');
    expect(todoList).toHaveLength(2);

    expect(collection).toEqual([
      { index: 1, description: 'Task 2', complete: false },
      { index: 2, description: 'Task 4', complete: false },
    ]);
  });
});
