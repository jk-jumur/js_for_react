
// Traditional Function
function myFunc1(a, b){
      console.log(a, b);
}
myFunc1(1, 2)

//function expression
const myFunc = function (a, b){
    console.log(a, b);
}
myFunc(1, 2);

//Arrow function (es6)
//short
const myFunc2 = (a, b)=> console.log(a, b)
myFunc2(1, 2);
//multiple
const myFunc3 = (a, b)=>{
      return a * b;
};

 const multiply = myFunc3(1, 2);
 console.log(multiply);

 //Default parameter

//  const myFunc4 = (a=1, b=1) => a * b;
  const myFunction= (a=0, b=0) => a + b;

 const multiple = myFunction(1000000000);
 console.log(multiple);


 const myFUnc4 = (name = "Hablu") => console.log(`Hello, ${name}. Good night `);

 myFUnc4("paglu");