// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // select all button with the class name 'btn' in html and assign to variable 'saveBtnEl'
  var saveBtnEl = $(".btn")

  // create a click event with JQuery on() method on the save button
  saveBtnEl.on("click", function () {
    // get the id attribute of the parent element (note: time-block <div> in html) of the button element
    var timeId = this.parentNode.id;
    // get the textarea element through the children array index of the parent element (note: time-block <div> in html)
    var descriptionText = this.parentNode.children[1];

    // store key (id of each time-block) and value (text entered in the textarea by the user) in localStorage
    localStorage.setItem(timeId, descriptionText.value.trim());
  })

  // get today's weekday, date and year by Day.js 
  var today = dayjs();
  // show today's weekday, date, and year on the <p> element with id "currentDay"
  $("#currentDay").text(today.format("dddd, MMMM D, YYYY"));

  // get the current time in hour format
  var timeNow = dayjs().hour();

  // use each() method in JQuery to loop over each time-block to extract the time in hour format
  // by using id attraibute, and change each class based on the hour number comparison
  $(".time-block").each(function () {
    // extract the hour number from id attribute with substring() method to remove the first 5 characters: "hour-"
    var idHour = $(this).attr("id").substring(5);

    // reset the "past", "present", and "future" classes if they exist from previous page loading
    $(this).removeClass("past present future");

    // compare the current time in hour format with the extracted hour number, then add "future", "past",
    // and "present" classes accordingly.  
    if (idHour > timeNow) {
      $(this).addClass("future");
    } else if (idHour < timeNow) {
      $(this).addClass("past");
    } else {
      $(this).addClass("present");
    };

    // get user input that was saved in localStorage through the id attribute of each time-block
    var textInput = localStorage.getItem($(this).attr("id"));
    // set the value of the textarea element of each time-block with the user input that found in the localStorage
    $(this.children[1]).val(textInput);

  });

});
