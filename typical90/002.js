function Main(input) {

    //問題文の変数に代入
    const N = input;

    //奇数はカッコ列の作成が出来ない
    if (N % 2 != 0) return 0;

    //bit全探索（種類が2個なので2進数）
    let i = 0;
    while (i < 2 ** N) {
        //10進数を2進数になおす　bit全探索
        let count = String(i.toString(2)).padStart(N, '0');
        //配列に入れなおす　書き方の問題で
        let array = count.split('');
        //左から数えて左カッコのほうが右カッコより多い　条件1
        let left = 0;
        let right = 0;
        let flag = array.some(element => {
            if (element == 0) {
                left++;
            } else {
                right++;
            }
            if (left < right) return true;
        });
        if (left == right && flag == false) console.log(Brackets(array));
        i++
    }

}

function Brackets(array) {
    let brackets = '';
    array.forEach(element => {
        if (element == 0) {
            brackets = brackets + '(';
        } else {
            brackets = brackets + ')';
        }
    });
    return brackets;
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));