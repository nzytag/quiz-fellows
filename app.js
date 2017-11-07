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

  document.write('<h1>' + greeting + '</h1>');
}
displayTime(); //calls the date function

var form = document.getElementById('form');
//*** function to take user to corepsonding topic site that they have selected ***
function goToTopic(event) {
  event.preventDefault();
  // console.log('1234', event.target.elements[1].value);
  var target = event.target.elements[1].value;
  if (target === 'js') {
    location = 'jsflashcard.html';
  }
  if (target === 'html') {
    location = 'htmlflashcard.html';
  }
  if (target === 'css') {
    location = 'cssflashcard.html';
  }
  if (target === 'git') {
    location = 'gitflashcard.html';
  }
};

// var submitButton = document.getElementById('submit_button');
// var jsSelect = document.getElementById('js');
// var htmlSelect = document.getElementById('html');
// var cssSelect = document.getElementById('css');
// var gitSelect = document.getElementById('git');

// console.log('submit button', form);
// console.log('js selected', jsSelect, 'form ', form);
// jsSelect.addEventListener('click', goToTopic);
// htmlSelect.addEventListener('click', goToTopic);
// cssSelect.addEventListener('click', goToTopic);
// gitSelect.addEventListener('click', goToTopic);
// form.addEventListener('submit', goToTopic);
console.log('form', form);
form.addEventListener('submit', goToTopic);
