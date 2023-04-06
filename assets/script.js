//setting variable for savBtn
var saveBtn = $(".saveBtn");

//using dayjs to post current day of the week
$('#currentDay').text("The current day is: " + (dayjs().format("dddd")))
function timeBlockColor() {
    var hour = dayjs().hour();

    //giving every time-block class a color code for "future" "present" "past"
    $(".time-block").each(function() {
        var currHour = parseInt($(this).attr("id"));


        if (currHour > hour) {
            $(this).addClass("future");
        } else if (currHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

//giving the saveBtn an eventlistener so you can click and save with it
saveBtn.on("click", function() {
  console.log("");

    var time = $(this).siblings(".hour").text();
    var description = $(this).siblings(".description").val();

    //storing the content into a localstorage
    localStorage.setItem(time, description);
});

//when refreshing the saved content, everything should still be in that time-block
function usePlanner() {

    $(".hour").each(function() {
        var currHour = $(this).text();
        var currDescription = localStorage.getItem(currHour);

        if(currDescription !== null) {
            $(this).siblings(".description").val(currDescription);
        }
    });
}

timeBlockColor();
usePlanner();

