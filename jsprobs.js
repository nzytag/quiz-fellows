'use strict';

//*** creating global variables ***
var jsProblems = [
  'bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'
]; //array of JS problems
var allJsObj = []; //array of JS problem objects
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
var refresh = document.getElementById('refresh')

function ProblemObject(problem) {
  this.problem = problem;
  this.path = 'img/' + problem;
  this.seen = false;
};

ProblemObject.prototype.addImageTag = function() {
  return '<img id="' + this.problem + '" src="' + this.path + '">';
};

//*** Turn each array of JS problems into array of objects
for (var a = 0; a < jsProblems.length; a ++) {
  allJsObj.push(new ProblemObject(jsProblems[a]));
}

compareIndex();

//*** Creates random number for range of index items of JS objects
function randIndexGen() {
  var randIndex = Math.floor(Math.random() * allJsObj.length);
  for (var b = 0; b < prevJs.length; b ++) {
    while (randIndex === prevJs[0] || randIndex === prevJs[1] || randIndex === prevJs[2] || randIndex === prevJs[3] || randIndex === prevJs[4] || randIndex === prevJs[5]) {
      randIndex = Math.floor(Math.random() * allJsObj.length);
    }
  }
  return randIndex;
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
}

function probsToDom() {
  loadProbs();
  for (var e = 0; e < probsOnDom.length; e ++) {
    probsOnDom[e].innerHTML = '<img id="' + webArr[e].problem + '" src="' + webArr[e].path + '">';
  }
}

probsToDom();

function clickOnPage(event) {
  for (var f = 0; f < prevJs.length; f ++) {
    probIndex(prevJs[f]).seen = false;
  }
  probsToDom();
}

refresh.addEventListener('click', clickOnPage);

// //*** Helper function that toggles problems as available to be displayed or not
// var updateProbsSeen = function () {
//   for (var i = 0; i < probsOnDom.length; i ++) {
//     probIndex(prevJs[i]).seen = false;
//     //probIndex(currJs[i]).seen = true;
//   }
// };
//
// function newProbs () {
//   for (var k = 0; k < probsOnDom.length; k ++) {
//     probsOnDom[k].innerHTML = '';
//     probsOnDom[k].innerHTML = probIndex(currJs[k]).addImageTag();
//   }
// };

// function refreshBtn (event) {
//   updateProbsSeen();
//   newProbs();
// };

//refresh.addEventListener('click', refreshBtn);
