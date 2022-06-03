import './style.css'

console.log('hello')
let topScrollbar = document.getElementById("top-scrollbar")
let botScrollbar = document.getElementById("bot-scrollbar")

topScrollbar.onscroll = function(){
    botScrollbar.scrollLeft = topScrollbar.scrollLeft;
};

botScrollbar.onscroll = function(){
    topScrollbar.scrollLeft = botScrollbar.scrollLeft;
}

function testfunc(){
    console.log("FUCK")
}
let crList = document.getElementById("crList")
let avail_row = document.getElementById("bot-scrollbar"); //prolly will need to replace id


