import { createToDoElement } from "./helpers/elements.js";

const btnShowAll = document.getElementById("show-all");
const btnShowIncomplete = document.getElementById("show-incomplete");

const listTasks = document.getElementById("task-list");
const form = document.getElementById("formToDo");

async function showAllTasks() {
    const token = localStorage.getItem("token");
    try {
        const res = await fetch("http://localhost:3000/api/tasks", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        if (!res.ok) {
            throw new Error("Failed to fetch posts");
        }
        const tasks = await res.json();
        listTasks.innerHTML = "";
        tasks.forEach((task) => {
            const taskEl = createToDoElement(task);
            listTasks.appendChild(taskEl);
        });
        // History API of the browser to change the URL for the client
        // in fact Express works as a SPA and the important are the API endpoints -> different from Django
        // window.history.pushState({}, "", "/");
    } catch (error) {
        console.log(error);
    }
}

async function showIncomplete() {
    try {
        const res = await fetch("http://localhost:3000/api/tasks/incomplete");
        if (!res.ok) {
            throw new Error("Failed to fetch posts");
        }
        const tasks = await res.json();
        listTasks.innerHTML = "";
        tasks.forEach((task) => {
            const taskEl = createToDoElement(task);
            listTasks.appendChild(taskEl);
        });
        // window.history.pushState({}, "", "/incomplete");
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
        const res = await fetch("http://localhost:3000/api/tasks/create", {
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

btnShowAll.addEventListener("click", showAllTasks);
btnShowIncomplete.addEventListener("click", showIncomplete);
form.addEventListener("submit", createTask);

// For Dev purposes print the username
const username = localStorage.getItem("username");
if (username) {
    document.getElementById("username").textContent = username;
} else {
    // Handle the case where the user is not logged in
    alert("You are not logged in");
    window.location.href = "/"; // Redirect to login if no username exists
}

// Logging out
document.getElementById("logoutButton").addEventListener("click", function () {
    localStorage.removeItem("token"); // Remove the JWT from localStorage
    localStorage.removeItem("username"); // Remove the username too
    window.location.href = "/"; // Redirect to login page
});

// Handle browser navigation (back/forward)
// window.addEventListener("popstate", () => {
//     const path = window.location.pathname;
//     if (path === "/") {
//         showAllTasks();
//     } else if (path === "/incomplete") {
//         showIncomplete();
//     } else {
//         showAllTasks();
//     }
// });
