//Falsy Value -> falsy, 0, "", null, undefined, NaN
//Truthy value -> falsy value gulo bad diye baki sob truthy value 
// console.log(5 * "test");

let arr = [1,2,3,4,5,6, 300]

let isThreeHundredExit = arr.find(elem=> elem === 300)
console.log(isThreeHundredExit);

if(isThreeHundredExit){
     console.log("yes, three hundred exist");
}else{
     console.log("sorry three hundred not found")
}



 if("Hello"){
      console.log("If block triggered");
 } else{
       console.log("Else block triggered");
 }