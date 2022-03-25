"use strict";

function Main(input) {
    //入力を整理
    input = input.trim().split(/\n/).map(String);
    const N = Number(input[0]);
    const [A, B, C] = input[1].split(/ /).map(Number);

    //条件
    const MAX = 9999;

    let sheet = 9999;

    for (let x = 0; x < MAX; x++) {
        for (let y = 0; x + y < MAX; y++) {
            const calc = N - (A * x + B * y);
            if (calc >= 0 && calc % C == 0) {
                const z = (N - (A * x + B * y)) / C;
                sheet = Math.min(sheet, x + y + z);
            }
        }
    }

    console.log(sheet);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));