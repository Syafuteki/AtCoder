"use strict";

function Main(input) {
    //入力を整理
    input = input.trim().split(/ |\n/).map(Number);
    const N = input.shift();

    //隣接リストを作成
    const G = new Array(N).fill(null).map(() => []);
    input.forEach((element, index) => {
        if (index % 2) return;
        G[input[index] - 1].push(input[index + 1] - 1);
        G[input[index + 1] - 1].push(input[index] - 1);
    });

    //1回目
    let distance = bfs(G, 0, N);
    let max_dfs = distance.indexOf(Math.max(...distance));
    //2回目
    distance = bfs(G, max_dfs, N);
    max_dfs = Math.max(...distance);
    //最後は閉路にするため、プラス1
    console.log(max_dfs + 1);
}

//BFSで最短距離の中の最大値を求める
function bfs(G, start, N) {
    //次行ける候補地
    const queue = [start];
    //startからの距離の配列
    const distance = new Array(N).fill(-1);
    distance[start] = 0;
    while (queue.length > 0) {
        //現在地
        const current = queue.pop();
        G[current].forEach(element => {
            if (distance[element] != -1) return;
            distance[element] = distance[current] + 1;
            queue.push(element);
        });
    }

    return distance;
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));