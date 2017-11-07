/*gitflashcard************
This is the code to display images of javascript questions and answers onto the gitflashcard.html page.
************************/

'use strict';

//*** qustion bank array ***
var problem = ['qbranch.png', 'qchanges.png', 'qcommit.png', 'qdefault.png', 'qfork.png', 'qgithub.png', 'qmessage.png', 'qorganize.png', 'qpush.png', 'qreadme.png', 'qrepo.png', 'qstaging.png', 'qstatus.png', 'qsyntax.png', 'qversion.png'];

//*** answer bank array ***
var answer = ['abranch.png', 'achanges.png', 'acommit.png', 'adefault.png', 'afork.png', 'agithub.png', 'amessage.png', 'aorganize.png', 'apush.png', 'areadme.png', 'arepo.png', 'astaging.png', 'astatus.png', 'asyntax.png', 'aversion.png'];

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
topLeftQ.setAttribute('src', './gitimg/' + problem[0]);
topLeftA.setAttribute('src', './gitimg/' + answer[0]);
topRightQ.setAttribute('src', './gitimg/' + problem[1]);
topRightA.setAttribute('src', './gitimg/' + answer[1]);
bottomLeftQ.setAttribute('src', './gitimg/' + problem[2]);
bottomLeftA.setAttribute('src', './gitimg/' + answer[2]);
bottomRightQ.setAttribute('src', './gitimg/' + problem[3]);
bottomRightA.setAttribute('src', './gitimg/' + answer[3]);
