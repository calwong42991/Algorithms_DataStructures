function isCryptSolution(crypt, solution) {
    let decrypted = [];

    for (let elm of crypt) {
        let key = decrypt(elm, solution);
        decrypted.push(key);
    }

    console.log(decrypted);

    return check(decrypted);
}

function decrypt(element, solution) {
    let output = [];
    let arr = element.split('');

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < solution.length; j++) {
            if (element[i] === solution[j][0]) {
                output.push(solution[j][1]);
            }
        }
    }

    return output.join('');
}

function check(arr) {
    for (let elm of arr) {
        if ((elm[0] === '0') && (elm.length > 1)) {
            return false;
        }
    }

    let count = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        count += Number(arr[i]);
    }

    return count === Number(arr[arr.length - 1]);

}

let test1 = ["SEND", "MORE", "MONEY"];

const solution1 = [
    ['O', '0'],
    ['M', '1'],
    ['Y', '2'],
    ['E', '5'],
    ['N', '6'],
    ['D', '7'],
    ['R', '8'],
    ['S', '9']
]

let test2 = ["TEN", "TWO", "ONE"];
let solution2 = [
    ['O', '1'],
    ['T', '0'],
    ['W', '9'],
    ['E', '5'],
    ['N', '4']
];

console.log(isCryptSolution(test1, solution1));
console.log(isCryptSolution(test2, solution2));