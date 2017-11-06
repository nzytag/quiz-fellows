'use strict';
//this will change the: welcome to quiz fellows depending on the time of the day
//this may move to a different js file

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
