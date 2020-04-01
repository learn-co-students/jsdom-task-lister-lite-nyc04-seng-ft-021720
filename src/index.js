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

    // put the description in a span tag
    const descriptionSpan = document.createElement('span');
    descriptionSpan.append(description);

    // add the data to the list item
    newLi.append(userBold);
    newLi.append(': ');
    newLi.append(descriptionSpan);

    // get the class from the priority
    const theClass = priorityToClass[priority];
    
    // add a class to the list item
    newLi.classList.add(theClass);

    // add a sortable priority (number) to the dataset
    const priorityNumber = priorityToNumber[priority];
    newLi.dataset.priority = priorityNumber;

    // clear the input field
    descriptionField.value = '';
    userField.value = '';

    // create some button elements
    const deleteButton = document.createElement(buttonElementType);
    const editButton = document.createElement(buttonElementType);

    // make it say "X" for delete and "edit" for edit
    deleteButton.append('X');
    editButton.append('edit');
    
    // add a click listener for the edit button
    editButton.addEventListener('click', function(event){
      // edit the list item (the parent) if button clicked
      
      // get the nodes
      const userNode = event.target.parentNode.querySelector('b');
      const descriptionNode = event.target.parentNode.querySelector('span');

      // hide the nodes
      event.target.classList.add('hide');
      userNode.classList.add('hide');
      descriptionNode.classList.add('hide');

      // get the values from our text elements
      let userText = userNode.textContent;
      let descriptionText = descriptionNode.textContent;

      // create new elements
      userInput = document.createElement('input');
      descriptionInput = document.createElement('input');
      doneButton = document.createElement('button');

      // pre-fill values into the fields
      userInput.value = userText;
      descriptionInput.value = descriptionText;
      doneButton.append('done');
      

      // add some id's for accessing the values later
      userInput.id = 'edit-user-field';
      descriptionInput.id = 'edit-description-field';

      // add the new elements to the page
      event.target.parentNode.insertBefore(userInput, userNode);
      event.target.parentNode.insertBefore(descriptionInput, descriptionNode);
      newLi.insertBefore(doneButton, deleteButton);

      doneButton.addEventListener('click', function(event){

        // set the list items to the new value
        userNode.textContent = userInput.value
        descriptionNode.textContent = descriptionInput.value

        // delete the input fields
        userInput.remove();
        descriptionInput.remove();
        event.target.remove();

        // show the updated nodes 
        userNode.classList.remove('hide');
        descriptionNode.classList.remove('hide');
        editButton.classList.remove('hide');
                
      });
    });
    
    // add a click listener for the delete button
    deleteButton.addEventListener('click', function(event){
      // delete the list item (the parent) if button clicked
      event.target.parentNode.remove();
    });

    // append the buttons to the list item
    newLi.append(editButton, deleteButton);
    
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
