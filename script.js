// moment.js variable for the moment
let m = moment();
// current time/hour
let currentTime = m.format('h:mma');
// empty array for the schedule blocks
let timeBlockContainer = document.getElementsByClassName('time-block');

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
function currentDate() {

    $("#currentDay").text(moment().format("dddd MMMM Do"));
    $('#currentTime').html(`${currentTime}`);



}
currentDate();




// add to localStorage
$(".time-block").each(function () {
    var id = $(this).attr("id");
    var schedule = localStorage.getItem(id);

    if (schedule !== null) {
        $(this).children(".schedule").val(schedule);
    }
});



function changeColor() {


    $(".time-block").each(function () {
        hour = m.hours();
        var thisHour = parseInt($(this).attr("id"));
        if (thisHour > hour) {
            $(this).addClass('future');

        } else if (thisHour === hour) {
            $(this).addClass('present');
        } else {
            $(this).addClass('past');
        }
        // console.log(hour);
    });
}
changeColor();

// save button class as a variable
var saveBtn = $(".saveBtn");
//on click function
saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();

    localStorage.setItem(time, schedule);
});