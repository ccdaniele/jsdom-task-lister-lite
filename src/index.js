document.addEventListener("DOMContentLoaded", () => {
  let arrayOfTask = document.getElementById("list")

  const taskForm = document.getElementById("create-task-form")

taskForm.addEventListener("submit", function(event){

  event.preventDefault (); 

  

  const newTask = event.target["new-task-description"].value 

  const listedTask = document.createElement("li"); 

  listedTask.innerText = newTask 
 

  arrayOfTask.append(listedTask)

  // console.log("before", event.target["new-task-description"].value)

   event.target.reset()

  //  console.log("after", event.target["new-task-description"].value)

});






});

