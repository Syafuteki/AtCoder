"use strict";

function Main(input) {
    //入力を整理
    input = input.trim().split(/\n/).map(String);
    const N = Number(input.shift());
    const A = input.shift().split(/ /).map(Number).sort((a, b) => a - b);
    const Q = Number(input.shift());
    const B = input.map(Number);

    //差が1番小さいのを求める
    B.forEach(e => {
        const array = binarySearch(A, e, N);
        const diff_1 = Math.abs(array[0] - e);
        const diff_2 = Math.abs(array[1] - e);
        console.log(Math.min(diff_1, diff_2));
    });
}

//2分探索
function binarySearch(A, element, N) {
    let min = 0;
    let max = N - 1;
    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        if (A[mid] == element) {
            //配列内にBの要素（element）がある時は、ここでreturnする
            return [A[mid], A[mid]];
        } else if (A[mid] < element) {
            min = mid + 1;
        } else {
            max = mid - 1;
        }
    }
    //0と-1比較の時は-1が配列参照できないため、ここでreturnする
    if (max + min < 0) return [A[0], A[0]];
    //NとN-1比較の時はNが配列参照できないため、ここでreturnする
    if (max + min > (N - 1) * 2) return [A[N - 1], A[N - 1]];
    return [A[min], A[max]];
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));