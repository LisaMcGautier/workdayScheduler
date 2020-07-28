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



    for (var i = 0; i <= timeblock.length; i++) {

        var row = $("<div>");
        row.addClass("row");    
    
        var time = $("<div>");
        time.addClass("col-2");
        time.text(timeblock[i]);
    
        var activity = $("<div>");
        activity.addClass("col-9");
        activity.attr("id", "" + (timeblock[i]));

        var activityInput = $("<textarea>");
        activity.append(activityInput);

    
        var save = $("<div>");
        save.addClass("col-1");
        save.addClass("saveBtn");
        // save.attr("id", "" + (timeblock[i]));
        
        save.on("click", function(event) {    
            alert("activity saved" + activity + time);
            console.log(event);
        });
       
        row.append(time);
        row.append(activity);
        row.append(save);    
            
        $(".container").append(row);
    
    }



});
