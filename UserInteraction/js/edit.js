/*Making content editable*/
//Saving the edited content to local storage.
var editableDiv = document.getElementById("editableDiv");
var setEditMemory = function(content){
    localStorage.setItem("editedContent", editableDiv.innerHTML);
}
editableDiv.addEventListener("blur", setEditMemory);

//Using the edited content when the user revisits the page.
if(localStorage.getItem("editedContent")){
    editableDiv.innerHTML = localStorage.getItem("editedContent")  ;
}