document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let task = JSON.parse(localStorage.getItem("task")) || [];
  task.forEach((task) => renderTasks(task));
  addTaskButton.addEventListener("click", () => {
    const tasktext = todoInput.value.trim();
    if (tasktext === "") return;
    const newTask = {
      id: Date.now(),
      text: tasktext,
      completed: false,
    };
    task.push(newTask);
    saveTasks();
    todoInput.value = ""; //clear input refresh
    console.log(task);
  });

  function renderTasks(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    if (task.completed) li.classList.add("completed");
    li.innerHTML = `
   <span>${task.text}</span>
   <button>delete</button>
   `;
    li.addEventListener("click", (e) => {
      if (e.target.tagNmae === "BUTTON") return;
      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTasks();
    });
    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation(); // prevent toggle from firing
      task = task.filter((t) => t.id !== task.id);
    });
    todoList.appendChild(li);
  }

  // api call tak hogyi isme localStorage use karke
  function saveTasks() {
    localStorage.setItem("task", JSON.stringify(task));
  }
});
