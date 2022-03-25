"use strict";

function Main(input) {
    //入力を整理
    input = input.trim().split(/\n/).map(String);
    const T = Number(input.shift());
    const [L, X, Y] = input.shift().split(/ /).map(Number);
    const [Q, ...E] = input.map(Number);

    for (const e of E) {
        const x = 0;
        const y = - (L / 2) * Math.sin(e / T * 2 * Math.PI);
        const z = (L / 2) - (L / 2) * Math.cos(e / T * 2 * Math.PI);
        const a = Math.sqrt(Math.pow(x - X, 2) + Math.pow(y - Y, 2));
        const b = z;
        const angle = Math.atan2(b, a) * 180 / Math.PI;
        console.log(angle);
    }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));