"use strict";

function Main(input) {
    //入力を整理
    input = input.trim().split(/\n/).map(String);
    const [N, M] = input[0].split(/ /).map(Number);
    let agc = [];
    for (let i = 0; i < M; i++) agc.push(input[i + 1].split(/ /).map(Number));

    const road1 = Dijkstra(1, agc, N, N, M);
    //Nから始めるため、それに自分のアルゴリズムが合うよう調整
    agc = agc.map(e => [e[1], e[0], e[2]]);
    const roadN = Dijkstra(N, agc, 1, N, M);

    for (let i = 0; i < N; i++) console.log(road1[i] + roadN[i]);
}

function Dijkstra(start, agc, end, N, M) {
    const queue = [start];
    const road = new Array(N).fill(10000 + 1);

    road[start - 1] = 0;
    let index = start;

    //queueが0個になるまでではなく、indexが未定義までにしたのはpopした後、すぐに条件チェックが入り、最後の1周ができないから
    //始めにもってこないのは完成した時になんとなく終わりに書いていたため
    while (index != undefined) {
        for (let i = 0; i < M; i++) {
            const from = agc[i][0];
            const to = agc[i][1];
            const dist = agc[i][2];
            if (road[to - 1] > road[from - 1] + dist) {
                road[to - 1] = road[from - 1] + dist;
                queue.push(to);
            }
        }
        index = queue.pop();
    }

    return road;
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));