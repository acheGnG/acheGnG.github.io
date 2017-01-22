const ASK_NUM = 4;
const WHERE_HEADACHE = "Where is your headache?";
const WHERE_HEADACHE_NOW = "Where is your headache now?";
const WHAT_SHAPE = "What shape is it?";
const WHAT_COLOR = "What color is it?";
const WHAT_SIZE = "What size is it?";
const IS_HEADACHE_GONE = "Is your headache gone now? By now it should be gone :) If not, click continue.";

const CHI_WHERE_HEADACHE = "你的头痛在哪里？";
const CHI_WHERE_HEADACHE_NOW = "你的头痛现在在哪里？";
const CHI_WHAT_SHAPE = "它是什么形状？";
const CHI_WHAT_COLOR = "它是什么颜色?";
const CHI_WHAT_SIZE = "它是什么尺寸？";
const CHI_IS_HEADACHE_GONE = "你还有头痛吗？现在应该不觉得头痛了吧？ :) 如果还觉得头痛，请点击 continue。";

const JAP_WHERE_HEADACHE = "あなたの頭痛はどこですか?";
const JAP_WHERE_HEADACHE_NOW = "あなたの頭痛はどこにありますか?";
const JAP_WHAT_SHAPE = "それはどんな形ですか?";
const JAP_WHAT_COLOR = "何色ですか?";
const JAP_WHAT_SIZE = "それはどんなサイズですか?";
const JAP_IS_HEADACHE_GONE = "まだ 頭痛がしますか？今 たぶん 頭痛がしませんか？もし 頭痛がずっと 続くて、Continue ボタンをクリックしてください";

const FR_WHERE_HEADACHE = "Où est votre mal à la tête?";
const FR_WHERE_HEADACHE_NOW = "Où est votre mal à la tête maintenant?";
const FR_WHAT_SHAPE = "Quelle est-ce forme?";
const FR_WHAT_COLOR = "Quelle est-ce couleur?";
const FR_WHAT_SIZE = "quelle est-ce taille?";
const FR_IS_HEADACHE_GONE = "Est-ce que vous avez mal à la tête? Vous ne devrait pas avoir mal à la tête maintenant :) " + 
                            "Si vous avez mal à la tête encore, veuillez appuyer sur continue";

const CAN_WHERE_HEADACHE = "你的头痛在哪里？";
const CAN_WHERE_HEADACHE_NOW = "你的头痛现在在哪里？";
const CAN_WHAT_SHAPE = "它是什么形状？";
const CAN_WHAT_COLOR = "它是什么颜色？";
const CAN_WHAT_SIZE = "它是什么尺寸？";
const CAN_IS_HEADACHE_GONE = "你还有头痛吗？现在应该不觉得头痛了吧？ :) 如果还觉得头痛，请点击 continue。";

const MAL_WHERE_HEADACHE = "Mana sakit kepala mu?";
const MAL_WHERE_HEADACHE_NOW = "Mana sakit kepala mu sekarang?";
const MAL_WHAT_SHAPE = "Apa bentuk itu?";
const MAL_WHAT_COLOR = "Apa warna itu?";
const MAL_WHAT_SIZE = "Apa saiz itu?";
const MAL_IS_HEADACHE_GONE = "Kamu masih sakit kepala? Sekarang sepatutnya tak berasa sakit kepala lagi :) " +
                             "Kalau kamu masih berasa sakit kepala, sila tekan continue.";

const WHERE_HEADACHE_ID = "a1";
const WHERE_HEADACHE_NOW_ID = "a2";
const WHAT_SHAPE_ID = "a3";
const WHAT_COLOR_ID = "a4";
const WHAT_SIZE_ID = "a5";
const IS_HEADACHE_GONE_ID = "a6";

const CHI_WHERE_HEADACHE_ID = "a1";
const CHI_WHERE_HEADACHE_NOW_ID = "a2";
const CHI_WHAT_SHAPE_ID = "a3";
const CHI_WHAT_COLOR_ID = "a4";
const CHI_WHAT_SIZE_ID = "a5";
const CHI_IS_HEADACHE_GONE_ID = "a6";

const JAP_WHERE_HEADACHE_ID = "a1";
const JAP_WHERE_HEADACHE_NOW_ID = "a2";
const JAP_WHAT_SHAPE_ID = "a3";
const JAP_WHAT_COLOR_ID = "a4";
const JAP_WHAT_SIZE_ID = "a5";
const JAP_IS_HEADACHE_GONE_ID = "a6";

