"use strict";

function Main(input) {
    //入力を整理
    input = input.trim().split(/ |\n/).map(String);
    const N = Number(input[0]);
    const K = Number(input[1]);
    const S = input[2];

    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let T = "";
    let start = 0;
    for (let i = 0; i < K; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            //Tに追加した文字より左はみない
            const num = S.indexOf(alphabet[j], start);
            //N - Kでやると効率がいい＝＞辞書順でK文字確保しないよいけないのであらかじめ後ろの文字を削って調べると速い
            if (num != -1 && num <= N - K + i) {
                T += alphabet[j];
                start = num + 1;
                break;
            }
        }
    }
    console.log(T);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));