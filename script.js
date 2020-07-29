// THIS LINE IS REQUIRED FOR JAVASCRIPT TO READ JQUERY COMMANDS.
$(document).ready(function () {

    // THE div "container" IS CREATED IN THE `index.html` file.
    $(".container").show();

    // var m USES `moment.js` TO RETRIEVE THE CURRENT DATE AND TIME.
    var m = moment().format("dddd, MMMM Do YYYY, h:mm a");
    console.log(m);

    // THIS COMMAND INSERTS THE CURRENT DATE AND TIME FROM THE PREVIOUS LINE INTO THE `p` TAG WITH THE `id` "currentDay".
    $("#currentDay").html(m);

    // THE ARRAY `timeblock` CONTAINS THE LIST OF HOUR TIMEBLOCKS FOR THE SCHEDULE.
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

    // THE for loop WILL CONSTRUCT THE ROWS OF THE CALENDAR WITHIN THE HTML `container` AND NEST THE COLUMNS `time`, `activity`, and `save` IN EACH ROW.
    // EACH ROW AND COLUMN IS ASSIGNED A CLASS.  THE HOURS FROM THE ARRAY ARE ADDED TO THE `time` COLUMN.
    // 'activityInput' IS APPENDED TO THE `activity` COLUMN.  `activity`, and `save` COLUMNS ARE ASSIGNED `data-timeblock`
    // SO THAT THEIR INFORMATION CAN BE RETRIEVED LATER.

    for (var i = 0; i < timeblock.length; i++) {

        var row = $("<div>");
        row.addClass("row");

        var time = $("<div>");
        time.addClass("col-2");
        time.text(timeblock[i]);

        var activity = $("<div>");
        activity.addClass("col-9");
        activity.attr("id", timeblock[i]);

        var activityInput = $("<textarea>");
        activityInput.attr("data-timeblock", timeblock[i]);
        activity.append(activityInput);

        var save = $("<div>");
        save.addClass("col-1");
        save.addClass("saveBtn");
        save.attr("data-timeblock", timeblock[i]);
        save.text("SAVE");

        // THE ON-CLICK EVENT LISTENER IS ADDED TO THE SAVE COLUMN AND THE FUNCTION CREATES VARIABLES  
        // TO STORE THE TIME AND THE USER INPUT FOR THAT ROW OF THE TIMEBLOCK TO LOCAL STORAGE.
        // AN ALERT IS ISSUED IF THE USER DOES NOT INPUT INFORMATION.

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

        // IF THERE IS INFORMATION STORED WITHIN `localStorage` jQuery WILL RETRIEVE THE TIME `key` AND ACTIVITY `event`.
        // THIS INFORMATION WILL BE DISPLAYED IN THE `actvity` COLUMN AT THE APPROPRIATE TIME.

        if (localStorage.getItem(timeblock[i]) !== null) {

            activityInput.text(localStorage.getItem(timeblock[i]));
        }

        // var h WILL RETRIEVE ONLY THE HOUR PROPERTY OF THE CURRENT TIME.
        var h = moment().hour();
        // console.log(h);

        // IF THE CURRENT HOUR IS GREATER THAN THE HOUR FROM THE `timeblock` ARRAY, ASSIGN CLASS PAST (GREY);
        // IF THE CURRENT HOUR IS LESS THAN THE HOUR FROM THE `timeblock` ARRAY, ASSIGN CLASS FUTURE (GREEN);
        // OTHERWISE, ASSIGN CLASS PRESENT (RED).
        
        if (moment().hour() > moment(timeblock[i], "h A").hour()) {

            activity.addClass("past");
        }
        else if (moment().hour() < moment(timeblock[i], "h A").hour()) {

            activity.addClass("future");
        }
        else {
            
            activity.addClass("present");
        }

        // AS EACH CYCLE OF THE LOOP IS COMPLETED, THE `time`, `activity`, and `save` COLUMNS ARE APPENDED TO THE DYNAMIC `row` div.

        row.append(time);
        row.append(activity);
        row.append(save);

        // ONCE THE COLUMNS ARE ADDED TO THE ROW, THE ROW IS ADDED TO THE div "container" FROM THE `index.html` file.

        $(".container").append(row);

    };


});
