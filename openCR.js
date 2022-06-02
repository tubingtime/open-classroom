console.log('hello');
var topScrollbar = document.getElementById("top-scrollbar");
var botScrollbar = document.getElementById("bot-scrollbar");
topScrollbar.onscroll = function () {
    botScrollbar.scrollLeft = topScrollbar.scrollLeft;
};
botScrollbar.onscroll = function () {
    topScrollbar.scrollLeft = botScrollbar.scrollLeft;
};
