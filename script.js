let s1 = new Audio('sounds/s1.wav');
let s2 = new Audio('sounds/s2.wav');
let nIntervId;

queue = [];
beatsIn1Min = 60000;

let gtempoelemval = document.getElementById('globaltempo').value;

let tempointerval = beatsIn1Min / gtempoelemval;
console.log(beatsIn1Min + ' / ' + gtempoelemval + ' = ' + tempointerval);

function start() {
    console.log('starting...');
    if (!nIntervId) {
        nIntervId = setInterval(plays1, tempointerval);
      }
};

function stopinterval() {
    console.log('stopping...');
    clearInterval(nIntervId);
    nIntervId = null;
};

function plays1() {
    console.log('ding');
    s1.play();
}