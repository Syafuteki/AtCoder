"use strict";

function Main(input) {
    //入力を整理
    input = input.trim().split(/\n/).map(String);
    const N = Number(input.shift());
    const S = input.shift();
    const mod = 10 ** 9 + 7;

    const hash = { a: 1, t: 2, c: 3, o: 4, d: 5, e: 6, r: 7 };
    //dp[-1]を防ぐために、1つ増やす
    const dp = Array(8).fill(0);
    //dp[0]はaの一通り分、入れるため1
    dp[0] = 1;

    //DP法
    for (const s of S) {
        dp[hash[s]] = (dp[hash[s]] + dp[hash[s] - 1]) % mod;
    }

    console.log(dp[7]);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));