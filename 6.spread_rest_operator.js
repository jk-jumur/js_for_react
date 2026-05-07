//Rest 
function myFunc(a, b, ...rest){
      console.log(a, b, rest);
}

// myFunc(1, 2, 3, 4, 6, 67, 7, 7, 100, 200);


//spread operator
//new array create korte pari  
let arr = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

//  console.log(...arr);// ekhane array ta fure number ee return korbe

// let arr3 = [...arr, ...arr2];
// console.log(arr3);


let arr3 = arr;
arr.push(500);
console.log(arr);
console.log(arr3);
