/**
 * Saves form data using localStorage
 */
function saveLocal(){  
   var data = {
                "user" : document.querySelector('#user').value,
                "city" : document.querySelector('#city').value
             };
   localStorage.setItem("localData", JSON.stringify(data));  
   console.log('Data stored locally!')
}

/**
 * Retieves form data from localStorage
 */
function retrieveLocal(){
    if(localStorage.getItem("localData")){
        var localData = localStorage.getItem("localData");
        var data = JSON.parse(localData);
        document.querySelector('#user').value = data.user;
        document.querySelector('#city').value = data.city;
    }
}

/**
 * Saves form data using sessionStorage.
 */
function saveSession(){
    var data = {
                   "dev" : document.querySelector('#dev').value,
                   "lang" : document.querySelector('#lang').value 
               }
    sessionStorage.setItem("sessionData", JSON.stringify(data));
    console.log('Session data saved!');
}

/**
 * Retrieve session data from web storage.
 */
function retrieveSession(){
    if(sessionStorage.getItem('sessionData')){
        var sessionData = sessionStorage.getItem('sessionData');
        var data = JSON.parse(sessionData);
        document.querySelector('#dev').value = data.dev;
        document.querySelector('#lang').value = data.lang
    }
}


window.addEventListener('load', function(){
    retrieveLocal();
    retrieveSession();
    
    var localBtn = document.querySelector("#localBtn");
    localBtn.addEventListener('click', saveLocal);
    
    var sessionBtn = document.querySelector('#sessionBtn');
    sessionBtn.addEventListener('click', saveSession);
    
});