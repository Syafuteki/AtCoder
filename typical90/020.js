"use strict";

function Main(input) {
    //入力を整理
    input = input.trim().split(/\n/).map(String);
    const [a, b, c] = input[0].split(/ /).map(BigInt);

    if (a < c ** b) return console.log("Yes");
    console.log("No");
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));