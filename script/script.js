const icon = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-bar');
const navmob = document.querySelector('.nav-mob');
const arrow = document.querySelector('.arrow');
const triangle = document.querySelector('.triangle');

icon.onclick = function nav_mob_shower() {
    arrow.classList.toggle('arrow-hide');
    triangle.classList.toggle('triangle-add');
    navmob.classList.toggle('navmob-edit');
}