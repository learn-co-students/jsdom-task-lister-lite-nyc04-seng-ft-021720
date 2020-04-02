document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("#create-task-form")
  const list = document.querySelector("#tasks")
  const urgencies = ["High", "Medium", "Low"]
  const selectList = document.createElement("select")
  for (let i = 0; i < urgencies.length; i++){
    let option = document.createElement("option")
    option.value = urgencies[i]
    option.text = urgencies[i]
    selectList.appendChild(option)
  }
  // const submit = document.querySelector("")
  form.prepend(selectList)

  // add a collection select to the form that allows us to change the text.style.color -->
// change color of the actual li, not the description
  form.addEventListener("submit", function(e){
    e.preventDefault()
    let description = document.querySelector("#new-task-description").value
    
    let li = document.createElement("li")
    li.style.color = "red"
    let button = document.createElement("button", {'data-descripton': description})
    button.innerText = "X"

    // tried this first, where we created a button with lets and assigned it to a string that we'd add to the innerHTML of li
    // doing that added the innerhtml properly, but we needed to be able to add an event listener to that button
    // and you can only perform event listeners on elements, not strings
    // if we use a createElement, we can get the button with the correct info as an element
    // button.innerHTML = `<button data-description= ${description}>X</button>`

    li.innerHTML = description
    li.append(button)

    // let btn = document.querySelector(`[data-description]`)
    button.addEventListener("click", function(ev){ 
      ev.target.parentElement.remove() 
    })

    // button.addEventListener("click", function(f){
    //   // f.preventDefault()
    //   list.removeChild()
    // })
    
    list.append(li)
    
  })

// <button data-description="dfgdsfgdsfg">X</button>

  
});
