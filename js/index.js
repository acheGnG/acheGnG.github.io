const ASK_NUM = 4;
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

const LANGUAGE_ENGLISH = "English";
const LANGUAGE_CHINESE = "Chinese";
const LANGUAGE_JAPANESE = "Japanese";
const LANGUAGE_FRENCH = "French";
const LANGUAGE_CANTONESE = "Cantonese";
const LANGUAGE_MALAY = "Malay";

var languageMap = new Map();
languageMap.set(LANGUAGE_ENGLISH, 0);
languageMap.set(LANGUAGE_CHINESE, 1);
languageMap.set(LANGUAGE_JAPANESE, 2);
languageMap.set(LANGUAGE_FRENCH, 3);
languageMap.set(LANGUAGE_CANTONESE, 4);
languageMap.set(LANGUAGE_MALAY, 5);

var engAudioMap = new Map();
engAudioMap.set(WHERE_HEADACHE, WHERE_HEADACHE_ID);
engAudioMap.set(WHERE_HEADACHE_NOW, WHERE_HEADACHE_NOW_ID);
engAudioMap.set(WHAT_SHAPE, WHAT_SHAPE_ID);
engAudioMap.set(WHAT_COLOR, WHAT_COLOR_ID);
engAudioMap.set(WHAT_SIZE, WHAT_SIZE_ID);
engAudioMap.set(IS_HEADACHE_GONE, IS_HEADACHE_GONE_ID);

var chiAudioMap = new Map();
chiAudioMap.set(WHERE_HEADACHE, WHERE_HEADACHE_ID);
chiAudioMap.set(WHERE_HEADACHE_NOW, WHERE_HEADACHE_NOW_ID);
chiAudioMap.set(WHAT_SHAPE, WHAT_SHAPE_ID);
chiAudioMap.set(WHAT_COLOR, WHAT_COLOR_ID);
chiAudioMap.set(WHAT_SIZE, WHAT_SIZE_ID);
chiAudioMap.set(IS_HEADACHE_GONE, IS_HEADACHE_GONE_ID);

var japAudioMap = new Map();
japAudioMap.set(WHERE_HEADACHE, WHERE_HEADACHE_ID);
japAudioMap.set(WHERE_HEADACHE_NOW, WHERE_HEADACHE_NOW_ID);
japAudioMap.set(WHAT_SHAPE, WHAT_SHAPE_ID);
japAudioMap.set(WHAT_COLOR, WHAT_COLOR_ID);
japAudioMap.set(WHAT_SIZE, WHAT_SIZE_ID);
japAudioMap.set(IS_HEADACHE_GONE, IS_HEADACHE_GONE_ID);

var frAudioMap = new Map();
frAudioMap.set(WHERE_HEADACHE, WHERE_HEADACHE_ID);
frAudioMap.set(WHERE_HEADACHE_NOW, WHERE_HEADACHE_NOW_ID);
frAudioMap.set(WHAT_SHAPE, WHAT_SHAPE_ID);
frAudioMap.set(WHAT_COLOR, WHAT_COLOR_ID);
frAudioMap.set(WHAT_SIZE, WHAT_SIZE_ID);
frAudioMap.set(IS_HEADACHE_GONE, IS_HEADACHE_GONE_ID);

var canAudioMap = new Map();
canAudioMap.set(WHERE_HEADACHE, WHERE_HEADACHE_ID);
canAudioMap.set(WHERE_HEADACHE_NOW, WHERE_HEADACHE_NOW_ID);
canAudioMap.set(WHAT_SHAPE, WHAT_SHAPE_ID);
canAudioMap.set(WHAT_COLOR, WHAT_COLOR_ID);
canAudioMap.set(WHAT_SIZE, WHAT_SIZE_ID);
canAudioMap.set(IS_HEADACHE_GONE, IS_HEADACHE_GONE_ID);

var malAudioMap = new Map();
malAudioMap.set(WHERE_HEADACHE, WHERE_HEADACHE_ID);
malAudioMap.set(WHERE_HEADACHE_NOW, WHERE_HEADACHE_NOW_ID);
malAudioMap.set(WHAT_SHAPE, WHAT_SHAPE_ID);
malAudioMap.set(WHAT_COLOR, WHAT_COLOR_ID);
malAudioMap.set(WHAT_SIZE, WHAT_SIZE_ID);
malAudioMap.set(IS_HEADACHE_GONE, IS_HEADACHE_GONE_ID);

