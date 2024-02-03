//object.keys: object এর property কে keys ও বলা যায়।  property গুলোকে arry করে পেতে চাইলে object.keys ব্যবহার করা হয়।
//object.values: object এর property গুলোকে arry করে পেতে চাইলে object.values ব্যবহার করা হয়।



let computer = {
    brand: "kingstar",
    prices: 50000,
    color: ["blue", "dark", "red", "yellow", "green"],
    market: {
        total: 5,
        mName: ["gaibandha", "bogra", "rajshahi", "pabna"],
        others: {
            otherBrand: ["samsung", "apple", "redmi"],
            mobile:"lenovo"
        }
    }
}
//........nested............
console.log(computer.market.others.otherBrand); // output;["samsung", "apple", "redmi"]

// values change
computer.market.others.otherBrand[1] = "orange";
console.log(computer["market"].others.otherBrand); 
//output:  ['samsung', 'orange', 'redmi']

//delete property
delete computer.brand
console.log(computer); 


//.........................................
let key = Object.keys(computer.market);
console.log(key); 
// output: ['total', 'mName', 'others']

//.........................................
let value = Object.values(computer);
console.log(value); 
//output only value show korbe.