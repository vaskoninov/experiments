async function toggleIsCompleted(id, isCompleted) {
    try {
        const res = await fetch("http://localhost:3000/api/tasks/update", {
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

export default toggleIsCompleted;
