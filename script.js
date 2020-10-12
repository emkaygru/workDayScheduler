// moment.js variable for the moment
let m = moment();
// current time/hour
let currentTime = m.format('h:mma');
// save button variable
let buttons = document.getElementsByClassName('saveBtn');
// empty array for the schedule blocks
let tempStorage = [];
let apptText = '';
let apptTime = '';

let timeBlockContainer = document.getElementsByClassName('time-block');
// previous Appts are previous appts saved on local Storage
let previousAppts;
// saved Appts are the appts saved during the current session  - will become previous one refreshed
let savedAppts;

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
let date = m.format("dddd MMM Do");

// call the view Schedule function on load to view the current schedule
// viewSchedule();
$(document).ready(function () {
    $('#currentDay').html(`${date}`);
    $('#currentTime').html(`${currentTime}`);



    function viewSchedule() {

        savedAppts = JSON.parse(localStorage.getItem('scheduleBlocks'));

        if (savedAppts !== null) {
            for (i = 0; i < savedAppts.length; i++) {
                previousAppts = savedAppts[i];
                details = previousAppts.details;
                timeIndex = previousAppts.time;

                // if (details !== null) {
                //     $("#" + timeIndex).children('div').children('div').children('textarea').val(details);
                // }
            }
        }

    };


    viewSchedule();

    for (i = 0; i <= 23; i++) {
        let hour = document.getElementsByClassName('hour');

        if (hour === currentTime) {
            $('div.inputText').addClass('present').removeClass('future').removeClass('past');

        } else if (hour < currentTime) {
            $('div.inputText').addClass('past');

        } else {
            $('div.inputText').addClass('future').removeClass('past').removeClass('present');

        }
    }
    // $(document.body).click(function () {

    //     $("div.inputText").each(function (i) {
    //         if (hour === currentTime) {
    //             $(this).addClass('present').removeClass('future').removeClass('past');
    //         } else if (hour > currentTime) {
    //             $(this).addClass('past');
    //         } else {
    //             $(this).addClass('future').removeClass('past').removeClass('present');

    //         }
    //     });
    // });

})
// add a class for past, present and future events/appointments for the day

$('.saveBtn').click(function () {
    apptText = $(this).parent('div').children('div').children('textarea').val();
    apptTime = $(this).parent('div').parent().attr('id');
    appt = {
        time: apptTime,
        details: apptText
    }

    tempStorage = JSON.parse(localStorage.getItem('scheduleBlocks'));

    if (tempStorage === null) {
        localStorage.setItem('scheduleBlocks', JSON.stringify([{
            time: apptTime,
            details: apptText
        }]));
    } else {
        tempStorage.push(appt);
        localStorage.setItem('scheduleBlocks', JSON.stringify(tempStorage));
    }
    $(this).parent('div').children('div').children('textarea').replaceWith($('<textarea>' + apptText + '</textarea>').addClass('textAreaInput'));
})






// grab items from local storage 
// var storedScheduleItems = JSON.parse(localStorage.getItem("scheduleBlocks"));
// on click save the schedule to localStorage and run setSchedule
// $("buttons").on("click", setSchedule());

// // set schedule function to add text to the schedule blocks, add them to local Storage and append them to the text box.
// function setSchedule() {
//     let timeBlocks = $(".schedule").val();

//     if (timeBlocks !== "") {
//         for (var i = 0; i < scheduleBlocks.length; i++) {


//             scheduleBlocks.push(timeBlocks);

//             localStorage.setItem('scheduleBlocks', JSON.stringify(scheduleBlocks));
//             $(".schedule-text").text(scheduleBlocks);
//             $(".schedule-text").html(scheduleBlocks[i]);
//         }
//     } else return;

//     let textInput = $('<p>');
//     textInput.text(timeBlocks);
//     $('.schedule-text').append(textInput);



//     event.preventDefault();
// }



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