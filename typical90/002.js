function Main(input) {

    //問題文の変数に代入
    const N = input;

    //奇数はカッコ列の作成が出来ない
    if (N % 2 != 0) return 0;

    //bit全探索（種類が2個なので2進数）
    let i = 0;
    while (i < 2 ** N) {
        //この10進数を2進数になおしてカウント
        let count = String(i.toString(2));
        let zero = count.match(/0/g).length;
        let one = count.match(/1/g).length;
        if (zero == one || もういっこの条件入れる) {

        }
    }

}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));