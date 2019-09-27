//Creating a blob from users styles.
var stylesBlob = new Blob(['body{color:red}'], {type:'text/css'});
var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = window.URL.createObjectURL(stylesBlob);
document.body.appendChild(link);


//var formData = new FormData(document.forms.namedItem('profileStyle'));

function sendForm(){
    console.log("sending form...");
    var formData = new FormData(document.forms.namedItem('profileStyle'));
    
    //Appending the styleBlob to formData.
    formData.append("styleBlob", stylesBlob, "userStye.css"); 
    
    //Append the imageBlob to formData
    formData.append("imageBlob", getImageBlob(), "userImage.jpg");
    /*
     * The paramter of FormData.append are synonymouse to the following php super global.
     * formData.append($_FILE['photo'], data, $_FILES['photo']['name'])
     */
  
    var req = new XMLHttpRequest();
    req.open("POST", "storeBlob.php", true);
    req.onload = function(event){
        if(req.status == 200){          
            console.log(req.responseText);         
        }else{
            console.log("Error " + req.status + " occured uploading your file");
        }
    }  
    req.send(formData);
}
//var sendBtn = document.querySelector("button"); //Not working
var sendBtn = document.getElementById("send");
sendBtn.addEventListener("click", sendForm, false);

/**
 * Generating blob from dataUrl from src attr of an image.
 */
function getImageBlob(){    
    var imgElem = document.getElementById('dataUrlPix');
    var dataPix = imgElem.getAttribute('src');
    var blobData = convertToBlob(dataPix);    
    console.log("imageBlog apppended to form...");
    return blobData;
}

/**
 * Converts the urlData in an img src attribute to blob.
 */
function convertToBlob(dataPix){
    var byteStr = '';
    var mimeType = '';
    if(dataPix.indexOf('base64')){
        byteStr = atob(dataPix.split(',')[1]); //atob() decodes a base-64 encoded string.
        mimeType = dataPix.split(';')[0].split(':')[1];         
    }else{
        return false;
    }
    var arrayBuffer = new ArrayBuffer(byteStr.length); 
      
    var intArray = new Uint8Array(arrayBuffer);
    for(var i = 0; i<byteStr.length; i++){
        intArray[i] = byteStr.charCodeAt(i);
    }
    
    var blob = new Blob([arrayBuffer], {type: mimeType});
    return blob;  
}