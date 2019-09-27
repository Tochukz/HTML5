/*:::::::Drag and drop functionality for HTML element(div) ::::::*/

//Adding event listener for dragstart and dragend events on the circles.
var circles = document.querySelectorAll(".dragItems div");
for(var i=0; i<circles.length; i++){
    circles[i].addEventListener("dragstart", startDrag, false);
    circles[i].addEventListener("dragend", endDrag, false);
}

function startDrag(event){
    this.style.border = "dotted black 2px";
    event.dataTransfer.setData("text", this.className); //because we are tansfering "text" data
    
}

function endDrag(event){
    this.style.border = "none";
}

//Adding event listener for the dragenter and dragleave event on the target div or drop zone.
var target = document.querySelector(".dragTarg");
target.addEventListener("dragenter", function(e){
   this.style.border = "dotted green 3px";
});

target.addEventListener("dragleave", function(e){
   this.style.border = "solid #333 3px"; 
});

target.addEventListener("dragover", function(e){
   e.preventDefault(); 
});

target.addEventListener("drop", dropIt, false);


function dropIt(event){
    event.preventDefault();
    var dragedElem = document.querySelector(".dragItems ." + event.dataTransfer.getData("text"));    
    this.appendChild(dragedElem);
    this.style.border = "solid #333 3px"; 
}


/*:::Implementing drag and drop functionality for files from server to local PC:::*/

//Draging file out of the beowser to the local computer.
var fileCircles = document.querySelectorAll(".dragItemsC div");
for(var j=0; j<fileCircles.length; j++){
    fileCircles[j].addEventListener("dragstart", fileStart, false);
}

function fileStart(event){
    event.dataTransfer.setData("DownloadURL", this.getAttribute("data-downloadurl"));
}

/*Dragging files from local computer onto the browser and getting content of the text file.*/
var textSpace = document.querySelector("#textspace");
textSpace.addEventListener("dragover", function(e){ e.preventDefault()});
textSpace.addEventListener("drop", readFile, false);

function readFile(event){
    event.stopPropagation(); //Stops some browser from redirecting.
    event.preventDefault();
    
    var filelist = event.dataTransfer.files;
    if(filelist.length>0){
        var file = filelist[0];
        var filereader = new FileReader();
        filereader.onloadend = function(e){
          //textSpace.value = filereader.result; 
          textSpace.value = this.result;
        };
        
        filereader.readAsText(file);        
        //The readAsText method must be called after the file has finished loading otherwise you will get a blanck result.
    }
}