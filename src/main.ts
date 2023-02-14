import './style.css'
import db from '../data/db.json'

type roomStruct = {
    name: string;
    info: string;
    bookings: bookingStruct;
}
type bookingStruct = {
    name: string; 
    days: number[]; 
    start: string; 
    end: string; 
    crn: number; 
}[]

// ---- SCROLLBAR SYNC -----
let topScrollbar = document.getElementById("top-scrollbar")
let botScrollbar = document.getElementById("bot-scrollbar")

topScrollbar.onscroll = function(){
    botScrollbar.scrollLeft = topScrollbar.scrollLeft;
};

botScrollbar.onscroll = function(){
    topScrollbar.scrollLeft = botScrollbar.scrollLeft;
}
// ---- END SCROLLBAR -----

//Set time
let dateTime = new Date();
dateTime.getDay()
let dateHTML = document.getElementById("date")
dateHTML.innerHTML = "Showing open classrooms for: " + dateTime.toDateString()


generateTable();



function generateTable(){
    let crList = <HTMLTableElement> document.getElementById("crList");
    let avails = <HTMLTableElement> document.getElementById("bot-scrollbar");
    crList.innerHTML = "<tr><th>Classrooms</th></tr>";
    avails.innerHTML = ""; 
    for (let room in db){
        addRow(db[room])
    }
}






/**
 * Fill a classroom row with data
 * @param  {roomStruct} room structure containing all data about the classroom
 */
function addRow(room: roomStruct){
    let crList = <HTMLTableElement> document.getElementById("crList");
    let avails = <HTMLTableElement> document.getElementById("bot-scrollbar");
    //first add room name to crList
    let newRow = crList.insertRow()
    newRow.insertCell().innerHTML = room.name

    //then add the cells for times
    newRow = avails.insertRow()
    newRow.insertCell().innerHTML = " " //min-height not workin so we add whitespace char
    newRow.cells[0].style.backgroundColor = "#34ace0";

    for (let i = 2; i <= 24; i++){
        newRow.insertCell().style.backgroundColor = "#34ace0"; //default everything is green
    }
    for (let booking of room.bookings){
        if (booking.days.includes(dateTime.getDay())){ /* If there's a booking at curDay */
            //cells[0-23]
            let start = Number(booking.start.slice(0,2))-1
            let end = Number(booking.end.slice(0,2))-1
            let bookingTitle = booking.name + "\n" + booking.start.slice(0,5) + "-" + booking.end.slice(0,5);
            for (let s = start; s <= end; s++){
                newRow.cells[s].style.backgroundColor = "#ff5252";
                newRow.cells[s].title = bookingTitle;
        }    

        }
    }
}

/* function hoverText(this : HTMLTableCellElement){
    console.log(this.getAttribute("className"))
    //TODO: better hover func: check https://www.w3schools.com/howto/howto_css_display_element_hover.asp
    return;
} */



