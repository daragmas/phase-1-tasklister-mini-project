document.addEventListener("DOMContentLoaded", () => {
  
  let newTaskForm = document.getElementById('create-task-form') //get task form
  let newTaskDescription = document.getElementById('new-task-description') //gets task description
  let taskList = document.getElementById('tasks') //get task list

  newTaskForm.addEventListener("submit",(e)=> { //when submitted...
    e.preventDefault() //stop refresh
    //console.log(newTaskDescription.value)

    //create new line item for task list, and add it to the list
    //TODO: add remove button to the line item
    let li = document.createElement('li') //make new task line item
    li.textContent = newTaskDescription.value //set text of new line item to task descrition
    
    taskList.appendChild(li) // add new task to task list

    newTaskForm.reset() // clear form
  
  })
  });
