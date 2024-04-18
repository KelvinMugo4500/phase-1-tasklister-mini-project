document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  // Function to create a delete button
  function createDeleteButton() {
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "❌"; // Using an emoji for delete symbol
      deleteButton.classList.add("delete-btn");
      return deleteButton;
  }

  // Function to handle task deletion
  function deleteTask(event) {
      const taskItem = event.target.parentElement;
      taskList.removeChild(taskItem);
  }

  form.addEventListener("submit", function(event) {
      event.preventDefault(); 

      const taskInput = document.getElementById("new-task-description");
      const taskDescription = taskInput.value;

      const listItem = document.createElement("li");
      listItem.textContent = taskDescription;

      const deleteButton = createDeleteButton();
      deleteButton.addEventListener("click", deleteTask);

      listItem.appendChild(deleteButton);
      taskList.appendChild(listItem);

      taskInput.value = "";
      taskInput.focus();
  });
});
