import { addTask, editTask, removeTask } from './functionality.js';
import './styles.css';

let taskArray = JSON.parse(localStorage.getItem('taskArray')) || [];

/* Add & Remove */
const form = document.querySelector('#form');

const updateLocalStorage = () => {
  localStorage.setItem('taskArray', JSON.stringify(taskArray));
};

const resetContent = () => {
  updateLocalStorage();
  traverseTasks();
  form.reset();
};

const addHoverEffect = () => {
  const todoItems = document.querySelectorAll('.todo-item');

  todoItems.forEach((item) => {
    const input = item.querySelector('.todo-input');

    item.addEventListener('mouseover', () => {
      item.classList.add('bg-yellow');
      input.classList.add('bg-yellow');
    });

    item.addEventListener('mouseout', () => {
      item.classList.remove('bg-yellow');
      input.classList.remove('bg-yellow');
    });
  });
};

const addRemoveFunction = () => {
  const dots = document.querySelectorAll('.btn-dots');

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      removeTask(index, taskArray);
      resetContent();
    });
  });
};

const addEditFunction = () => {
  const todoInputs = document.querySelectorAll('.todo-input');

  todoInputs.forEach((input, index) => {
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        editTask(index, input.value, taskArray);
        resetContent();
      }
    });
  });
};

form.addEventListener('submit', (event) => {
  const description = document.querySelector('#form-task').value;
  addTask(taskArray.length, description, taskArray);
  resetContent();
  event.preventDefault();
});

const traverseTasks = () => {
  const todoList = document.querySelector('#todo-list');

  if (taskArray) {
    const contentHTML = taskArray
      .map(
        (task, index) => `
        <li class="todo-item item-flex" id="todo-item-${index}">
          <div>
            <input class="form-check" type="checkbox" name="todo-input-${index}" id="todo-input-${index}" />
            <input class="form-input todo-input" type="text" value="${task.description}" />
          </div>
           <button class="btn btn-icon btn-dots" type="button" ><i class="fas fa-ellipsis-v"></i></button>
        </li>
    `
      )
      .join('');

    const clearButton = `
        <li class="todo-item bg-white-off" >
           <button id="btn-clear" class="btn btn-clear color-gray w-100 text-center" type="button" >Clear all completed</button>
        </li>
  `;

    todoList.innerHTML = contentHTML + clearButton;
    addHoverEffect();
    addRemoveFunction();
    addEditFunction();
  }
};

window.addEventListener('load', traverseTasks);

/* Reset Animation */

const resetButton = document.querySelector('#btn-reset');

resetButton.addEventListener('click', () => {
  resetButton.classList.add('btn-reset');

  setTimeout(() => {
    resetButton.classList.remove('btn-reset');
  }, 500);
});
