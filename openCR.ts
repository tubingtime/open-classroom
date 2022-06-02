console.log('hello')
let topScrollbar = document.getElementById("top-scrollbar")
let botScrollbar = document.getElementById("bot-scrollbar")

topScrollbar.onscroll = function(){
    botScrollbar.scrollLeft = topScrollbar.scrollLeft;
};

botScrollbar.onscroll = function(){
    topScrollbar.scrollLeft = botScrollbar.scrollLeft;
}
