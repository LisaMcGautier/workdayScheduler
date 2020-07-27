$(document).ready(function () {

    $(".container").show();

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

    // var block = $("<div>");

    // var row = $("<div> class = 'row'");

    // var time = $("<div> class = 'col-2'");
    // var activty = $("<div> class = 'col-9'");
    // var save = $("<div> class = 'col-1'");

    // $(".row").append(time);
    // $(".row").append(activity);
    // $(".row").append(save);


    // var row = $("<div>");
    // row.addClass("row");

    // var time = $("<div>");
    // time.addClass("col-2");
    // time.text(timeblock[i]);

    // var activity = $("<div>");
    // activity.addClass("col-9");

    // var save = $("<div>");
    // save.addClass("col-1");

    // row.append(time);
    // row.append(activity);
    // row.append(save);


    // for (var i = 0; i < timeblock.length; i++) {       
    //     $(".container").append(row);
    // };

    for (var i = 0; i < timeblock.length; i++) {

        var row = $("<div>");
        row.addClass("row");    
    
        var time = $("<div>");
        time.addClass("col-2");
        time.text(timeblock[i]);
    
        var activity = $("<div>");
        activity.addClass("col-9");

        var activityInput = $("<textarea>");
        activity.append(activityInput);
    
        var save = $("<div>");
        save.addClass("col-1");
        save.addClass("saveBtn");
        
        save.on("click", function(event) {
            alert("activity saved");
            console.log(event);
        });
       
        row.append(time);
        row.append(activity);
        row.append(save);    
            
        $(".container").append(row);
    
    }



});
