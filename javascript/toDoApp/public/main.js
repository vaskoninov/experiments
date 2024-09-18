const btnShowAll = document.getElementById("show-all");
const listTasks = document.getElementById("task-list");
const form = document.getElementById("formToDo");

async function showAllTasks() {
    try {
        const res = await fetch("http://localhost:3000/api/tasks");
        if (!res.ok) {
            throw new Error("Failed to fetch posts");
        }
        const tasks = await res.json();
        listTasks.innerHTML = "";
        tasks.forEach((task) => {
            const taskEl = document.createElement("li");
            const taskTitle = document.createElement("span");
            const taskCompleted = document.createElement("input");

            taskEl.setAttribute("data-id", task.id);

            taskCompleted.type = "checkbox";
            taskCompleted.checked = task.isCompleted;
            taskTitle.textContent = task.title;

            taskEl.append(taskTitle, taskCompleted);
            listTasks.appendChild(taskEl);
        });
    } catch (error) {
        console.log(error);
    }
}

async function createTask(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const title = formData.get("title");
    console.log(title);
    try {
        const res = await fetch("http://localhost:3000/api/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title }),
        });
        if (!res.ok) {
            throw new Error("Failed to create task");
        }

        // Optionally, refresh the task list after creating a task
        showAllTasks();
    } catch (error) {
        console.log(error);
    }
}

btnShowAll.addEventListener("click", showAllTasks);
form.addEventListener("submit", createTask);
