import './styles.css';

const taskArray = [
  {
    index: 0,
    description: 'Read about ES6',
    completed: false,
  },
  {
    index: 1,
    description: 'Learn about Frontend Development',
    completed: false,
  },
  {
    index: 2,
    description: 'Learn how to be yourself',
    completed: false,
  },
];

const traverseTasks = () => {
  const todoList = document.querySelector('#todo-list');

  const contentHTML = taskArray
    .map(
      (childNode, index) => `
        <li class="todo-item item-flex" id="todo-item-${index}">
          <div>
            <input class="form-check" type="checkbox" name="todo-input-${index}" id="todo-input-${index}" />
            <input class="form-input todo-input" type="text" value="${childNode.description}" />
          </div>
           <button class="btn btn-icon btn-dots" type="button"><i class="fas fa-ellipsis-v"></i></button>
        </li>
    `
    )
    .join('');

  const clearButton = `
        <li class="todo-item bg-white-off" >
           <button id="btn-clear" class="btn btn-clear color-gray w-100 text-center" type="button">Clear all completed</button>
        </li>
  `;

  todoList.innerHTML = contentHTML + clearButton;
};

window.onload = () => {
  traverseTasks();
};

/* Reset Animation */

const resetButton = document.querySelector('#btn-reset');

resetButton.addEventListener('click', () => {
  resetButton.classList.add('btn-reset');

  setTimeout(() => {
    resetButton.classList.remove('btn-reset');
  }, 500);
});

/* Hover Effect */
const parents = document.querySelectorAll('.todo-item');
const childs = document.querySelectorAll('.todo-input');

const addHoverEffect = () => {
  childs.forEach((childNode, childIndex) => {
    parents.forEach((parentNode, parentIndex) => {
      if (childIndex === parentIndex) {
        childNode.addEventListener('mouseover', () => {
          parentNode.classList.add('bg-yellow');
          childNode.classList.add('bg-yellow');
        });

        childNode.addEventListener('mouseout', () => {
          parentNode.classList.remove('bg-yellow');
          childNode.classList.remove('bg-yellow');
        });
      }
    });
  });
};

addHoverEffect();
