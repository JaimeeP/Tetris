const startpos ="x5y20";
let posnew = startpos;
let x = posnew.slice(1,2);
let y = posnew.slice(3);
let posold = "x" + x + "y" + (y++);
let posnext = "x" + x + "y" + (y--);
let Down = 0;
let block = "block"
let id = "1"
let gamespeedinterval = '10';
let gravityinterval = '1000';
let gravitytimer = setInterval(gravity, gravityinterval);
let gamespeedtimer = setInterval(gamespeed, gamespeedinterval);
let TESTVAR;

function respawn() {
    posnew = startpos;
    x = posnew.slice(1,2);
    y = posnew.slice(3);
    posold = "x" + x + "y" + (y++);
    posnext = "x" + x + "y" + (y--);
}

addEventListener('keydown', takekey);

function gamespeed() {
    document.getElementById(posold).classList.remove(block);
    movement();
    posold = posnew;
    display();
}

function takekey(event) { //Nimmt Tastendrücke, aber nur als 1 oder 0
    if (event.key === 'ArrowLeft') {x--}
    if (event.key === 'ArrowRight') {x++}
    if (event.key === 'ArrowDown') {Down = '1'}
}

function movement() {
    /*NO TOUCHIE, wenn doch dann viel Spaß den Pause-Effekt nach dem beschleunigen nach unten wieder heile zu bekommen*/
    if (Down === '1') {
        clearInterval(gravitytimer);
        gravitytimer = setInterval(gravity, 10); Down = '0';
        gravitytimer = setInterval(gravity, gravityinterval);}
    /*NO TOUCHIE Ende*/
    posnew = "x" + x + "y" + y;
}

function display() {
    document.getElementById(posnew).classList.add(block)
}

function gravity() {
    alert("gravity1")
    y--;
    posnext = "x" + x + "y" + y--;
    y++;
    TESTVAR = document.getElementById(posold).classList.value.valueOf(id);
    TESTVAR = TESTVAR.slice(0,-5)
    TESTVAR = TESTVAR.slice(-2)
        alert(TESTVAR + " testvar");

    if (document.getElementById(posnew).classList.contains(id)) {
        id++;
        respawn();
        alert("function gravity if 1")
    }

    if (TESTVAR < id) {
        respawn();
        alert("function gravity if 2")
    }

    document.getElementById(posold).classList.add(id);
    if (0 >= y) {
        respawn();
        alert("function gravity if 3")
    }

    clearInterval(gravitytimer);
    clearInterval(gravitytimer);
    gravitytimer = setInterval(gravity, gravityinterval)
}