var audioMaps = Array(engAudioMap,
                      chiAudioMap,
                      japAudioMap,
                      frAudioMap,
                      canAudioMap,
                      malAudioMap);

var langIndex = 0;

var engFirstQuestionDatabase = Array(WHERE_HEADACHE,
                                     WHERE_HEADACHE_NOW);

var chiFirstQuestionDatabase = Array(WHERE_HEADACHE,
                                     WHERE_HEADACHE_NOW);

var japFirstQuestionDatabase = Array(WHERE_HEADACHE,
                                     WHERE_HEADACHE_NOW);

var frFirstQuestionDatabase = Array(WHERE_HEADACHE,
                                     WHERE_HEADACHE_NOW);

var canFirstQuestionDatabase = Array(WHERE_HEADACHE,
                                     WHERE_HEADACHE_NOW);

var malFirstQuestionDatabase = Array(WHERE_HEADACHE,
                                     WHERE_HEADACHE_NOW);
var firstQuestionDatabases = Array(engFirstQuestionDatabase,
                                  chiFirstQuestionDatabase,
                                  japFirstQuestionDatabase,
                                  frFirstQuestionDatabase,
                                  canFirstQuestionDatabase,
                                  malFirstQuestionDatabase);



var engQuestionDatabase = Array(WHAT_COLOR,
                                WHAT_SHAPE,
                                WHAT_SIZE);

var chiQuestionDatabase = Array(WHAT_COLOR,
                                WHAT_SHAPE,
                                WHAT_SIZE);

var japQuestionDatabase = Array(WHAT_COLOR,
                                WHAT_SHAPE,
                                WHAT_SIZE);

var frQuestionDatabase = Array(WHAT_COLOR,
                                WHAT_SHAPE,
                                WHAT_SIZE);

var canQuestionDatabase = Array(WHAT_COLOR,
                                WHAT_SHAPE,
                                WHAT_SIZE);

var malQuestionDatabase = Array(WHAT_COLOR,
                                WHAT_SHAPE,
                                WHAT_SIZE);
var questionDatabases = Array(engQuestionDatabase,
                                  chiQuestionDatabase,
                                  japQuestionDatabase,
                                  frQuestionDatabase,
                                  canQuestionDatabase,
                                  malQuestionDatabase);

var englastQuestion = IS_HEADACHE_GONE;
var chilastQuestion = IS_HEADACHE_GONE;
var japlastQuestion = IS_HEADACHE_GONE;
var frlastQuestion = IS_HEADACHE_GONE;
var canlastQuestion = IS_HEADACHE_GONE;
var mallastQuestion = IS_HEADACHE_GONE;
var lastQuestions = Array(englastQuestion,
                     chilastQuestion,
                     japlastQuestion,
                     frlastQuestion,
                     canlastQuestion,
                     mallastQuestion);

var audioMap = audioMaps[langIndex];
var firstQuestionDatabase = firstQuestionDatabases[langIndex];
var questionDatabase = questionDatabases[langIndex];
var lastQuestion = lastQuestions[langIndex];


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


var firstQuestionDatabase = Array(WHERE_HEADACHE,
                                   WHERE_HEADACHE_NOW);

var questionDatabase = Array(WHAT_COLOR,
                              WHAT_SHAPE,
                              WHAT_SIZE);


$('#lang').change(function () {
    var selection = this.value; //grab the value selected
    console.log(selection);
    langIndex = langMaps.get(selection);
    audioMap = audioMaps[langIndex];
    firstQuestionDatabase = firstQuestionDatabases[langIndex];
    questionDatabase = questionDatabases[langIndex];
    lastQuestion = lastQuestions[langIndex];
});


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
        audioId = audioMap.get(lastQuestion);
        var audioHtml = '#' + audioId;

        document
            .getElementById('question')
            .innerHTML = lastQuestion;
        console.log(lastQuestion);
        $(audioHtml).get(0).currentTime = 0;
        $(audioHtml).get(0).play();

        askId = -1;
        return;
    }

    var firstQuestion = firstQuestionDatabase[askId%2];
    


    if (questionId == 0) {
        questionTasks = shuffle(questionDatabase);
        questions = Array(firstQuestion,
                            questionDatabase[0],
                            questionDatabase[1]//,
                            //IS_HEADACHE_GONE
                            );
    }

    audioId = audioMap.get(questions[questionId]);
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

}

$(document).ready(function () {
    toggleYesNo('hidden');
});
