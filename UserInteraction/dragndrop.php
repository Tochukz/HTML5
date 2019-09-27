<?php require_once("header.html"); ?>
<section>
<div class="container">
    <div class="row">
        <div class="col-sm-6">
            <h1>HTML5 Drag and Drop</h1>
            <p>Drag any of the circle into this can.</p>
            <div class="span-6 dragTarg" dropzone="true">

            </div>       
            <div class="span-6 dragItems" >
                <div draggable="true" class="red"></div>
                <div draggable="true" class="green"></div>
                <div draggable="true" class="blue"></div>
            </div>
        </div>
        <div class="col-sm-6">
            <h1>File Drag and Drop Transfer</h1>
            <p>Drag any of the circles to your desktop to get a file.</p>
            <div class="span-6 dragItemsC">
                <div class="red" draggable="true" data-downloadurl="application/octet-stream:colorRed.txt:this is the color red"></div>
                <div class="green" draggable="true" data-downloadurl="applcation/octet-stream:greenFile.txt:http://localhost/html5/assets/green.txt"></div>
                <div class="blue" draggable="true" data-downloadurl="application/octet-stream:blueFile.tmp:http://localhost/html5/assets/blue.tmp"></div>
            </div>
            <div>               
                <textarea class="form-control" cols="10" rows="5" id="textspace"></textarea>
                <h4>Drag a text file into the textarea to get the file content.</h4>
            </div>
        </div>
    </div>
</div>
</section>
<?php 
   $scriptTag = '<script src="js/app.js"></script>'; 
   require_once("footer.html"); 
?>