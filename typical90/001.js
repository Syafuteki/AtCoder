function Main(input) {
    input = input.split('\n');
    line_1 = input[0].split(' ');
    line_2 = input[1];
    line_3 = input[2].split(' ');

    const N = Number(line_1[0]);
    const L = Number(line_1[1]);
    const K = Number(line_2[0]);
    const array = [];
    array.push(Number(line_3[0]));
    for (let i = 1; i < line_3.length; i++) {
        array.push(Number(line_3[i] - line_3[i - 1]));
    }
    array.push(Number(L - line_3[line_3.length - 1]));

    let left = 0;
    let right = L;
    while (left <= right) {
        let mid = Math.round((left + right) / 2);
        let position = 0;
        let cut_number = 0;
        array.forEach((element, index) => {
            position += array[index];
            if (position >= mid) {
                cut_number++;
                if (mid > L - position) {
                    cut_number--;
                }
                position = 0;
            }
        })
        if (cut_number >= K + 1) {
            left = mid;
        } else {
            right = mid;
        }
    }

    console.log(left);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));