let times = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

let timeNine = document.getElementById('nine').innerHTML = times[0];
let timeTen = document.getElementById('ten').innerHTML = times[1];
let timeEleven = document.getElementById('eleven').innerHTML = times[2];
let timeTwelve = document.getElementById('twelve').innerHTML = times[3];
let timeThirteen = document.getElementById('thirteen').innerHTML = times[4];
let timeFourteen = document.getElementById('fourteen').innerHTML = times[5];
let timeFifteen = document.getElementById('fifteen').innerHTML = times[6];
let timeSixteen = document.getElementById('sixteen').innerHTML = times[7];
let timeSeventeen = document.getElementById('seventeen').innerHTML = times[8];
let displayTimeP = document.getElementsByClassName('displayTime');

let m = moment();

console.log(m.format("L"));




// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist