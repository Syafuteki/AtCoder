function Main(input) {
    //入力を整理
    input = input.split('\n');
    line_1 = input[0].split(' ');
    line_2 = input[1];
    line_3 = input[2].split(' ');

    //問題文の変数に代入
    const N = Number(line_1[0]);
    const L = Number(line_1[1]);
    const K = Number(line_2[0]);
    const array = [];
    let previous = 0;
    line_3.forEach((element, index) => {
        array.push(Number(line_3[index] - previous));
        previous = line_3[index]
    })
    //最後の切れ端
    array.push(Number(L - line_3[line_3.length - 1]));

    //二分探索
    let left = -1;
    let right = L + 1;
    while (right - left > 1) {
        let mid = Math.round(left + (right - left) / 2);
        //今の羊羹の長さ
        let position = 0;
        //切った回数
        let cut_number = 0;
        //mid以上の長さになったら切る
        array.forEach((element, index) => {
            position += array[index];
            if (position >= mid) {
                cut_number++;
                position = 0;
            }
        })
        //切った個数がK以上か見る
        if (cut_number >= K + 1) {
            left = mid;
        } else {
            right = mid;
        }
    }

    console.log(Math.round(left));
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));