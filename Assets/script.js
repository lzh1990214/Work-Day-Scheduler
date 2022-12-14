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

  function addTimeBlock () {
  // add time-block element to contain time (am and pm), text area and save button 
  var clockTimeEl = $("#container").append('<div class="row timer-block past">12 am</div>');

  console.log (clockTimeEl);
  
  // add a div element to show am and pm time of a day
  $(".timer-block").append('<div>pm</div>');
  // add textarea element
  $(".timer-block").append('<textarea class="col-8 col-md-10 description" rows="3"></textarea>');
  // add button
  $(".timer-block").append('<button class="btn saveBtn col-2 col-md-1" aria-label="save"></button>');
  $(".btn").append('<i class="fas fa-save" aria-hidden="true"></i>');
}

addTimeBlock()

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //



  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //




  // TODO: Add code to display the current date in the header of the page.
});
