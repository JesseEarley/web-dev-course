//This is code for a "TODO" or "Shopping List"

//variables
var button = document.getElementById("addItem");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");


//Description: This function is called on initial page load. It adds event listeners to existing list items 
//and creates delete buttons for each item.
//Arguments: None
function initialPageLoad(){
    for(i=0; i<li.length; i++){
        addEventListenerToLi(li[i]);
        createDeleteButton(li[i]);
    }
}

//Description: This function will toggle the "done" class
//Arguments: None
function toggleDone(){
    this.classList.toggle("done");
}

//Description: This function will add an event listener to an li element
//Arguments: li that will receive the event listener
function addEventListenerToLi(li){
    li.addEventListener("click",toggleDone);
}

//Description: This function will create a delete button and append it to a list item
//Arguments: li that will have the delete button appended to it
function createDeleteButton(li){
    var deleteButton = document.createElement("button");
    deleteButton.innerText="Delete me";
    deleteButton.addEventListener("click", deleteItem);
    li.appendChild(deleteButton);
}

//Description: This function will delete the parent of the item containing the delete button
//Arguments: None
function deleteItem(){
    this.parentNode.remove();
}

//Description: This function will return the length of the input box
//Arguments: None
function inputLength(){
    return input.value.length;
}

//Description: This function will create a list item containing the value of the input box, call the addEventListenerToLi() and
//createDeleteButton() functions, append the new li to the ul and clear out the input box
//Arguments: None
function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    addEventListenerToLi(li);
    createDeleteButton(li);
    ul.appendChild(li);
    input.value = "";
}

//Description: This function will call the createListElement() function after "Add Item" button is clicked
//Arguments: None
function addListItemAfterClick(){
    if(inputLength() > 0)
    {
        createListElement();
    }
}

//Description: This function will call the createListElement() function after the "Enter" key is pressed while keyboard focus is
//set to the input box
//Arguments: None
function addListItemAfterKeypress(event){
    if(inputLength() > 0 && event.keyCode === 13)
    {
        createListElement();
    }
}

//Call function and add initial event listeners
initialPageLoad();
button.addEventListener("click", addListItemAfterClick);
input.addEventListener("keypress", addListItemAfterKeypress);
