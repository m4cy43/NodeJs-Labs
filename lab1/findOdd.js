// IT-04 Poltava Violetta
// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(A) {
    let count = 0;
    let arr = A.sort((a, b) => a - b); // sort array in ascending order

    for (let i = 0; i < arr.length; i++) { 
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++;
            }
        }        
        // if count is odd
        if (count % 2 !== 0) {
            return arr[i];
        }
    }
}

let arr1 = [20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5];
let res1 = findOdd(arr1);
console.log("The odd is: " + res1);

// Як це працює:
// Перший цикл: [i = 1]
// 1 1 True
// 1 1 True
// 1 2
// 1 2
// 1 3
// 1 3
// 1 4
// 1 4
// 1 5
// 1 5
// 1 5
// 1 20
// 1 20
// Через те, що є два 'true', переходимо до наступного циклу
// Перейдемо до [j = 5]
// 5 1
// 5 1
// 5 2
// 5 2
// 5 3
// 5 3
// 5 4
// 5 4
// 5 5 True
// 5 5 True
// 5 5 True
// 5 20
// 5 20