const FR_WHERE_HEADACHE_ID = "a1";
const FR_WHERE_HEADACHE_NOW_ID = "a2";
const FR_WHAT_SHAPE_ID = "a3";
const FR_WHAT_COLOR_ID = "a4";
const FR_WHAT_SIZE_ID = "a5";
const FR_IS_HEADACHE_GONE_ID = "a6";

const CAN_WHERE_HEADACHE_ID = "a1";
const CAN_WHERE_HEADACHE_NOW_ID = "a2";
const CAN_WHAT_SHAPE_ID = "a3";
const CAN_WHAT_COLOR_ID = "a4";
const CAN_WHAT_SIZE_ID = "a5";
const CAN_IS_HEADACHE_GONE_ID = "a6";

const MAL_WHERE_HEADACHE_ID = "a1";
const MAL_WHERE_HEADACHE_NOW_ID = "a2";
const MAL_WHAT_SHAPE_ID = "a3";
const MAL_WHAT_COLOR_ID = "a4";
const MAL_WHAT_SIZE_ID = "a5";
const MAL_IS_HEADACHE_GONE_ID = "a6";

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
chiAudioMap.set(CHI_WHERE_HEADACHE, CHI_WHERE_HEADACHE_ID);
chiAudioMap.set(CHI_WHERE_HEADACHE_NOW, CHI_WHERE_HEADACHE_NOW_ID);
chiAudioMap.set(CHI_WHAT_SHAPE, CHI_WHAT_SHAPE_ID);
chiAudioMap.set(CHI_WHAT_COLOR, CHI_WHAT_COLOR_ID);
chiAudioMap.set(CHI_WHAT_SIZE, CHI_WHAT_SIZE_ID);
chiAudioMap.set(CHI_IS_HEADACHE_GONE, CHI_IS_HEADACHE_GONE_ID);

var japAudioMap = new Map();
japAudioMap.set(JAP_WHERE_HEADACHE, JAP_WHERE_HEADACHE_ID);
japAudioMap.set(JAP_WHERE_HEADACHE_NOW, JAP_WHERE_HEADACHE_NOW_ID);
japAudioMap.set(JAP_WHAT_SHAPE, JAP_WHAT_SHAPE_ID);
japAudioMap.set(JAP_WHAT_COLOR, JAP_WHAT_COLOR_ID);
japAudioMap.set(JAP_WHAT_SIZE, JAP_WHAT_SIZE_ID);
japAudioMap.set(JAP_IS_HEADACHE_GONE, JAP_IS_HEADACHE_GONE_ID);

var frAudioMap = new Map();
frAudioMap.set(FR_WHERE_HEADACHE, FR_WHERE_HEADACHE_ID);
frAudioMap.set(FR_WHERE_HEADACHE_NOW, FR_WHERE_HEADACHE_NOW_ID);
frAudioMap.set(FR_WHAT_SHAPE, FR_WHAT_SHAPE_ID);
frAudioMap.set(FR_WHAT_COLOR, FR_WHAT_COLOR_ID);
frAudioMap.set(FR_WHAT_SIZE, FR_WHAT_SIZE_ID);
frAudioMap.set(FR_IS_HEADACHE_GONE, FR_IS_HEADACHE_GONE_ID);

var canAudioMap = new Map();
canAudioMap.set(CAN_WHERE_HEADACHE, CAN_WHERE_HEADACHE_ID);
canAudioMap.set(CAN_WHERE_HEADACHE_NOW, CAN_WHERE_HEADACHE_NOW_ID);
canAudioMap.set(CAN_WHAT_SHAPE, CAN_WHAT_SHAPE_ID);
canAudioMap.set(CAN_WHAT_COLOR, CAN_WHAT_COLOR_ID);
canAudioMap.set(CAN_WHAT_SIZE, CAN_WHAT_SIZE_ID);
canAudioMap.set(CAN_IS_HEADACHE_GONE, CAN_IS_HEADACHE_GONE_ID);

var malAudioMap = new Map();
malAudioMap.set(MAL_WHERE_HEADACHE, MAL_WHERE_HEADACHE_ID);
malAudioMap.set(MAL_WHERE_HEADACHE_NOW, MAL_WHERE_HEADACHE_NOW_ID);
malAudioMap.set(MAL_WHAT_SHAPE, MAL_WHAT_SHAPE_ID);
malAudioMap.set(MAL_WHAT_COLOR, MAL_WHAT_COLOR_ID);
malAudioMap.set(MAL_WHAT_SIZE, MAL_WHAT_SIZE_ID);
malAudioMap.set(MAL_IS_HEADACHE_GONE, MAL_IS_HEADACHE_GONE_ID);

