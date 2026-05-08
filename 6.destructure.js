
//Array Destructuring
const arr = [1,2, 3, 4, 5, 6, 7, 8, 9];

//traditional way
// let one = arr[0];
// let two = arr[1];
// console.log(one, two);

//destructuring

const [one, two, , , , , seven] = arr
console.log(one, two, seven);


//Object Destructuring

let obj = {
    name: "JK",
    address: "chand ki upar ghar",
    age: 23,
    street: "pahar ki upar",
    city: "switzerland",
    language: "English",
    hobby:"amir banna he mujhe bohot jada uski bad meri apni pasandki khana  pina ghum na or khub surat dress lena mera hobby he",
    location: {
         district: "Japan",
         union: "Test",
         address: {
             streetNumber: "10A",
             house: "20B"
         }
    }
}

// let {street, name, address, age , location: { address: locationAddress}, ...rest} = obj;
let {street, name, address, age , location: { address: {house}}, ...rest} = obj;
// console.log(street, name, address, age, location, rest);

// console.log(locationAddress);
 console.log(house);

