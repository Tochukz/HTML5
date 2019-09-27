window.history.pushState("pg1", "page1", "http://localhost/html5/userInteraction/history.php#page1");
window.history.pushState("pg2", "page2", "http://localhost/html5/userInteraction/history.php#page2");
window.history.pushState("pg3", "page3", "http://localhost/html5/userInteraction/history.php#page3");
window.history.pushState("pg4", "page4", "http://localhost/html5/userInteraction/history.php#page4");
window.history.pushState("pading", "readytogo");

window.addEventListener("popstate", changePage, false);
function changePage(event){
    switch(window.history.state){
        case "pg1":
            gotoPage(1);
            break;
        case "pg2":
            gotoPage(2);
            break;
        case "pg3":
            gotoPage(3);
            break;
        case "pg4":
            gotoPage(4);
            break;
        default:
            //do nothing            
        
    }
}

function gotoPage(pg){
    var img = document.querySelector("#page img");
    img.setAttribute('src', '../assets/image'+pg+'.jpg');
}