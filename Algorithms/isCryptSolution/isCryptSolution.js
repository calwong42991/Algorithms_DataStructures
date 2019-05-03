function isCryptSolution(crypt, solution) {
    let decrypted = [];

    for (let elm of crypt) {
        let key = decrypt(elm, solution);
        decrypted.push(key);
    }

    

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

console.log(isCryptSolution(test1, solution1));