document.addEventListener("DOMContentLoaded", function(event){

function block(pos, id, rotation, colour) {
    this.pos = pos;
    this.id = id;
    this.rotation = rotation;
    this.colour = colour;
}

const startpos = "x5y20";
const startrotation = "1";
let pos = startpos;
let id = "1";
let rotation = "1";
let colour = "block";
let x = startpos.slice(1,2);
let y = startpos.slice(3);
let check;
let checkx = 1;
let checky = 1;
let blockcombo;
let interval;
let block0 = new block(pos, id, rotation, colour);

addEventListener('keydown', takekey);
    function takekey(event) {
        document.getElementById(block0.pos).classList.remove("blocked");
        document.getElementById(block0.pos).classList.remove(colour);
        if (event.key === 'ArrowUp') {if (rotation === 4) {rotation = 1} else {rotation++}}
        if (event.key === 'ArrowLeft'  && x > 1) {x--}
        if (event.key === 'ArrowRight' && x < 10) {x++}
        if (event.key === 'ArrowDown') {clearInterval(interval); y--;  interval = setInterval(gamespeed, 500);}
        block0.pos = "x" + x + "y" + y;
        setTimeout(hit, 1)
        document.getElementById(block0.pos).classList.add("blocked");
        document.getElementById(block0.pos).classList.add(colour);
    }

function respawn() {
    id++;
    rotation = 1;
    console.log(block0)
    block0 = new block(pos, id, rotation, colour)
    console.log(block0)
}

function hit() {

    if (y === 1) {console.log("Verkackt"); respawn();}
}

function fullline() {
 
    if (blockcombo === 10) {alert("Volle Reihe")}
    else {blockcombo = 0;}
    for(i = 1; i <= 20; i++) {
        for(j = 1; j <= 10; j++) {
            check = "x" + j + "y" + i
            if (document.getElementById(check).classList.contains("blocked")) {blockcombo++; console.log("Es geht?")}
            document.getElementById(check).classList.add("gayshit");
            if (blockcombo++) {}


        }
    }
}

function display() 
{
    document.getElementById(block0.pos).classList.remove("blocked");
    document.getElementById(block0.pos).classList.remove(colour);
    if (x < 10) {y = block0.pos.slice(3); y--;}
    if (x === 10) {y = block0.pos.slice(4); y--;}
    block0.pos = "x" + x + "y" + y;
    document.getElementById(block0.pos).classList.add("blocked");
    document.getElementById(block0.pos).classList.add(colour);
}

function gamespeed() {
console.log("owo");
display();
setTimeout(hit, 1);
}

document.getElementById(block0.pos)
interval = setInterval(gamespeed, 500)

setInterval(fullline, 30)
});