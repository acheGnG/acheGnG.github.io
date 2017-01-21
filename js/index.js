﻿const ASK_NUM = 4;
const WHERE_HEADACHE = "Where is your headache?";
const WHERE_HEADACHE_NOW = "Where is your headache now?";
const WHAT_SHAPE = "What shape is it?";
const WHAT_COLOR = "What color is it?";
const WHAT_SIZE = "What size is it?";
const IS_HEADACHE_GONE = "Is your headache gone now? By now it should be gone :) If not, click continue.";

const WHERE_HEADACHE_ID = "a1";
const WHERE_HEADACHE_NOW_ID = "a2";
const WHAT_SHAPE_ID = "a3";
const WHAT_COLOR_ID = "a4";
const WHAT_SIZE_ID = "a5";
const IS_HEADACHE_GONE_ID = "a6";

const WHERE_HEADACHE_LINK = "audio/where_is_your_headache.mp3";
const WHERE_HEADACHE_NOW_LINK = "audio/where_is_your_headache_now.mp3";
const WHAT_SHAPE_LINK = "audio/what_shape_issit.mp3";
const WHAT_COLOR_LINK = "audio/what_color_issit.mp3";
const WHAT_SIZE_LINK = "audio/what_size_issit.mp3";
const IS_HEADACHE_GONE_LINK = "audio/headache_gone_now.mp3";

var audioMap = new Map();
audioMap.set(WHERE_HEADACHE, WHERE_HEADACHE_ID);
audioMap.set(WHERE_HEADACHE_NOW, WHERE_HEADACHE_NOW_ID);
audioMap.set(WHAT_SHAPE, WHAT_SHAPE_ID);
audioMap.set(WHAT_COLOR, WHAT_COLOR_ID);
audioMap.set(WHAT_SIZE, WHAT_SIZE_ID);
audioMap.set(IS_HEADACHE_GONE, IS_HEADACHE_GONE_ID);

var audioLinkMap = new Map();
audioLinkMap.set(WHERE_HEADACHE, WHERE_HEADACHE_LINK);
audioLinkMap.set(WHERE_HEADACHE_NOW, WHERE_HEADACHE_NOW_LINK);
audioLinkMap.set(WHAT_SHAPE, WHAT_SHAPE_LINK);
audioLinkMap.set(WHAT_COLOR, WHAT_COLOR_LINK);
audioLinkMap.set(WHAT_SIZE, WHAT_SIZE_LINK);
audioLinkMap.set(IS_HEADACHE_GONE, IS_HEADACHE_GONE_LINK);


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


var firstQuestionDatabases = Array(WHERE_HEADACHE,
                                   WHERE_HEADACHE_NOW);

var questionDatabases = Array(WHAT_COLOR,
                              WHAT_SHAPE,
                              WHAT_SIZE);




function toggleYesNo(visibility) {
    document.getElementById('yesbtn').style.visibility = visibility;
    document.getElementById('nobtn').style.visibility = visibility;
}

$("#curebtn").click(function () {
    runCure();
});

$("#nobtn").click(function () {
    toggleYesNo('hidden');
    runCure();
});


$("#yesbtn").click(function () {
    document.getElementById('curebtn').style.visibility = 'visible';
    toggleYesNo('hidden');


    document
            .getElementById('question')
            .innerHTML = '';
});

var questionTasks;
var questions;



var askId;
var questionId;
var audioId;

function onAudioError() {
    var vid = document.getElementById(audioId);
    if (vid.error.code == 1) {
        console.log('fetching process aborted by user');
    } else if (vid.error.code == 2) {
        console.log('error occurred when downloading');
    } else if (vid.error.code == 3) {
        console.log('error occurred when decoding');
    } else if (vid.error.code == 4) {
        console.log('audio/video not supported');
    } else {
        console.log(vid.error.code);
    }
    
    runLoopQuestion();
}

function onAudioEnded() {
    runLoopQuestion();
};

function toggleAnalyserDisplay(state) {
    document.getElementById('analyser').style.display = state;
}

function runLoopQuestion() {
    if (questionId == 0) {
        setTimeout(toggleAnalyserDisplay('block'), 1000);
    } else {
        toggleAnalyserDisplay('block');
    }
    setTimeout(loopQuestionWithoutRecording, 3000);
    
}

function loopQuestionWithoutRecording() {
    toggleAnalyserDisplay('none');
    if (questionId == -1) {
        $("#record").trigger("click");
        $("#save")[0].click();
    }
    loopQuestion();
}

function runCure() {
    document.getElementById('curebtn').style.display = 'none';
    document.getElementById('learnbtn').style.display = 'none';
    document.getElementById('prompter1').style.display = 'none';  
    document.getElementById('prompter2').style.display = 'none'; 
    document.getElementById('prompter3').style.display = 'block';   
    askId = 0;
    questionId = 0;
    $("#record").trigger("click");
    loopQuestion();
};

function loopQuestion() {
    if (askId == -1) {
        toggleYesNo('visible');
        return;
    } else if (questionId == -1) {
        audioId = audioMap.get(IS_HEADACHE_GONE);
        audioLink = audioLinkMap.get(IS_HEADACHE_GONE);
        var audioHtml = '#' + audioId;

        document
            .getElementById('question')
            .innerHTML = IS_HEADACHE_GONE;
        console.log(IS_HEADACHE_GONE);
        $(audioHtml).get(0).currentTime = 0;
        $(audioHtml).get(0).play();

        
        //var audio = new Audio(audioLink);

        //audio.addEventListener('ended', onAudioEnded);
        //audio.play();
        askId = -1;
        return;
    }

    var firstQuestion = firstQuestionDatabases[askId%2];
    


    if (questionId == 0) {
        questionTasks = shuffle(questionDatabases);
        questions = Array(firstQuestion,
                            questionDatabases[0],
                            questionDatabases[1]//,
                            //IS_HEADACHE_GONE
                            );
    }

    audioId = audioMap.get(questions[questionId]);
    audioLink = audioLinkMap.get(questions[questionId]);
    var audioHtml = '#' + audioId;
    
    document
        .getElementById('question')
        .innerHTML = questions[questionId];
    console.log(questions[questionId]);

    questionId++;
    if (questionId == questions.length) {
        questionId = 0;
        askId++;
        if (askId == ASK_NUM) {
            questionId = -1;
        }
    }
    $(audioHtml).get(0).currentTime = 0;
    $(audioHtml).get(0).play();
    //var audio = new Audio(audioLink);
    
    //audio.addEventListener('ended', onAudioEnded);
    //audio.play();

}

$(document).ready(function () {
    toggleYesNo('hidden');
});
