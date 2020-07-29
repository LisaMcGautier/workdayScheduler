# workdayScheduler
# 05 Third-Party APIs: Work Day Scheduler

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

[]You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
[X]WHEN I open the planner
[X]THEN the current day is displayed at the top of the calendar
[X]WHEN I scroll down
[X]THEN I am presented with timeblocks for standard business hours
[X]WHEN I view the timeblocks for that day
[X]THEN each timeblock is color coded to indicate whether it is in the past, present, or future
[X]WHEN I click into a timeblock
[X]THEN I can enter an event
[X]WHEN I click the save button for that timeblock
[X]THEN the text for that event is saved in local storage
[X]WHEN I refresh the page
[X]THEN the saved events persist
```

7/26

Started by creating a visual representation in the HTML file of what the elements that will need to be created in jQuery will look like.  Used the CSS file to create borders to outline the grid pattern within the container.  Borrowed the HTML from an earlier project, responsivePortfolio; test.html.
Trying to work out the logic that will create the columns within each row using jQuery.

7/27

Working on the logic and the syntax to recreate in jquery that I created in HTML. I need to create a `<div> class = row` to contain three `<div> class = columns`.  The row can then be repeated in a function to generate the day in calendar view.

Worked on the `row`, `time`, `activity`, and `save` variables to make the code more concise and efficient.  Commented out HTML `<div>` to check appearance of the page.  Added `$(document).ready(function () {}` and moved the script.js script tag AFTER the jQuery CDNs in the HTML file.  First row appears.

Placed the first row into the `for loop` to create the visual representation of the calendar page.  Time of day appears in time column.  Next steps will involve listening for clicks on the activity column and allowing user input.  Will also need to listen for clicks on save column to save input to local storage.

Discovered the `.saveBtn` class in the CSS file, and added it to the save column.  Wondering if I will need to rename my variables based on the predetermined CSS classes...

Created a variable `activityInput` in a new, dynamic HTML tag and appended it to the activity column.  Adjusted the CSS of the text area to use 100% of the height and width of the activity column.

Added an event handler to "listen" for click events on the save column.  Next steps will include saving activityInput to local storage on save click event.

7/28

Removed commented out blocks of code from script.js and index.html files to make reading easier.

Added `id` attribute to the `activity` variable, and checked the console to see that is is updated dynamically.
Tried adding a similar `id` to the save column and then realized that the `id` attribute should be unique.

Currently working on the `save.on("click", function(event)`, using an `alert` and `console.log()` to help troubleshoot.  Have tried various configurations within the `alert` to contain the `activity` or `activityInput`and `time` (also `id`).  So far, the best result alerts "activity saved[object Object][object Object]", so I think I need to stringify the results. 

Added an attribute `data-timeblock` to both the activity and save columns.  In order to save the activityInput, local storage requires a key and a value.

It took a long time and help from google, jquery.com, and stackoverflow [https://stackoverflow.com/questions/4191386/jquery-how-to-find-an-element-based-on-a-data-attribute-value], but I was able find the `time` value and `activity` input by traversing the DOM in order to be able to save them into variables `timeblockId` and `userInput` and create the key and value required for local storage.

Copied the links for both jQuery CDN (for google) and for moment.js as suggested by the instructor, but discovered that index.html provided already contains `script src` tags that achieve the objective.

Replaced the inner html of `<p> id = currentDay` with the current moment as provided by moment.js.

Removed lines from the previous version of script.js that have been commented out.

Struggled with proper placement and syntax of `localStorage.getItem()` which needed to be placed OUTSIDE of the `save.on("click", function (event)` but inside the `for loop` (SCOPE).
Also struggled with finding the right syntax and command language to return the keys and values within local storage.

Played with moment.js formatting in the console, trying to leverage the existing array `timeblock` for the comparison of current time with `time` column.  Created a conditional moment comparison and assigned classes to activity column.

7/29

Stayed up late just to see the calendar turn green.  Checked again this morning, and the `present` background color is not working as expected.  Working on a solution...

Tried changing the comparison operators.  Tried changing the class assignments.  Tried changing the expression of the variable h.

After various attempts and searches, discovered that jQuery has a method `.hour()` that will retrieve ONLY the current hour; ignoring the other properties of time; ultimately allowing for a comparison of the current time to the time in the array `timeblock`.  

Something that I have learned in the process of this project is that I should have paid closer attention to the `style.css` file provided; I would have structured the dynamic html differently and assigned classes accordingly.  When I started, I was focused on how to create the structure of the html using jQuery; I was not thinking about the styling.  Ultimately, ended up adding to the `style.css` in order to outline the borders of the rows and columns in the window.

In the future, I will investigate all documentation more closely and be able to create a mental map (pseudocode) before I begin making changes.


![Screenshot (23)](https://user-images.githubusercontent.com/62854999/88847745-775b9d80-d1b5-11ea-9f04-8fdeb13d8810.png)
![Screenshot (24)](https://user-images.githubusercontent.com/62854999/88847750-79256100-d1b5-11ea-8e10-c1d524547a4c.png)
![Screenshot (25)](https://user-images.githubusercontent.com/62854999/88847753-7c205180-d1b5-11ea-9fda-37578257ef6f.png)
![Screenshot (26)](https://user-images.githubusercontent.com/62854999/88847756-7dea1500-d1b5-11ea-8e75-3ac5a9e6ed96.png)

 https://github.com/LisaMcGautier/workdayScheduler
 https://lisamcgautier.github.io/workdayScheduler
