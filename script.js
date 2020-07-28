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
        
        save.on("click", function(event) {    
            alert("activity saved");
            // console.log(event);
            // console.log(event.target);
            // console.log(event.target.dataset);
            // console.log(event.target.dataset.timeblock);

            var timeblockId = (event.target.dataset.timeblock);
            console.log(timeblockId);

            // console.log($(".col-9").find`[data-timeblock='${timeblockId}']`);
            // console.log($("textarea[data-timeblock='" + timeblockId + "']").val());
            
            var userInput = $("textarea[data-timeblock='" + timeblockId + "']").val();
            console.log(userInput);

            localStorage.setItem(timeblockId, userInput);
            
            // console.log(activity);
            // console.log(time);
        });
       
        row.append(time);
        row.append(activity);
        row.append(save);    
            
        $(".container").append(row);
    
    }



});
