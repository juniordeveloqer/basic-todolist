let tasks = [];

const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");

addTask = () => {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    tasks.push({ text: taskText, completed: false, priority: "normal" });

    updateTaskList();

    taskInput.value = "";
  }
};

updateTaskList = () => {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");

    listItem.innerHTML = `
     <span class="${task.completed ? "completed" : ""} ${task.priority}">${
      task.text
    }</span>
      <div>
      <button onclick='toggleTask(${index})' >${
      task.completed ? "undo" : "complete"
    }</button>
      <button  onclick='deleteTask(${index})' >delete</button>
      </div>

     `;
    taskList.appendChild(listItem);
  });

  toggleTask = (index) => {
    tasks[index].completed = !tasks[index].completed;

    updateTaskList();
  };

  deleteTask = (index) => {
    tasks.splice(index, 1);

    updateTaskList();
  };
};