var audioMaps = Array(engAudioMap,
                      chiAudioMap,
                      japAudioMap,
                      frAudioMap,
                      canAudioMap,
                      malAudioMap);

var langIndex = 0;

var engFirstQuestionDatabase = Array(WHERE_HEADACHE,
                                     WHERE_HEADACHE_NOW);

var chiFirstQuestionDatabase = Array(CHI_WHERE_HEADACHE,
                                     CHI_WHERE_HEADACHE_NOW);

var japFirstQuestionDatabase = Array(JAP_WHERE_HEADACHE,
                                     JAP_WHERE_HEADACHE_NOW);

var frFirstQuestionDatabase = Array(FR_WHERE_HEADACHE,
                                     FR_WHERE_HEADACHE_NOW);

var canFirstQuestionDatabase = Array(CAN_WHERE_HEADACHE,
                                     CAN_WHERE_HEADACHE_NOW);

var malFirstQuestionDatabase = Array(MAL_WHERE_HEADACHE,
                                     MAL_WHERE_HEADACHE_NOW);
var firstQuestionDatabases = Array(engFirstQuestionDatabase,
                                  chiFirstQuestionDatabase,
                                  japFirstQuestionDatabase,
                                  frFirstQuestionDatabase,
                                  canFirstQuestionDatabase,
                                  malFirstQuestionDatabase);



var engQuestionDatabase = Array(WHAT_COLOR,
                                WHAT_SHAPE,
                                WHAT_SIZE);

var chiQuestionDatabase = Array(CHI_WHAT_COLOR,
                                CHI_WHAT_SHAPE,
                                CHI_WHAT_SIZE);

var japQuestionDatabase = Array(JAP_WHAT_COLOR,
                                JAP_WHAT_SHAPE,
                                JAP_WHAT_SIZE);

var frQuestionDatabase = Array(FR_WHAT_COLOR,
                                FR_WHAT_SHAPE,
                                FR_WHAT_SIZE);

var canQuestionDatabase = Array(CAN_WHAT_COLOR,
                                CAN_WHAT_SHAPE,
                                CAN_WHAT_SIZE);

var malQuestionDatabase = Array(MAL_WHAT_COLOR,
                                MAL_WHAT_SHAPE,
                                MAL_WHAT_SIZE);
var questionDatabases = Array(engQuestionDatabase,
                                  chiQuestionDatabase,
                                  japQuestionDatabase,
                                  frQuestionDatabase,
                                  canQuestionDatabase,
                                  malQuestionDatabase);

var englastQuestion = IS_HEADACHE_GONE;
var chilastQuestion = CHI_IS_HEADACHE_GONE_ID;
var japlastQuestion = JAP_IS_HEADACHE_GONE;
var frlastQuestion = FR_IS_HEADACHE_GONE;
var canlastQuestion = CAN_IS_HEADACHE_GONE;
var mallastQuestion = MAL_IS_HEADACHE_GONE;
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


$('#lang').change(function () {
    var selection = this.value; //grab the value selected
    console.log(selection);
    langIndex = languageMap.get(selection);
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
    document.getElementById('analyser').style.visibility = state;
}

function runLoopQuestion() {
    if (questionId == 0) {
        setTimeout(toggleAnalyserDisplay('visible'), 1000);
    } else {
        toggleAnalyserDisplay('visible');
    }
    setTimeout(loopQuestionWithoutRecording, 3000);
    
}

function loopQuestionWithoutRecording() {
    toggleAnalyserDisplay('hidden');
    if (questionId == -1) {
        $("#record").trigger("click");
        $("#save")[0].click();
    }
    loopQuestion();
}

function runCure() {

    document.getElementById('lang').style.display = 'none';
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

$(window).on('load', function () {
    var canvas = document.getElementById('analyser');
    var image = document.getElementById('iconimg');
    document.getElementById('iconimg').style.left = canvas.width / 2 - image.width / 2;
    document.getElementById('iconimg').style.top = canvas.height / 2 - image.height / 2;
    document.getElementById('jumbotron').style.display = 'none';
    //document.getElementById('jumbotron').style.display = 'block';
});


$(document).ready(function () {
    toggleYesNo('hidden');

    
});
