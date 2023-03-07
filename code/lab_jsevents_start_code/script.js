const enterButton = document.querySelector("#enter");
const newToDo = document.querySelector("#new-todo");
const toDoList = document.querySelector("#list");
const dateButton = document.querySelector("#date-button");
const date = document.querySelector("#todays-date");

enterButton.addEventListener("click",(event)=>{
    //makes a <li> element
    li = document.createElement("li");
    //get new text
    const newText = newToDo.value;
    //put it in a <p>
    p = document.createElement("p");
    p.innerText = newText;
    //adds the todo as text to the li element
    li.appendChild(p);
    //makes a <button> element called delete
    button = document.createElement("button");
    button.setAttribute("class", "delete")
    button.innerText = "Delete"
    //make checkbox and label
    checkboxDiv = document.createElement("div")
    checkbox = document.createElement("input")
    checkbox.setAttribute("type","checkbox")
    checkbox.setAttribute("class","complete")
    checkboxDiv.appendChild(checkbox);
    label = document.createElement("label");
    label.setAttribute("for","complete");
    label.innerText = "Complete";
    checkboxDiv.appendChild(label);
    //adds the button and checkbox to the li element
    li.appendChild(checkboxDiv);
    li.appendChild(button);
    //adds li element to toDoList
    toDoList.appendChild(li);
    //add the event listener for the delete button
    button.addEventListener("click",(event)=>{
        //find which delete button we pressed
        const elementToRemove = event.target.parentNode;
        //remove corresponding todolist item
        toDoList.removeChild(elementToRemove);
    });
});

dateButton.addEventListener("click",()=>{
    date.innerText = Date();
})