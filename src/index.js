document.addEventListener("DOMContentLoaded", () => {
  
  let newTaskForm = document.getElementById('create-task-form') //get task form
  let newTaskDescription = document.getElementById('new-task-description') //gets task description
  let prioritySelection = document.getElementById('priority-selection')
  let taskList = document.getElementById('tasks') //get task list

  newTaskForm.addEventListener("submit",(e)=> { //when submitted...
    e.preventDefault() //stop refresh

    let li = document.createElement('li') //make new task line item
    let p = document.createElement('p')
    p.textContent = newTaskDescription.value //set text of new line item to task descrition
    li.className = prioritySelection.value

    let removeBtn = document.createElement('button')
    removeBtn.innerHTML = ' X'
    removeBtn.className = 'remove-task'
    li.append(p, removeBtn)

    taskList.appendChild(li) // add new task to task list

    newTaskForm.reset() // clear form

    p.addEventListener('dblclick', () => {
      console.log('double click')
      let currentPriority = li.className
      li.setAttribute('class', prompt('Edit Task Priority', li.className))
      if(li.className == 'null'){li.setAttribute('class',currentPriority)}
    })

    p.addEventListener('click',()=>{
      let originalDescription = p.textContent
      p.textContent = prompt('Edit Task Description', p.textContent)
      if(p.textContent == ''){p.textContent=originalDescription}
    })

    removeBtn.addEventListener('click', ()=>{
      if (confirm('Remove Task?')){
        taskList.removeChild(li)
      }
    })
  })
});
