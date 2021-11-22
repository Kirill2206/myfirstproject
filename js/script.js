var burger = document.querySelector('.click-menu');
var menulist = document.querySelector('.berger-menu');
var closebtn = document.querySelector('.close');



burger.onclick = function(){
    menulist.classList.add('show');
}

closebtn.onclick = function(){
    menulist.classList.remove('show');
}

var filter = document.querySelector('#click-filter');
var sideBar = document.querySelector('#menu');
var closefilter = document.querySelector('.close-filter');

filter.onclick = function(){
    sideBar.classList.toggle('show-filter');
}
closefilter.onclick = function(){
    sideBar.classList.remove('show-filter');
}

var searchbtn = document.querySelector('#click-search');
var search = document.querySelector('.search');

searchbtn.onclick = function(){
    search.classList.toggle('show-search');
}