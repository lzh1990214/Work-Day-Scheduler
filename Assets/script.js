// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  // placeholder of an empty array to store objects
  var storage = []

  // select all button with class name 'btn' in html and assign to variable 'saveBtnEl'
  var saveBtnEl = $(".btn")

  // create a click event with JQuery on() method
  saveBtnEl.on("click", function () {
    // get the id of the parent element of the button element
    var timeId = this.parentNode.id;
    // get the textarea element through the children index of the parent element
    var descriptionText = this.parentNode.children[1];
    console.log(descriptionText.value);
    console.log(timeId);
    // store key (id of each time-block) and value (text entered in the textarea) in local storage
    localStorage.setItem(timeId, JSON.stringify(descriptionText.value.trim()));

  })


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

// get today's weekday, date and year by Day.js API
var today = dayjs();
// show today's weekday, date, and year on the <p> element with id "currentDay"
$("#currentDay").text(today.format("dddd, MMMM D, YYYY"));

// get the current time in hour format
var timeNow = dayjs().hour();
console.log (timeNow);



// use each() method in JQuery to loop over each time-block element to extract the hour text
// in id and change class based on the time-hour number comparison
$(".time-block").each(function () { 
  // extract the hour number from id with substring() method to remove the first 5 characters "hour-"
  var idHour = $(this).attr("id").substring(5);
  console.log(idHour);

  // The "past", "present", and "future" classes need to be removed if they exist from previous page loading
  $(this).removeClass("past present future");
  
  // compare the current time in hour format with the extacted hour number and add "future", "past",
  // and "present" classes accordingly.  
  if (idHour > timeNow) {
    $(this).addClass("future");
  } else if (idHour < timeNow){
    $(this).addClass("past");
  } else {
    $(this).addClass("present");
  };
});






// var idText = "hour-16";
// var idHour = idText.substring(5);
// console.log(idHour);

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //




  // TODO: Add code to display the current date in the header of the page.
});
