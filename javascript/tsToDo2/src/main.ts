type Task = {
    title: string;
    date: Date;
    isCompleted: boolean;
};

const listToDos = document.querySelector<HTMLUListElement>("#toDoS");
const formToDo = document.querySelector<HTMLFormElement>("#formToDo");

const title = document.querySelector<HTMLInputElement>("#title");
const date = document.querySelector<HTMLInputElement>("#date");

formToDo?.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!title?.value || !date?.value) return;

    const newToDo = {
        title: title.value,
        date: new Date(date.value),
        isCompleted: false,
    };

    addToDoToList(newToDo);

    title.value = "";
    date.value = "";
});

function addToDoToList(task: Task) {
    const item = document.createElement("li");

    const title = document.createElement("h4");
    title.textContent = task.title;
    const date = document.createElement("p");
    date.classList.add("dataClass");
    date.textContent = ` - ${task.date.toLocaleDateString()}`;
    const checkbox = document.createElement("input");

    checkbox.addEventListener("change", (e) => {
        task.isCompleted = checkbox.checked;
    });

    checkbox.type = "checkbox";

    checkbox.checked = task.isCompleted;

    item.append(title, date, checkbox);

    listToDos?.append(item);
}

// const allDates = document.querySelectorAll<HTMLParagraphElement>(".dataClass");
// console.log(allDates);

// allDates?.forEach((date) => {
//     const dateV = new Date(date.innerText);
//     const today = new Date();

//     if (today > dateV) {
//         date.style.backgroundColor = "red";
//     }
// });
