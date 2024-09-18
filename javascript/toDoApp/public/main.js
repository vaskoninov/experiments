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

            taskEl.dataset.id = task.id;

            taskCompleted.type = "checkbox";
            taskCompleted.checked = task.isCompleted;

            taskCompleted.addEventListener("change", () => {
                // console.log(taskEl.dataset.id);
                toggleIsCompleted(taskEl.dataset.id, taskCompleted.checked);
            });

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

        showAllTasks();
    } catch (error) {
        console.log(error);
    }
}

async function toggleIsCompleted(id, isCompleted) {
    try {
        const res = await fetch("http://localhost:3000/api/tasks", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id, isCompleted }),
        });
        if (!res.ok) {
            throw new Error("Failed to update task");
        }

        const updatedTask = await res.json();
        console.log("Updated Task:", updatedTask);

        // showAllTasks();
    } catch (error) {
        console.log(error);
    }
}

btnShowAll.addEventListener("click", showAllTasks);
form.addEventListener("submit", createTask);
