//Map , filter, find, optionally reduce method use

 //ES6 er Formate

 const products = [
  {
    id: 1,
    type: "phone",
    brand: "Apple",
    model: "iPhone 15",
    price: 999,
    stock: 12,
    company: {
        name: "Apple",
        bs: "test"

    }
  },

  {
    id: 2,
    type: "phone",
    brand: "Samsung",
    model: "Galaxy S24",
    price: 899,
    stock: 8,
     company: {
        name: "Apple",
        bs: "test"

    }
    
  },

  {
    id: 3,
    type: "phone",
    brand: "Google",
    model: "Pixel 8",
    price: 699,
    stock: 15,
    isExpensive: false,
     company: {
        name: "Apple",
        bs: "test"

    }
  },

  {
    id: 4,
    type: "laptop",
    brand: "Apple",
    model: "MacBook Air M3",
    price: 1299,
    stock: 5,
    isExpensive: true,
     company: {
        name: "Apple",
        bs: "test"

    }
  },

  {
    id: 5,
    type: "laptop",
    brand: "Dell",
    model: "XPS 15",
    price: 1499,
    stock: 7,
     company: {
        name: "Apple",
        bs: "test"

    }
  },

  {
    id: 6,
    type: "laptop",
    brand: "Lenovo",
    model: "ThinkPad X1",
    price: 1399,
    stock: 4,
     company: {
        name: "Apple",
        bs: "test"

    }
  }
];


//map
// const newProducts = products.map(pd => pd.price >= 1000 ? 
//     {...pd, isExpensive: true } 
//     : {...pd, isExpensive: false},

// )

//sort
// const newProducts = products.map((pd) => {
//     return{...pd, isExpensive: pd.price>= 1000 ? true : false}
// });


const newProducts = products.map((pd) => {
    return{...pd, isExpensive: pd.price>= 1000}
});

// console.log(newProducts);


//Filter Method
// const expensiveProducts = products.filter((pd) => pd.price >= 1000);

const expensivePhones = products.filter((pd) => pd.price <= 1000 && pd.type === "phone");

if(expensivePhones.length === 0){
    console.log("Expensive phone nai");
} else{
    console.log("Expensive phone ache");
}

// console.log(expensivePhones);
//filter and find 2tar khetrei ami chaile multiple condition add korte pari .tar jonno && operator and || logical operator use korte pari

//Find Method
// const expensiveProducts = products.find((pd) => pd.price >= 1000);

const expensivePhones1 = products.find((pd) => pd.price >= 3000);
// console.log(expensivePhones1);

// console.log(expensiveProducts);


// const expensiveLaptops = products.filter(pd => pd.price >= 1000 && pd.type === "laptop").map(pd=> ({...pd, isExpensive: true }));


// const expensiveLaptops = products.filter(pd => pd.price >= 1000 && pd.type === "laptop")
// .map((pd)=> ({id: pd.id,  name: pd.model, brand: pd.brand }));

// console.log(expensiveLaptops);

const expensiveLaptops = products.filter((pd) => pd.price >= 1000 && pd.type === "laptop")
.map((pd) => ({
     id: pd.id,
     name: pd.model,
     brand: pd.brand,
    //  company: pd.company
      companyName: pd.company?.name
}));

console.log(expensiveLaptops);