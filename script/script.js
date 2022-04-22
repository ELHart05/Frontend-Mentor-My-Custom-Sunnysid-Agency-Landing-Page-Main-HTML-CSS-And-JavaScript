const icon = document.querySelector('.hamburger');
const navmob = document.querySelector('.nav-mob');
const arrow = document.querySelector('.arrow');
const triangle = document.querySelector('.triangle');

//functionto hide the arrow back the nav mob
function arrowhide() {
    arrow.classList.toggle('arrow-hide');
}

//appear the nav mob with animation and also hiding the arrow with timout of 0.3s
icon.onclick = function nav_mob_shower() {
    setTimeout(arrowhide,300);
    triangle.classList.toggle('triangle-add');
    navmob.classList.toggle('navmob-edit');
}