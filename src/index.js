document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Get the task description entered by the user
      const taskInput = document.getElementById("new-task-description");
      const taskDescription = taskInput.value;

      // Create a new list item to hold the task description
      const listItem = document.createElement("li");
      listItem.textContent = taskDescription;

      // Append the new task to the task list
      taskList.appendChild(listItem);

      // Clear the input field after submitting
      taskInput.value = "";

      // Optionally, you can focus on the input field again
      taskInput.focus();
  });
});
