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
[]WHEN I open the planner
[]THEN the current day is displayed at the top of the calendar
[]WHEN I scroll down
[]THEN I am presented with timeblocks for standard business hours
[]WHEN I view the timeblocks for that day
[]THEN each timeblock is color coded to indicate whether it is in the past, present, or future
[]WHEN I click into a timeblock
[]THEN I can enter an event
[]WHEN I click the save button for that timeblock
[]THEN the text for that event is saved in local storage
[]WHEN I refresh the page
[]THEN the saved events persist
```

7/26

Started by creating a visual representation in the HTML file of what the elements that will need to be created in jQuery will look like.  Used the CSS file to create borders to outline the grid pattern within the container.  Borrowed the HTML from an earlier project, responsivePortfolio; test.html.
Trying to work out the logic that will create the columns within each row using jQuery.

7/27

Working on the logic and the syntax to recreate in jquery what I created in HTML. I need to create a `<div> class = row` to contain three `<div> class = columns`.  The row can then be repeated in a function to generate the day in calendar view.

Worked on the `row`, `time`, `activity`, and `save` variables to make the code more concise and efficient.  Commented out HTML `<div>` to check appearance of the page.  Added `$(document).ready(function () {}` and moved the script.js script tag AFTER the jQuery CDNs in the HTML file.
