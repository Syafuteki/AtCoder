"use strict";

function Main(input) {
    //入力を整理
    input = input.trim().split(/\n/).map(String);
    const [H, W] = input[0].split(/ /).map(Number);
    const table = Array(H + 2).fill().map(() => Array(W + 2).fill(0));
    const Q = Number(input[1]);
    const q = Array(Q).fill().map((e, i) => input[i + 2].split(/ /).map(Number));

    class UnionFind {
        constructor(size) {
            this.tree = Array(size).fill().map((e, i) => i);
        }
        root(x) {
            if (this.tree[x] == x) return x;
            return this.tree[x] = this.root(this.tree[x]);
        }
        unite(x, y) {
            const rx = this.root(x);
            const cy = this.root(y);
            if (rx == cy) false;
            this.tree[rx] = cy;
        }
        isUnion(x, y) {
            return this.root(x) == this.root(y);
        }
    }

    const uf = new UnionFind(Q);
    for (let i = 0; i < Q; i++) {
        if (q[i][0] == 1) {
            const x = q[i][1];
            const y = q[i][2];
            //赤にするマス目のクエリ番号をtableに追加する
            table[x][y] = i + 1;
            if (table[x][y - 1]) uf.unite(table[x][y], table[x][y - 1]);
            if (table[x][y + 1]) uf.unite(table[x][y], table[x][y + 1]);
            if (table[x - 1][y]) uf.unite(table[x][y], table[x - 1][y]);
            if (table[x + 1][y]) uf.unite(table[x][y], table[x + 1][y]);
        }
        if (q[i][0] == 2) {
            const ra = q[i][1];
            const ca = q[i][2];
            const rb = q[i][3];
            const cb = q[i][4];
            if (table[ra][ca] && uf.isUnion(table[ra][ca], table[rb][cb])) {
                console.log('Yes');
            } else {
                console.log('No');
            }
        }
    }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));