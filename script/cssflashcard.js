/*cssflashcard************
This is the code to display images of javascript questions and answers onto the cssflashcard.html page.
************************/

'use strict';

//*** qustion bank array ***
var problem = ['qa.png', 'qblock.png', 'qbutton.png', 'qcanvas.png', 'qdeclarations.png', 'qdiv.png', 'qem.png', 'qfieldset.png', 'qh.png', 'qlink.png', 'qlinkattributes.png', 'qlinkhref.png', 'qlinkrel.png', 'qlinktype.png', 'qscript.png', 'qselectors.png'];

//*** answer bank array ***
var answer = ['aa.png', 'ablock.png', 'abutton.png', 'acanvas.png', 'adeclarations.png', 'adiv.png', 'aem.png', 'afieldset.png', 'ah.png', 'alink.png', 'alinkattributes.png', 'alinkhref.png', 'alinkrel.png', 'alinktype.png', 'ascript.png', 'aselectors.png'];

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
topLeftQ.setAttribute('src', './cssimg/' + problem[0]);
topLeftA.setAttribute('src', './cssimg/' + answer[0]);
topRightQ.setAttribute('src', './cssimg/' + problem[1]);
topRightA.setAttribute('src', './cssimg/' + answer[1]);
bottomLeftQ.setAttribute('src', './cssimg/' + problem[2]);
bottomLeftA.setAttribute('src', './cssimg/' + answer[2]);
bottomRightQ.setAttribute('src', './cssimg/' + problem[3]);
bottomRightA.setAttribute('src', './cssimg/' + answer[3]);
