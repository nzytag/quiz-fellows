'use strict';

/*** GLOBAL VARIABLE DECLARATIONS ***/

var generations = 0;
var problems = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var problemsArray = [];
var genNum1;
var genNum2;
var genNum3;
var genNum4;
var genNum5;
var genNum6;
var lastGen1;
var lastGen2;
var lastGen3;
var lastGen4;
var lastGen5;
var lastGen6;

/*** CONSTRUCTOR FUNCTION ***/

// constructor function
function Problems(name) {
  this.name = name;
  this.path = './img/' + name + '.jpg';
  this.generated = 0;
}

/*** OBJECT INSTANTIATON ***/

// construction of new image objects that are pushed to images array
for (var i = 0; i < problems.length; i++) {
  problemsArray.push(new Image(problems[i]));
}
console.log(problemsArray);


/*** HELPER FUNCTIONS ***/

// random number generator to be used to select random problems
function rNJesus() {
  var rng = Math.floor(Math.random() * problemsArray.length);
  // console.log('random #', rng);
  // loop to allow rNJesus to reiterate until desired conditions are met, i.e. no 3 values from numbersGenerator() being the same
  while (rng === lastGen1 || rng === lastGen2 || rng === lastGen3 || rng === lastGen4 || rng === lastGen5 || rng === lastGen6) {
    rng = Math.floor(Math.random() * problemsArray.length);
  }
  return rng;
}

// generate 3 numbers to map to arrays for image selection
function numbersGenerator() {
  genNum1 = rNJesus();
  genNum2 = rNJesus();
  genNum3 = rNJesus();
  genNum4 = rNJesus();
  genNum5 = rNJesus();
  genNum6 = rNJesus();
  while (genNum1 === genNum2) { // checks if genNum2 is the same as the first, and rerolls if it is
    genNum2 = rNJesus();
  }
  while (genNum1 === genNum3 || genNum2 === genNum3) { // checks if 3 is = to 1 or 2, and rerolls if it is
    genNum3 = rNJesus();
  }
  while (genNum1 === genNum4 || genNum2 === genNum4 || genNum3 === genNum4) {
    genNum4 = rNJesus();
  }
  while (genNum1 === genNum5 || genNum2 === genNum5 || genNum3 === genNum5 || genNum4 === genNum5) {
    genNum5 = rNJesus();
  }
  while (genNum1 === genNum6 || genNum2 === genNum6 || genNum3 === genNum6 || genNum4 === genNum6 || genNum5 === genNum6) {
    genNum6 = rNJesus();
  }
  lastGen1 = genNum1;
  lastGen2 = genNum2;
  lastGen3 = genNum3;
  lastGen4 = genNum4;
  lastGen5 = genNum5;
  lastGen6 = genNum6;
}

// checks the image clicked on to see if its source path is the same as any image in the imageArray
function selectedData(event) {
  event.preventDefault();
  // console.log('I selected this image:', this.getAttribute('src'));
  // for (var i = 0; i < problemsArray.length; i++) {
  //   if (this.getAttribute('src') === problemsArray[i].path) {
  //     problemsArray[i].selected++;
  //   }
  // }
  displayProblems();
}

// variables for event listeners
var topLeft = document.getElementById('top-left');
var topCenter = document.getElementById('top-center');
var topRight = document.getElementById('top-right');
var bottomLeft = document.getElementById('bottom-left');
var bottomCenter = document.getElementById('bottom-center');
var bottomRight = document.getElementById('bottom-right');

// adds event listeners for photos
function addEventListeners() {
  topLeft.addEventListener('click', selectedData);
  topCenter.addEventListener('click', selectedData);
  topRight.addEventListener('click', selectedData);
  bottomLeft.addEventListener('click', selectedData);
  bottomCenter.addEventListener('click', selectedData);
  bottomRight.addEventListener('click', selectedData);
}

// removes event listeners and hides photos
function removeEventListeners() {
  topLeft.removeEventListener('click', selectedData);
  topCenter.removeEventListener('click', selectedData);
  topRight.removeEventListener('click', selectedData);
  bottomLeft.removeEventListener('click', selectedData);
  bottomCenter.removeEventListener('click', selectedData);
  bottomRight.removeEventListener('click', selectedData);
  // left.style.visibility = 'hidden';
  // center.style.visibility = 'hidden';
  // right.style.visibility = 'hidden';
}

// displays a list of the statistics for image selection
// function displayStatistics() {
//   var statistics = document.getElementById('statistics');
//   var imageStatistics;
//   for (var i = 0; i < imageArray.length; i++) {
//     imageStatistics = document.createElement('li');
//     imageStatistics.innerHTML = imageArray[i].selected + ' votes for ' + imageArray[i].name;
//     statistics.appendChild(imageStatistics);
//   }
// }

//display 6 problems on screen from generated numbers
function displayProblems() {
  addEventListeners();
  if (generations < 25) {
    numbersGenerator();
    topLeft.setAttribute('src', problemsArray[lastGen1].path);
    topCenter.setAttribute('src', problemsArray[lastGen2].path);
    topRight.setAttribute('src', problemsArray[lastGen3].path);
    bottomLeft.setAttribute('src', problemsArray[lastGen4].path);
    bottomCenter.setAttribute('src', problemsArray[lastGen5].path);
    bottomRight.setAttribute('src', problemsArray[lastGen6].path);
    problemsArray[lastGen1].generated++;
    problemsArray[lastGen2].generated++;
    problemsArray[lastGen3].generated++;
    problemsArray[lastGen4].generated++;
    problemsArray[lastGen5].generated++;
    problemsArray[lastGen6].generated++;
  } else {
    removeEventListeners();
    // imageArray = JSON.parse(localStorage.saveImageArray);
    // displayStatistics();
    // createObjectNames();
    // createObjectGenerations();
    // createObjectSelections();
    // makeChart();
  }
}

//function to fill up info for chart

/*** FUNCTION INVOCATION ***/

displayProblems();


/*** LOCAL STORAGE ***/

// var saveImageArray = [];
// function save() {
//   if (saveImageArray) {
//     saveImageArray.push(JSON.stringify(imageArray));
//     localStorage.saveImageArray = saveImageArray;
//   }
// }
//
// function load() {
//   if (localStorage.saveImageArray) {
//     saveImageArray = localStorage.saveImageArray.split(',');
//     saveImageArray = JSON.parse(saveImageArray);
//   }
// }
//
// load();
//
//
// /*** CHART ***/
//
// var objectNames = [];
// var objectGenerations = [];
// var objectSelections = [];
//
//
// function createObjectNames() {
//   for (var i = 0; i < imageArray.length; i++) {
//     objectNames.push(imageArray[i].name);
//   }
// }
//
// function createObjectGenerations() {
//   for (var i = 0; i < imageArray.length; i++) {
//     objectGenerations.push(imageArray[i].generated);
//   }
// }
//
// function createObjectSelections() {
//   for (var i = 0; i < imageArray.length; i++) {
//     objectSelections.push(imageArray[i].selected);
//   }
// }
//
//
// var makeChart = function() {
//   var ctx = document.getElementById('chart').getContext('2d');
//   var chart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//       labels: objectNames,
//       datasets: [{
//         label: 'Image Selections',
//         backgroundColor: 'rgb(255, 99, 132)',
//         borderColor: 'rgb(255, 99, 132)',
//         data: objectSelections,
//       }],
//     },
//
//     // Configuration options go here
//     options: {
//       scales: {
//         yAxes: [{
//           ticks: {
//             beginAtZero: true
//           }
//         }]
//       }
//     }
//   });
// };
