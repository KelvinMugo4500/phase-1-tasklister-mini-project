document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById('create-task-form');
  form.addEventListener('submit', (e) => {
  e.preventDefault()
  toDoList(e.target['new-task-description'].value);
  form.reset()
})
});

function toDoList(todo) {
  let li = document.createElement('li')
  li.textContent = `${todo}`
  let ul = document.querySelector('ul')
  ul.appendChild(li)
  let btn = document.createElement('button')
  btn.textContent = " X "
  li.appendChild( btn)
  btn.addEventListener('click', deleteButton)
}

function deleteButton(e) {
  e.target.parentNode.remove();
}

