const LEFT_LOWERCASE = "A";
const RIGHT_LOWERCASE = "D";
const UP_LOWERCASE = "W";
const DOWN_LOWERCASE = "S";

function setup() {
    createCanvas(0, 0);
}

function draw() {}


function keyPressed() {
    switch (key) {
        case "a":
        case "A":
            console.log("move left");
            break;
        case "d":
        case "D":
            console.log("move right");
            break;
        case "w":
        case "W":
            console.log("move up");
            break;
        case "s":
        case "S":
            console.log("move down");
            break;
        default:
            console.log("don't move!");
}
    }
