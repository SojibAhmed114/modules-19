// string type upperCase and lowerCase ‍and trim. trim মানে হলো অপ্রয়োজনীয় জিনিস থাকলে ফেলো দেয়া । সেটা হতে পারে ফাকা স্পেস।
let caseOne = "i live in bangladesh, i have no idea about india and bangladesh";
let caseTwo = "THE UPPER CASE TRANSFORMER WILL TAKE ANY TEXT THAT YOU HAVE AND WILL GENERATE ALL THE LETTERS INTO UPPER CASE ONES.";
console.log(caseOne.toUpperCase(), caseTwo.toLowerCase());

// // more example;
const subject = "Islamic History";
const book = "islamic history";
if (subject.toLowerCase() === book.toLowerCase()) {
    console.log("Mashaallah, nice");
    
}
else {
    console.log("Very‘, nice ");
}

//trim
const money = "   nei";
let face = "valoNa       ";
console.log(money.trim());
console.log(face.trim());

// array join and String join
let tk1 = [14, 14, 14, 14, 14, 25, 21, 41, 51, 14,];
let tk2 = ["ha", "hu", "hihi"];
let total = tk1.join(tk2);
console.log(total); 

let monesy = ["ha","ja","ka","la","lo","li"];
console.log(monesy.join("-")); 