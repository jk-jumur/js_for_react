//  const fetchUsers = ()=>{
//       fetch("https://jsonplaceholder.typicode.com/users")
//      .then ((res) => res.json())
//      .then(data => {
//         //   console.log(data)
//           throw new Error("unknown error");
//      })
//      .catch((e) => console.log(e));
//  }

//  fetchUsers();
 
 
 //ES6 er Formate

 const fetchUsers = async () =>{
     const res = await fetch ("https://jsonplaceholder.typicode.com/users")
     const data = await res.json();
     console.log(data);


 }

 fetchUsers();