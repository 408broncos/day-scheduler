# day-scheduler

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| Dayjs    | [https://day.js.org/docs/en/display/format](https://day.js.org/docs/en/display/format)  
| jQuery   | [https://www.w3schools.com/jquery/jquery_events.asp](https://www.w3schools.com/jquery/jquery_events.asp) 
| Bootstrap| [https://getbootstrap.com/docs/4.3/getting-started/introduction/#js](https://getbootstrap.com/docs/4.3/getting-started/introduction/#js) |


## Description 

[Visit the Deployed Site](https://408broncos.github.io/day-scheduler/)

For this project I was given a task to create a Work Day Scheduler. For this I was first asked to create a heading that would include, and continuously, the current day and/or time of the week. The second ask was to write out time blocks from 9am - 5pm with a text description and each one would have a save feature. Now the last ask was to have each time block follow the current days hours and give each one its own assigned color code. For example: the "present" hour would have a color of "red", the "future" hour(s) would have a color of "green" and lastly the "past" hour(s) would have a color of "gray". I was also tasked to have a refresh feature where if the user wanted to save their content and refresh the page, it would still be there.

## Markdown



## Code Examples

Here I will be showing a couple of examples of some codes I was stuck on but eventually discovered the solutions.

Here are the examples:


```js
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
```

For this I didn't really know how to have the time-blocks follow the current time and also change color to its assigned color code. I soon discovered that I need to use jQuery and connect the time-block classes to a function and give a variable for the current hour. After doing this I could then create my if and else statments to follow to hours and change the colors.

Here is another example that I struggled with:

```js
saveBtn.on("click", function() {
  console.log("");

    var time = $(this).siblings(".hour").text();
    var description = $(this).siblings(".description").val();

    localStorage.setItem(time, description);
});

```
In this code I spent a long time figuring out what do and how to add the save feature and store it into the cosole for every time block. I figured out that I needed to create 2 seperate variables with the first following the hour class and  the second a description variable for the contents inside the time blocks. And then lastly creating a localStorage.setItem for the variables so that they are stored and saved.

## Usage 

For usages I found that all of the websites I have listed at the top of the page to be so helpful. At times I also hit a lot of walls and didn't know how else to continue, but weirdly enough the most helpful thing I found to be extremely beneficial is brain breaks. In the future now if I hit any sort of mental blocks taking a 10-15min break really comes in handy to work better.


## Learning Points 


This project for me really taught me a lot about jQueries, bootstraping and how to really push myself and to be ok with not understanding with what's being shown but to always ask questions and reach out and just look it up if all else fails.

## Author Info

### Jordan Cardenas 
* [LinkedIn](https://www.linkedin.com/in/jordan-cardenas-87a58520b/)
* [Github](https://github.com/408broncos)

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
