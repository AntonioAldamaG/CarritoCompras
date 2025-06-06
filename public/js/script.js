window.onload = function () {
    document.getElementById("mainMenuBto").onclick = function () {
    var menu = document.getElementById("mainMenu");
    if (menu.className === "topnav"){
        menu.className += " responsive";
    }else{
        menu.className = "topnav";
    }
    }
}