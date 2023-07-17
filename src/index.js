import { addTask, editTask, removeTask } from './modules/functionality.js';
import { toggleTaskComplete, removeAllCompleted } from './modules/interactive.js';
import './styles.css';

const taskArray = JSON.parse(localStorage.getItem('taskArray')) || [];

/* Add & Remove */
const form = document.querySelector('#form');

const updateLocalStorage = () => {
  localStorage.setItem('taskArray', JSON.stringify(taskArray));
};

/* eslint-disable */

const resetContent = () => {
  updateLocalStorage();
  traverseTasks();
  form.reset();
};

/* eslint-enable */

const addHoverEffect = () => {
  const todoItems = document.querySelectorAll('.todo-item');

  todoItems.forEach((item) => {
    const input = item.querySelector('.todo-input');

    if (item && input) {
      input.addEventListener('mouseover', () => {
        item.classList.add('bg-yellow');
        input.classList.add('bg-yellow');
      });

      input.addEventListener('mouseout', () => {
        item.classList.remove('bg-yellow');
        input.classList.remove('bg-yellow');
      });
    }
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

const addMarkFunction = () => {
  const todoChecks = document.querySelectorAll('.todo-check');

  todoChecks.forEach((check, index) => {
    check.addEventListener('change', () => {
      toggleTaskComplete(index, taskArray);
      resetContent();
    });
  });
};

form.addEventListener('submit', (event) => {
  const description = document.querySelector('#form-task').value;
  if (description !== '') {
    addTask(taskArray.length, description.trim(), taskArray);
    resetContent();
  }
  event.preventDefault();
});

const traverseTasks = () => {
  const todoList = document.querySelector('#todo-list');

  if (taskArray) {
    const contentHTML = taskArray
      .map((task, index) => {
        const checked = task.complete ? 'checked' : '';
        const className = checked ? 'line-trough' : '';
        const mustDelete = checked ? 'btn-trash' : '';
        const icon = checked ? 'fa-trash' : 'fa-ellipsis-v';

        return `
        <li class="todo-item item-flex" id="todo-item-${index}">
          <div>
            <input class="form-check todo-check" type="checkbox" name="todo-input-${index}" id="todo-input-${index}" ${checked}/>
            <input class="form-input todo-input ${className}" type="text" value="${task.description}" />
          </div>
           <button class="btn btn-icon btn-dots ${mustDelete}" type="button" ><i class="fas ${icon}"></i></button>
        </li>
    `;
      })
      .join('');

    const clearButton = `
        <li class="todo-item bg-white-off" >
           <button id="btn-clear" class="btn btn-clear color-gray w-100 text-center" type="button" >Clear all completed</button>
        </li>
    `;

    todoList.innerHTML = contentHTML + clearButton;

    const buttonClear = document.querySelector('#btn-clear');

    buttonClear.addEventListener('click', () => {
      removeAllCompleted(taskArray);
      resetContent();
    });

    addHoverEffect();
    addRemoveFunction();
    addEditFunction();
    addMarkFunction();
  }
};

window.addEventListener('load', traverseTasks);

/* Reset Animation */

const resetButton = document.querySelector('#btn-reset');

resetButton.addEventListener('click', () => {
  resetButton.classList.add('btn-reset');
  taskArray.splice(0, taskArray.length);
  resetContent();

  setTimeout(() => {
    resetButton.classList.remove('btn-reset');
  }, 500);
});
