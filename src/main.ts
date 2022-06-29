import './style.css'
import db from '../data/db.json'

console.log('hello')
let topScrollbar = document.getElementById("top-scrollbar")
let botScrollbar = document.getElementById("bot-scrollbar")

topScrollbar.onscroll = function(){
    botScrollbar.scrollLeft = topScrollbar.scrollLeft;
};

botScrollbar.onscroll = function(){
    topScrollbar.scrollLeft = botScrollbar.scrollLeft;
}


let crList = document.getElementById("crList")
let avail_row = document.getElementById("bot-scrollbar");

let room_html = "";
for (let room in db){
    addRow(db[room])

}



addRow(db["LM 108"])
function addRow(room){
    let crList = <HTMLTableElement> document.getElementById("crList")
    let avails = <HTMLTableElement> document.getElementById("bot-scrollbar");
    //first add room name to crList
    let newRow = crList.insertRow()
    newRow.insertCell().innerHTML = room.name

    //then add the cells for times
    newRow = avails.insertRow()
    newRow.insertCell().innerHTML = " " //min-height not workin so we add whitespace char
    for (let i = 1; i < 24; i++){
        for (let booking in room.bookings){
        }
        newRow.insertCell().style.backgroundColor = "red";

    }
    
}

