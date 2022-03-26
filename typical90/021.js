"use strict";

function Main(input) {
    //入力を整理
    input = input.trim().split(/ |\n/).map(Number);
    const N = input.shift();
    const M = input.shift();

    //隣接リストを作成
    const G1 = new Array(N).fill(null).map(() => []);
    const G2 = new Array(N).fill(null).map(() => []);
    input.forEach((e, i) => {
        if (i % 2) return;
        G1[input[i] - 1].push(input[i + 1] - 1);
        G2[input[i + 1] - 1].push(input[i] - 1);
    });
    const set1 = Dfs(G1, 0, N).reverse();
    let ans1 = 0;
    for (const e of set1) ans1 += (e * (e - 1)) / 2;
    const set2 = Dfs(G2, N - 1, N);
    let ans2 = 0;
    for (const e of set2) ans2 += (e * (e - 1)) / 2;

    console.log(set1.length);
}

//DFS
function Dfs(G, start, N) {
    const stack = [start];
    //頂点が訪問済みかどうか
    const visited = new Array(N).fill(false);
    visited[start] = true;
    const list = [];
    while (stack.length) {
        //現在地
        const current = stack.pop();
        G[current].forEach(e => {
            if (visited[e] == true) return;
            visited[e] = true;
            list.push(e + 1);
            stack.push(e);
        });
    }

    return list;
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));