/*htmlflashcard************
This is the code to display images of javascript questions and answers onto the htmlflashcard.html page.
************************/

'use strict';

//*** qustion bank array ***
var problem = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg'];

//*** answer bank array ***
var answer = ['pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

//*** four sets of flashcards will be displayed ***
var topLeftQ = document.getElementById('top-left-q');
var topLeftA = document.getElementById('top-left-a');
var topRightQ = document.getElementById('top-right-q');
var topRightA = document.getElementById('top-right-a');
var bottomLeftQ = document.getElementById('bottom-left-q');
var bottomLeftA = document.getElementById('bottom-left-a');
var bottomRightQ = document.getElementById('bottom-right-q');
var bottomRightA = document.getElementById('bottom-right-a');

//putting images into the DOM, both problems and answers will be displayed, using CSS styles to control overall look
topLeftQ.setAttribute('src', './htmlimg/' + problem[0]);
topLeftA.setAttribute('src', './htmlimg/' + answer[0]);
topRightQ.setAttribute('src', './htmlimg/' + problem[1]);
topRightA.setAttribute('src', './htmlimg/' + answer[1]);
bottomLeftQ.setAttribute('src', './htmlimg/' + problem[2]);
bottomLeftA.setAttribute('src', './htmlimg/' + answer[2]);
bottomRightQ.setAttribute('src', './htmlimg/' + problem[3]);
bottomRightA.setAttribute('src', './htmlimg/' + answer[3]);
