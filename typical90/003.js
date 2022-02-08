function Main(input) {
    //入力を整理
    input = input.trim().split(/ |\n/).map(Number);
    const N = input.shift();

    let max_bfs = bfs(input, N);
    let max_dfs = dfs(input, max_bfs, N);

    console.log(max_dfs);
}

function bfs(input, N) {
    //ループ回数
    let count = 0;
    //BFSで最短距離の中の最大値を求める
    //次行ける候補地　初期値は配列の最初にする
    let queue = [input[0]];
    //初期値からの距離
    let bfs_distance = new Array(N).fill(0);
    while (count < queue.length) {
        //現在地
        const current = queue[count];
        input.forEach((element, index) => {
            if (index % 2 != 0) return;
            if (current == element && queue.includes(input[index + 1]) == false) {
                queue.push(input[index + 1]);
                bfs_distance[input[index + 1]] = bfs_distance[current] + 1;
            }
        });
        count++;
    }

    return bfs_distance.indexOf(Math.max(...bfs_distance));
}

function dfs(input, max_bfs, N) {
    //次行ける候補地　初期値はbfsで調べた値
    let stack = [max_bfs];
    //1度探索したかどうか
    let seen = new Array(N).fill(false);
    let list = [];
    while (stack.length > 0) {
        const current = stack.pop();
        list.push(current);
        input.forEach((element, index) => {
            if (index % 2 != 0 || seen[current]) return;
            if (current == element && list.includes(input[index + 1]) == false) {
                stack.push(input[index + 1]);
                seen[current] = true;
            } else if (current == input[index + 1] && list.includes(element) == false) {
                stack.push(element);
                seen[current] = true;
            }
        });
    }
    return list.length;
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));