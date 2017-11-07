/*jsflashcard************
This is the code to display images of javascript questions and answers onto the jsflashcard.html page.
************************/


'use strict';
//*** array of problem images ***
var problem = ['qbreakpoint.png', 'qcall.png', 'qcomments.png', 'qconstructor.png', 'qdatatypes.png', 'qdom.png', 'qeventlistener.png', 'qfloor.png', 'qjson.png', 'qlocalstorage.png', 'qlocalvar.png', 'qloop.png', 'qobjecttype.png', 'qoperator.png', 'qscript.png', 'qthis.png', 'qvarname.png'];

//*** array of answer images in same order as problems ***
var answer = ['abreakpoint.png', 'acall.png', 'acomments.png', 'aconstructor.png', 'adatatypes.png', 'adom.png', 'aeventlistener.png', 'afloor.png', 'ajson.png', 'alocalstorage.png', 'alocalvar.png', 'aloop.png', 'aobjecttype.png', 'aoperator.png', 'ascript.png', 'athis.png', 'avarname.png'];

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
topLeftQ.setAttribute('src', './jsimg/' + problem[0]);
topLeftA.setAttribute('src', './jsimg/' + answer[0]);
topRightQ.setAttribute('src', './jsimg/' + problem[1]);
topRightA.setAttribute('src', './jsimg/' + answer[1]);
bottomLeftQ.setAttribute('src', './jsimg/' + problem[2]);
bottomLeftA.setAttribute('src', './jsimg/' + answer[2]);
bottomRightQ.setAttribute('src', './jsimg/' + problem[3]);
bottomRightA.setAttribute('src', './jsimg/' + answer[3]);
