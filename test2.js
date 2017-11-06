'use strict';

//*** creating global variables ***
var genNum1;
var genNum2;
var genNum3;
var lastGen1;
var lastGen2;
var lastGen3;
var problems = [
  'bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'
]; //array of JS problems
var problemsArray = []; //array of JS problem objects
var prevJs = [0,1,2,3,4,5]; //index numbers related to problems
var currJs = [6,7,8,9,10,11]; //index numbers representing problems in allJsObj array
var probsOnDom = [ //array of DOM elements to input problems
  document.getElementById('top-left'),
  document.getElementById('top-center'),
  document.getElementById('top-right'),
  document.getElementById('bottom-left'),
  document.getElementById('bottom-center'),
  document.getElementById('bottom-right')
];
//var btn = document.getElementsByTagName('button'); //refresh button
var refresh = document.getElementById('refresh');

function ProblemObject(problem) {
  this.problem = problem;
  this.path = './img/' + problem;
  this.seen = false;
};

ProblemObject.prototype.addImageTag = function() {
  return '<img id="' + this.problem + '" src="' + this.path + '">';
};

//*** Turn each array of JS problems into array of objects
for (var a = 0; a < problems.length; a ++) {
  allJsObj.push(new ProblemObject(problems[a]));
}

compareIndex();

//*** Creates random number for range of index items of JS objects
function rNJesus() {
  var rng = Math.floor(Math.random() * imageArray.length);
  // console.log('random #', rng);
  // loop to allow rNJesus to reiterate until desired conditions are met, i.e. no 3 values from numbersGenerator() being the same
  while (rng === lastGen1 || rng === lastGen2 || rng === lastGen3 || rng === lastGen4 || rng === lastGen5 || rng === lastGen6) {
    rng = Math.floor(Math.random() * imageArray.length);
  }
  return rng;
}

//*** helper function that compares index numbers
function compareIndex() {
  for (var c = 0; c < currJs.length; c ++) { //for each index in the array
    currJs[c] = randIndexGen();
    while (currJs[1] === currJs[0]) { //check the index to the others...
      currJs[1] = randIndexGen(); //otherwise generate new random index number
    }
    while (currJs[2] === currJs[1] || currJs[2] === currJs[0]) {
      currJs[2] = randIndexGen();
    }
    while (currJs[3] === currJs[2] || currJs[3] === currJs[1] || currJs[3] === currJs[0]) {
      currJs[3] = randIndexGen();
    }
    while (currJs[4] === currJs[3] || currJs[4] === currJs[2] || currJs[4] === currJs[1] || currJs[4] === currJs[0]) {
      currJs[4] = randIndexGen();
    }
    while (currJs[5] === currJs[4] || currJs[5] === currJs[3] || currJs[5] === currJs[2] || currJs[5] === currJs[1] || currJs[5] === currJs[0]) {
      currJs[5] = randIndexGen();
    }
    prevJs = currJs; //makes current images into previous images and not available for next page refresh
  }
}

//*** Helper function to recognize index of JS problem objects
function probIndex(index) {
  return allJsObj[index];
};

var webArr = [];
function loadProbs() {
  compareIndex();
  for (var d = 0; d < currJs.length; d ++) {
    webArr.push(currJs[d]);
    probIndex(currJs[d]).seen = true;
  }
};
