let str = 'How can mirrors be real if our eyes aren\'t real';

//split the above string into an array of strings

let arr = str.split(' ');

//loop through each element of the array and capitalize the first letter.
for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}

//Join all the elements of the array back into a string
//using a blankspace as a separator
let str2 = arr.join(' ');
console.log(str2);
