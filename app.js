'use strict';
/*app.js********************



//*** function to take user to corepsonding topic site that they have selected ***
var form = document.getElementById('form');

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

//console.log('form', form);
form.addEventListener('submit', goToTopic);
