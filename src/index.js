document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // find the form
  const form = document.querySelector('#create-task-form');

  // find a parent to add additional tasks to
  const listParent = document.querySelector('#tasks');
  
  // type of elements to create
  const elementType = 'li';
  const buttonElementType = 'button';

  // the input field
  const inputField = document.getElementById('new-task-description');

  // add an event listener
  form.addEventListener('submit', function(event){
    // stop the network request from happening
    event.preventDefault();

    // create a new list item
    const newLi = document.createElement(elementType);
      
    // grab the data from the form
    const inputText = inputField.value;

    // add that data to the list item
    newLi.append(inputText);

    // clear the input field
    inputField.value = '';

    // create a button element
    const deleteButton = document.createElement(buttonElementType)

    // make it say "x" or "delete"
    deleteButton.append('X');
    
    // add a click listener
    deleteButton.addEventListener('click', function(event){
      // delete the list item (the parent) if button clicked
      event.target.parentNode.remove();
    });

    // append it to the list item
    newLi.append(deleteButton);
    
    // append our new list item it to the parent
    listParent.append(newLi);
  });

});
