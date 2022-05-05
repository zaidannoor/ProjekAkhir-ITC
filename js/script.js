const navbar_icon = document.getElementById("navbar-icon");

navbar_icon.addEventListener('click' , function(event){
    const nav_link = document.getElementsByClassName("nav-link")[0];
    nav_link.classList.toggle("nav-closed");
})