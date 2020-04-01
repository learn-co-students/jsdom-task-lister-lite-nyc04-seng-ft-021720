document.addEventListener("DOMContentLoaded", () => {

  // declare const variable referencing the create-task-form form tag
  const createTaskForm = document.querySelector("#create-task-form");
  // add event listener to be called on the submit button, and storing data in the events (e)
  createTaskForm.addEventListener("submit", function (e) {

    // prevent submit button from sending a push request
    e.preventDefault();

    // declaring a new variable that is assigned the value inputted into input#new-task-description
    const taskDescription = e.target.querySelector('input#new-task-description').value;

    // invoking the createTask function passing in the agrument containing data from input field
    createTask(taskDescription);
})
});

// declare variable that references the parent HTML element
const tasksUl = document.querySelector("ul#tasks");

// creating the child HTML element containing data outputted from the form submission
function createTask(taskObj) {

  // declare variable that creates a new list item
  const taskLi = document.createElement("li")
  // add child elements to the list item and populate with data from form submission
  taskLi.innerHTML = `
    ${taskObj}
    <button data-description="${taskObj}">X</button>
  `
  // append parent HTML element <ul> with completed <li> HTML element and substructure
  tasksUl.append(taskLi)
}
