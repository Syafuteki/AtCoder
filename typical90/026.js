"use strict";

function Main(input) {
    //入力を整理
    input = input.trim().split(/ |\n/).map(Number);
    const N = input.shift();

    //隣接リストを作成
    const G = new Array(N).fill(null).map(() => []);
    input.forEach((e, i) => {
        if (i % 2) return;
        G[input[i] - 1].push(input[i + 1] - 1);
    });

    const G1 = [];
    const G2 = [];
    const list = Dfs(G, 0, N);
    for (let i = 0; i < N; i++) {
        if (list[i] == 1) G1.push(i + 1);
        if (list[i] == 2) G2.push(i + 1);
    }
    if (G1.length > G2.length) {
        console.log(G1.splice(0, N / 2).join(" "));
    } else {
        console.log(G2.splice(0, N / 2).join(" "));
    }

}

//DFS
function Dfs(G, start, N) {
    const stack = [start];
    //訪れた順番を格納
    const result = [];
    const visited = new Array(N).fill(false);
    //訪問済みフラグを立てる
    visited[start] = true;
    //色付け
    const color = new Array(N).fill(0);
    while (stack.length) {
        const current = stack.pop();
        result.push(current);
        if (color[current] == 0) color[current] = 1;
        G[current].forEach(e => {
            if (visited[e] == false) {
                visited[e] = true;
                stack.push(e);
                if (color[current] == 2 && color[e] == 0) color[e] = 1;
                if (color[current] == 1 && color[e] == 0) color[e] = 2;
            }
        });
    }
    return color;
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));