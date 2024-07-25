const addButton = document.getElementById("add-button");
const taskInput = document.getElementById("todo-input");
const taskList = document.getElementById("todo-list");

addButton.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value;
    if (taskText.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}
