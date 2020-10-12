// moment.js variable for the moment
let m = moment();
// current time/hour
let currentTime = m.format('h:mma');

// empty array for the schedule blocks
let tempStorage = [];
let apptText = '';
let apptTime = '';

let timeBlockContainer = document.getElementsByClassName('time-block');

var storedAppointments;
var returnedAppointments;

// variables for the time blocks on the schedule 
var nine = $("#nine").html('9AM');
var ten = $('#ten').html('10AM');
var eleven = $('#eleven').html('11AM');
var twelve = $('#twelve').html('12PM');
var thirteen = $('#thirteen').html('1PM');
var thirteen = $('#fourteen').html('2PM');
var thirteen = $('#fifteen').html('3PM');
var thirteen = $('#sixteen').html('4PM');
var thirteen = $('#seventeen').html('5PM');

// display the time at the top of the schedule - time and date
let date = m.format("dddd MMM Do");

$(document).ready(function () {
    $('#currentDay').html(`${date}`);
    $('#currentTime').html(`${currentTime}`);

    // console.log(localStorage);

    function viewSchedule() {

        storedAppointments = JSON.parse(localStorage.getItem('scheduleBlocks'));

        if (storedAppointments !== null) {
            for (i = 0; i < storedAppointments.length; i++) {
                returnedAppointments = storedAppointments[i];
                details = returnedAppointments.details;
                timeIndex = returnedAppointments.time;

                if (details !== null) {
                    $("#" + timeIndex).children('div').children('div').children('textarea').val(details);
                }
            }

        }


        function changeColor() {
            for (i = 9; i <= 17; i++) {
                let scheduleTime = moment().hour();
                scheduleTime = i;

                if (currentTime === i) {
                    $('.inputText' + i).addClass('present');

                } else if (currentTime > i) {
                    $('.inputText' + i).addClass('past');

                } else {
                    $('.inputText' + i).addClass('future');

                }
            }
        }

        changeColor();
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

    }
    viewSchedule();
});


// add a class for past, present and future events/appointments for the day
let time = document.getElementsByClassName('display-time');
let data = document.getElementsByClassName('inputText');

// localStorage.setItem("scheduleBlocks " + time, data);
$('.saveBtn').click(function () {
    apptText = $(this).parent('div').children('div').children('textarea').val();
    apptTime = $(this).parent('div').parent().attr('id');
    let appointment = {
        time: apptTime,
        details: apptText
    };

    tempStorage = JSON.parse(localStorage.getItem('scheduleBlocks'));
    localStorage.setItem('scheduleBlocks', JSON.stringify([{
        time: apptTime,
        details: apptText
    }]));
    if (tempStorage === null) {
        localStorage.setItem('scheduleBlocks', JSON.stringify([{
            time: apptTime,
            details: apptText
        }]));
    } else {
        tempStorage.push(appointment);
        localStorage.setItem('scheduleBlocks', JSON.stringify(tempStorage));
    }
    $(this).parent('div').children('div').children('textarea').replaceWith($('<textarea>' + apptText + '</textarea>').addClass('textAreaInput'));


});





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