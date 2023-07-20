/**
 * @jest-environment jsdom
 */

const { addTask, removeTask, editTask } = require('./functionality');
const { mockStorage } = require('./mockStorage');
const { traverseTasks } = require('./DOM');

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

    // DOM Manipulation: Check if the LI's items from the UL aren't NaN
    // After we edit a description from a Task.
    document.body.innerHTML = `
    <ul class="todo-list" id="todo-list">
      ${traverseTasks(updatedCollection)}
    </ul>`;
    const todoList = document.querySelectorAll('#todo-list li');
    expect(todoList).not.toBeNaN();

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
      },
    ]);
  });
});
