/*Quiz Fellows***********************
This is a study guide app that allows a user to choose a topic to study related to Code 201 material. After selecting the topic of study, the page will display 6 problems at a time that the user can use as a flashcard, when they hover (or click?) on a problem, the answer will become visable.
*************************************/

'use strict';

//*** creating global variables ***
var jsProblems =[]; //array of JS problems
var allJsObj = []; //array of JS problem objects
var cssProblems = []; //CSS problems
var allCssObj = []; //CSS objects
var htmlProblems = []; //HTML problems
var allHtmlObj = []; //HTML objects
var allProblems = []; //All topic problems
var allProbObj = []; //All topic objects
var prevJs = [];
var currJs = [];
var prevCss = [];
var currCss = [];
var prevHtml = [];
var currHtml = [];
var prevAll = [];
var currAll = [];

//*** Constructor function to make each flashcard an object ***
function ProblemObject(problem) {
  this.problem = problem;
  this.path = 'img/' + problem;
  this.seen = false;
}

//*** prototype function to add element tag ***
ProblemObject.prototype.addImageTag () {
  return '<img id="' + this.problem + '" src="' + this.path + '">'
}

//*** Turn each array of JS problems into array of objects
allJsObj.push(
  new ProblemObject(),
  new ProblemObject(),
  //...
);
//*** Creates array of CSS problem objects
allCssObj.push(
  new ProblemObject(),
  new ProblemObject(),
  //...
);
//*** Creates array of HTML problem objects
allHtmlObj.push(
  new ProblemObject(),
  new ProblemObject(),
  //...
)
//*** Creates array of all problems into objects
allProbObj.push(
  new ProblemObject(),
  new ProblemObject(),
  //...
)

//*** Creates random number for range of index items of JS objects
function randNumJsIndex () {
  return Math.floor(Math.random() * allJsObj.length);
}

//*** Create random number for range of index items of CSS objects
fuction randNumCssIndex () {
  return Math.floor(Math.random() * allCssObj.length);
}

//*** Create random number for range of index items of HTML objects
fuction randNumHtmlIndex () {
  return Math.floor(Math.random() * allHtmlObj.length);
}

//*** Create random number for range of index items of all problem objects
fuction randNumAllIndex () {
  return Math.floor(Math.random() * allProbObj.length);
}

//*** function to toggle false to true on problems shown

//*** function to replace new images on page and allow older images to be allowed back in rotation
