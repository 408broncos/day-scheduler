var saveBtn = $(".saveBtn");


$('#currentDay').text("The current day is: " + (dayjs().format("dddd")))
function timeBlockColor() {
    var hour = dayjs().hour();

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

saveBtn.on("click", function() {
  console.log("");

    var time = $(this).siblings(".hour").text();
    var description = $(this).siblings(".description").val();

    localStorage.setItem(time, description);
});

function usePlanner() {

    $(".hour").each(function() {
        var currHour = $(this).text();
        var currDescription = localStorage.getItem(currHour);

        if(currDescription !== null) {
            $(this).siblings(".plan").val(currDescription);
        }
    });
}

timeBlockColor();
usePlanner();

