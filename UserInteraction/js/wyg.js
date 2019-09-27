//Making the whole content of the page editable
var makeEdit = document.getElementById("makeEdit");
makeEdit.addEventListener("click", makePageEditable);
function makePageEditable(){
    if(document.designMode === "off"){
        document.designMode = "on";
    }else{
        document.designMode = "off";
    }
}

var showMarkup = document.getElementById("showMarkup");
showMarkup.addEventListener("click", showPageMarkup);
function showPageMarkup(){
    var textArea = document.getElementById("exportContent");
    var html = "<html>"+document.documentElement.innerHTML+"</html>";
    textArea.value = html;
}