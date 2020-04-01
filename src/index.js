document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // find the form
  const form = document.querySelector('#create-task-form');

  // find a parent to add additional tasks to
  const listParent = document.querySelector('#tasks');
  
  // type of elements to create
  const elementType = 'li';
  const buttonElementType = 'button';

  // the input fields
  const descriptionField = document.getElementById('new-task-description');
  const priorityField = document.getElementById('priority');
  const userField = document.getElementById('user');

  // link priorities to classes to add to them
  const priorityToClass = {
    low:    'green',
    medium: 'yellow',
    high:   'red'
  };

  const priorityToNumber = {
    low:    1,
    medium: 2,
    high:   3
  }

  // add an event listener
  form.addEventListener('submit', function(event){
    // stop the network request from happening
    event.preventDefault();

    // create a new list item
    const newLi = document.createElement(elementType);
      
    // grab the data from the fields
    const description = descriptionField.value;
    const priority = priorityField.value;
    const user = userField.value;

    // make the user text bold
    const userBold = document.createElement('b');
    userBold.append(user);

    // add the data to the list item
    newLi.append(userBold);
    newLi.append(': ');
    newLi.append(description);

    // get the class from the priority
    const theClass = priorityToClass[priority];
    
    // add a class to the list item
    newLi.classList.add(theClass);

    // add a sortable priority (number) to the dataset
    const priorityNumber = priorityToNumber[priority];
    newLi.dataset.priority = priorityNumber;

    // clear the input field
    descriptionField.value = '';

    // create a button element
    const deleteButton = document.createElement(buttonElementType)

    // make it say "x" or "delete"
    deleteButton.append('X');
    
    // add a click listener for the delete button
    deleteButton.addEventListener('click', function(event){
      // delete the list item (the parent) if button clicked
      event.target.parentNode.remove();
    });

    // append it to the list item
    newLi.append(deleteButton);
    
    // append our new list item it to the parent
    if (priorityNumber == 1){

      const existingLi = document.querySelector('[data-priority="2"]');
      listParent.insertBefore(newLi, existingLi);

    } else if (priorityNumber == 2){

      const existingLi = document.querySelector('[data-priority="3"]');
      listParent.insertBefore(newLi, existingLi);

    } else if (priorityNumber == 3){

      listParent.append(newLi);

    } else {

      // this case shouldn't happen
      listParent.append(newLi);

    }


  });

});
