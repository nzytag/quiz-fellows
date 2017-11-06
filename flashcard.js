'use strict';


var problem = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg'];

var answer = ['pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg']

var topLeft = document.getElementById('top-left');
var topCenter = document.getElementById('top-center');
var topRight = document.getElementById('top-right');
var bottomLeft = document.getElementById('bottom-left');
var bottomCenter = document.getElementById('bottom-center');
var bottomRight = document.getElementById('bottom-right');

topLeft.innerHTML = '<img src="./img/' + problem[0] + '">' + '<img src="./img/' + answer[0] + '">' ;
topCenter.innerHTML = '<img src="./img/' + problem[1] + '">' + '<img src="./img/' + answer[1] + '">';
topRight.innerHTML = '<img src="./img/' + problem[2] + '">' + '<img src="./img/' + answer[2] + '">';
bottomLeft.innerHTML = '<img src="./img/' + problem[3] + '">' + '<img src="./img/' + answer[3] + '">';
bottomCenter.innerHTML = '<img src="./img/' + problem[4] + '">' + '<img src="./img/' + answer[4] + '">';
bottomRight.innerHTML = '<img src="./img/' + problem[5] + '">' + '<img src="./img/' + answer[5] + '">';
