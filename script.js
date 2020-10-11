// moment.js variable for the moment
let m = moment();
// current time/hour
let currentTime = m.hour();
// save button variable
let buttons = document.getElementsByClassName('saveBtn');
// empty array for the schedule blocks
let scheduleBlocks = [];
// variables for the time blocks on the schedule 
var nine = m.hour(9);
$("#nine").html('9AM');

var ten = m.hour(10);
$('#ten').text('10AM');

var eleven = m.hour(11);
$('#eleven').html('11AM');

var twelve = m.hour(12);
$('#twelve').html('12PM');

var thirteen = m.hour(13);
$('#thirteen').html('1PM');

var thirteen = m.hour(14);
$('#fourteen').html('2PM');

var thirteen = m.hour(15);
$('#fifteen').html('3PM');

var thirteen = m.hour(16);
$('#sixteen').html('4PM');

var thirteen = m.hour(17);
$('#seventeen').html('5PM');
// display the time at the top of the schedule - time and date
let displayTimeP = document.getElementsByClassName('displayTime');
let date = m.format("L");
let time = m.format("LTS");

$('#currentDay').html(`${date}`);
$('#currentTime').html(`${time}`);

// call the view Schedule function on load to view the current schedule
viewSchedule();

// add a class for past, present and future events/appointments for the day
function viewSchedule() {
    $('div .hour').each(function () {
        var hourOptions = parseInt($(this).attr("id").split("-")[1]);
        if (hourOptions < currentTime) {
            $(this).addClass("past");
            $(this).removeClass("present", "future");
        } else if (hourOptions === currentTime) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
            $(this).removeClass("past", "present")
        }
    })

};

// grab items from local storage 
var storedScheduleItems = JSON.parse(localStorage.getItem("scheduleBlocks"));
// on click save the schedule to localStorage and run setSchedule
$("buttons").on("click", setSchedule());

// set schedule function to add text to the schedule blocks, add them to local Storage and append them to the text box.
function setSchedule() {
    let timeBlocks = $(".schedule").val();

    if (timeBlocks !== "") {
        for (var i = 0; i < scheduleBlocks.length; i++) {


            scheduleBlocks.push(timeBlocks);

            localStorage.setItem('scheduleBlocks', JSON.stringify(scheduleBlocks));
            $(".schedule-text").text(scheduleBlocks);
            $(".schedule-text").html(scheduleBlocks[i]);
        }
    } else return;

    let textInput = $('<p>');
    textInput.text(timeBlocks);
    $('.schedule-text').append(textInput);



    event.preventDefault();
}



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