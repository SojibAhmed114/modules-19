// other try
// for (i = 1; i <= 10; i++){
//     let multip = 8 * i;
//     console.log(i,"* 9 =",multip);
// }

// Reverse A String way one: for of loop

// let sentence = "i learn web development from programming hero , Batch-9";

// let Reverse = "";
// for (let letter of sentence) {
//     Reverse = letter + Reverse;
// }
// console.log(Reverse);

// way two for loop,  optional

// let sentence = "i learn web development from programming hero , Batch-9";

// let recv =""
// for (i = 0; i < sentence.length; i++){
//     const letter = sentence[i];
//     recv = letter + recv;
// }
// console.log(recv);

//way three split,join,reverse
// let sentence = "i learn web development from programming hero , Batch-9";

// let rever = sentence.split("").reverse().join("");
// console.log(rever);


// --------------------ata main na just try file-------------------

// let bakko = "i live in bangladesh"

// let res =""
// for (let letters of bakko) {
//     res = letters + res;
// }
// console.log(res); 

let bakko = "i live in bangladesh"
const letter = bakko.split("").reverse().join("");
console.log(letter); 