function traverseTasks(collection) {
  return collection
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
}

module.exports = {
  traverseTasks,
};
