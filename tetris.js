let startpos ="x5y19";
let posnew = startpos;
let x = posnew.slice(1,2);
let y = posnew.slice(3);
let posold = "x5y20";
let color = "<style>color: green;</style>";
let Left = 0;
let Right = 0;
let block = "block"
let id = "1"
let blockid = "block1"
let oldblockid ="block0"

addEventListener('keydown', takekey);

function gamespeed() {
    document.getElementById(posold).classList.remove(block);
    movement();
    posold = posnew;
    display();
}

function takekey(event) {
    if (event.key === 'ArrowLeft') {Left = '1'; Right = '0'}
    if (event.key === 'ArrowRight') {Right = '1'; Left = '0'}
}
function movement() {
    if (Left === '1') {x--; Left = '0'}
    if (Right === '1') {x++; Right = '0'}
    posnew = "x" + x + "y" + y;
}

function respawn() {
    posnew = startpos;
    x = posnew.slice(1,2);
    y = posnew.slice(3);
    posold = 'x5y20'; 
}

function display() {
    document.getElementById(posnew).classList.add(block)
}

function gravity() {
    y = y - 1;

    blockid = block + id;
    oldblockid = blockid;
    newpos = document.getElementById(posnew).className.valueOf()
    if (oldblockid > PLACEHOLDER) {}


    id++;
    blockid = block + id;
}   

setInterval(gravity, 1000)
setInterval(gamespeed, 100)