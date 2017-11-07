/*app.js********************
This is the file that links to index.html, it will display a greeting that changes depending on the time of day. It will also take the user to the appropriate flashcard page with the topic they selected.
***************************/

'use strict';

//*** changes the: welcome to quiz fellows depending on the time of the day ***
function displayTime() {
  var today =  new Date ();
  var hourNow = today.getHours();
  var greeting;

  if (hourNow > 18) {
    greeting = 'Good Evening! Welcome to Quiz Fellows!';
  } else if (hourNow > 12) {
    greeting = 'Good Afternoon! Welcome to Quiz Fellows!';
  } else if (hourNow > 0) {
    greeting = 'Good Morning! Welcome to Quiz Fellows';
  } else {
    greeting = 'Welcome!';
  }

  document.write('<h1>' + greeting + '<h/1>');
}
displayTime(); //calls the date function

//*** function to take user to corepsonding topic site that they have selected ***
var form = document.getElementById('form');

function goToTopic() {
  event.preventDefault();
  if (event.target.value === 'javascript') {
    window.location.assign('./script/jsflashcard.js');
  }
  if (event.target.value === 'html') {
    window.location.assign('./script/htmlflashcard.html');
  }
  if (event.target.value === 'css') {
    window.location.assign('./script/cssflashcard.html');
  }
  if (event.target.value === 'git') {
    window.location.assign('./script/gitflashcard.html');
  }
};

form.addEventListener('submit', goToTopic);
