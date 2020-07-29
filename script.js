$(document).ready(function () {

    $(".container").show();

    var m = moment().format("dddd, MMMM Do YYYY, h:mm a");
    console.log(m);

    // console.log(moment().format("dddd, MMMM Do YYYY, h:mm a"));
    // console.log(moment().format("h:mm a"));
    // console.log(moment().format("h A"));
    // console.log(moment("8 PM", "h A"));

    $("#currentDay").html(m);

    var timeblock = [
        "8 AM",
        "9 AM",
        "10 AM",
        "11 AM",
        "12 PM",
        "1 PM",
        "2 PM",
        "3 PM",
        "4 PM",
        "5 PM",
    ];

    for (var i = 0; i < timeblock.length; i++) {

        var row = $("<div>");
        row.addClass("row");

        var time = $("<div>");
        time.addClass("col-2");
        time.text(timeblock[i]);

        var activity = $("<div>");
        activity.addClass("col-9");
        activity.attr("id", "" + (timeblock[i]));

        var activityInput = $("<textarea>");
        activityInput.attr("data-timeblock", timeblock[i]);
        activity.append(activityInput);

        var save = $("<div>");
        save.addClass("col-1");
        save.addClass("saveBtn");
        save.attr("data-timeblock", timeblock[i]);
        save.text("SAVE");

        save.on("click", function (event) {

            var timeblockId = (event.target.dataset.timeblock);
            console.log(timeblockId);

            var userInput = $("textarea[data-timeblock='" + timeblockId + "']").val();
            console.log(userInput);

            if (userInput == "") {
                alert("Please enter an activity");
            }
            else {
                localStorage.setItem(timeblockId, userInput);
                alert("Activity saved for " + timeblockId);
            }

        });

        // console.log(localStorage.getItem(timeblock[i]) !== null);
        // console.log(activityInput);

        if (localStorage.getItem(timeblock[i]) !== null) {
            //     activityInput.value = localStorage.getItem(timeblock[i]);
            activityInput.text(localStorage.getItem(timeblock[i]));
        }


        if (moment() > moment(timeblock[i], "h A")) {
            // assign class past
            activity.addClass("past");        
        }

        else if (moment() < moment(timeblock[i], "h A")) {
            // assign class future
            activity.addClass("future");
        }

        else {
            //assign class present
            activity.addClass("present");
        }


        row.append(time);
        row.append(activity);
        row.append(save);

        $(".container").append(row);

    };


});
