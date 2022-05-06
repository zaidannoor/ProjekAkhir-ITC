const navbar_icon = document.getElementById("navbar-icon");
const arrow = document.getElementById("arrow");

navbar_icon.addEventListener('click' , function(event){
    const nav_link = document.getElementsByClassName("nav-link")[0];
    nav_link.classList.toggle("nav-closed");
});



arrow.addEventListener('click' ,function(event){
    const schedule = document.getElementsByClassName('schedule')[0];
    const film = document.getElementsByTagName('div');
    for(i=0;i<3;i++){
        film[i].classList.toggle('schedule-show');
    }
    schedule.classList.toggle('shadow');
})