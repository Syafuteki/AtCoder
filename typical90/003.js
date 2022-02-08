"use strict";

function Main(input) {
    //入力を整理
    input = input.trim().split(/ |\n/).map(Number);
    const N = input.shift();
    let array = bfs(input, input[0], N);
    array = bfs(input, array[0].indexOf(Math.max(...array[0])), N);
    console.log(array[1].length);
}

function bfs(input, start, N) {
    //BFSで最短距離の中の最大値を求める
    //次行ける候補地
    let queue = [start];
    //startからの距離の配列
    let distance = new Array(N).fill(-1);
    let seen = new Array(N).fill(false);
    let list = [];
    while (queue.length > 0) {
        //現在地
        const current = queue.shift();
        list.push(current);
        input.forEach((element, index) => {
            if (index % 2 != 0 || seen[current]) return;
            if (current == element && list.includes(input[index + 1]) == false) {
                queue.push(input[index + 1]);
                distance[input[index + 1]] = distance[current] + 1;
                seen[current] = true;
            } else if (current == input[index + 1] && list.includes(element) == false) {
                queue.push(element);
                distance[current] = distance[input[index + 1]] + 1;
                seen[current] = true;
            }
        });
    }

    return [distance, list];
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));