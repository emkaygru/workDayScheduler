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
var nine = $("#9");
var ten = $('#10');
var eleven = $('#11');
var twelve = $('#12');
var thirteen = $('#13');
var fourteen = $('#14');
var fifteen = $('#15');
var sixteen = $('#16');
var seventeen = $('#17');


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
            // for (i = 9; i <= 17; i++) {
            // let currentTime = new Date.getHours();

            // var hour = parseInt($(this).attr("id"));
            // let hour = parseInt(document.getElementsByClassName('time-block')[i].id);
            // let hour = document.getElementsByClassName('hour');
            hour = m.hours();
            $(".time-block").each(function () {
                var thisHour = parseInt($(this).attr("id"));
                if (hour > currentTime) {
                    $(this).addClass('future');

                } else if (hour === currentTime) {
                    $(this).addClass('present');

                } else {
                    $(this).addClass('past');

                }
                console.log(hour);
            })
        };

        changeColor();



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