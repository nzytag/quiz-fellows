'use strict';

//*** creating global variables ***
var jsProblems = [
  'bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'
]; //array of JS problems
var allJsObj = []; //array of JS problem objects
var prevJs = [];
var currJs = [];
var probsOnDom = [
  document.getElementById('top-left'),
  document.getElementById('top-center'),
  document.getElementById('top-right'),
  document.getElementById('bottom-left'),
  //document.getElementById('bottom-center'),
  //document.getElementById('bottom-right')
];
var btn = document.getElementById('refresh');

function ProblemObject(problem) {
  this.problem = problem;
  this.path = 'img/' + problem;
  this.seen = false;
};

ProblemObject.prototype.addImageTag = function () {
  return '<img id="' + this.problem + '" src="' + this.path + '">';
};

//*** Turn each array of JS problems into array of objects
for (var a = 0; a < jsProblems.length; a ++) {
  allJsObj.push(new ProblemObject(jsProblems[a]));
}


//*** Creates random number for range of index items of JS objects
function randNumJsIndex () {
  var randNum = Math.floor(Math.random() * allJsObj.length);
  for (var b = 0, b < prevJs.length; b ++) {
    while (randNum === prevJs[b]) {
      randNum = Math.floor(Math.random() * allJsObj.length);
    }
  }
  return randNum;
}

//*** Helper function to recognize index of JS problem objects
var probIndex = function (index) {
  return allJsObj[index];
};

//*** Helper function that toggles problems as available to be displayed or not
var updateProbsSeen = function () {
  for (var i = 0; i < probsOnDom.length; i ++) {
    probIndex(prevJs[i]).seen = false;
    prevJs[i] = currJs[i];
    while (probIndex(currJs[i]).seen === true) {
      currJs[i] = randNumJsIndex();
    }
    probIndex(currJs[i]).seen = true;
  }
};

function seenToTrue () {
  for (var j = 0; j < probsOnDom.length; j ++) {
    probIndex(currJs[j]).seen = true;
  }
}

function newProbs () {
  for (var k = 0; k < probsOnDom.length; k ++) {
    probsOnDom[k].innerHTML = '';
    probsOnDom[k].innerHTML = probIndex(currJs[k]).addImageTag();
  }
};

function refreshBtn (event) {
  updateProbsSeen();
  seenToTrue();
  newProbs();
};

btn.addEventListener('click', refreshBtn);
