import toggleIsCompleted from "./toggleCompleted.js";

export function createToDoElement(task) {
    const taskEl = document.createElement("li");
    const taskTitle = document.createElement("span");
    const taskCompleted = document.createElement("input");

    taskEl.dataset.id = task.id;

    taskCompleted.type = "checkbox";
    taskCompleted.checked = task.isCompleted;

    taskCompleted.addEventListener("change", () => {
        // console.log(taskEl.dataset.id);
        toggleIsCompleted(taskEl.dataset.id, taskCompleted.checked);
    });

    taskTitle.textContent = task.title;

    taskEl.append(taskTitle, taskCompleted);

    return taskEl;
}
