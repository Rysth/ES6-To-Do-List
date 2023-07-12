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
    .map((element, index) => {
      return `
        <li class="todo-item item-flex" id="todo-item-${index}">
          <div>
            <input class="form-check" type="checkbox" name="todo-input-${index}" id="todo-input-${index}" />
            <input class="form-input" type="text" value="${element.description}" />
          </div>
           <button type="reset">Reset</button>
        </li>
    `;
    })
    .join('');

  todoList.innerHTML = contentHTML;
};

traverseTasks();
