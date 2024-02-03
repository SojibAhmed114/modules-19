
// simple object structure
const bottle = {
    color: "while",
    brand: "samsung",
    quality: "high",
    pirce:42
}
//object ar value dui vabe update kora jay.
// 1. dot notation 
bottle.brand = "apple"; 
console.log(bottle); // age samsung chilo

// 2. bracket notation
bottle["pirce"] = 45;
console.log(bottle); 



//multiple object structure:
let sojib = {
    address: "gaibandha",
    nickName: "safi",
    age: 21,
    fatherName: "abdus salam",
    study: {
        ssc: true,
        hsc: true,
        honours: false
    }
}

//object output or access dekha or neya jay dui niyom a;
//1. dot notation
console.log(sojib.age); //output:21
//dot notation ke abar variable ar moaddhe rekhe output dekha jay
const boyos = sojib.age;
console.log(boyos); //output: 21

// 2. bracket notation
console.log(sojib["address"]); 
//bracket notation ke abar variable ar moaddhe rekhe output dekha jay
let basa = sojib["address"];
console.log(basa); 

//alada variable a rekhe o access neya jay
let baba = "fatherName";
console.log(sojib[baba]); 

////alada variable a rekhe update o kora  jay
let nicks = "nickName";
sojib[nicks] = "sakil";
console.log(sojib[nicks]); 
