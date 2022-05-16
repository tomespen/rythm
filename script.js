let s1 = new Audio('sounds/s1.wav');
let s2 = new Audio('sounds/s2.wav');
let nIntervId;

let queue = [];
let beatsIn1Min = 60000;
let beatcount;


function start() {
    
    console.log('starting...');
    let beatcount = 0;
    if (!nIntervId) {
        
        console.log(beatcount);        
        let gtempoelemval = document.getElementById('globaltempo').value;
        let tempointerval = beatsIn1Min / gtempoelemval;
        console.log(beatsIn1Min + ' / ' + gtempoelemval + ' = ' + tempointerval);

        nIntervId = setInterval(play, tempointerval);
      }
};

function play() {
    beatcount++;
    s1.pause();
    s1.currentTime = 0;
    s2.pause();
    s2.currentTime = 0;

    if ((beatcount-1) % 4) {
        plays2();
    } else {
        plays1();
    }
}

function stopinterval() {
    console.log('stopping...');
    clearInterval(nIntervId);
    nIntervId = null;
};

function plays1() {
    console.log('ding');
    s1.play();
}
function plays2() {
    console.log('ding');
    s2.play();
}