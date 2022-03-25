"use strict";

function Main(input) {
    //入力を整理
    input = input.trim().split(/\n/).map(String);
    const N = Number(input[0]);
    const A = input[1].split(/ /).map(Number).sort((a, b) => a - b);
    const B = input[2].split(/ /).map(Number).sort((a, b) => a - b);

    const E = Greedy(A, B, N);
    console.log(E);
}

function Greedy(A, B, N) {
    let E = 0;
    for (let i = 0; i < N; i++) E += Math.abs(A[i] - B[i]);
    return E;
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));