// string slice মানে হলো : কোন একটি string variable থেকে আলাদা করে নিয়ে অন্য variable এ নিয়ে যাওয়া।
let address = "saghata";
let results = address.slice(1, 4);
/// let results = address.slice(-2);    //akta vlues o use kora jabe
console.log(results);  //output:agh

//string split- string to array convet করে। মানে হলো : কোন একটি string variable আলাদা করে ফেলা সেই সাথে array করে array এর মধ্যে রাখা।

const school = "my school is best school of our area";
console.log(school.split());
//output: ['my school is best school of our area'] () করে রাখলে সব গুলোকে একটা array এর মধ্যে রাখবে।
console.log(school.split(""));
//output: ['m', 'y', ' ', 's', 'c', 'h', 'o', 'o', 'l', ' ', 'i', 's', ' ', 'b', 'e', 's', 't', ' ', 's', 'c', 'h', 'o', 'o', 'l', ' ', 'o', 'f', ' ', 'o', 'u', 'r', ' ', 'a', 'r', 'e', 'a'] //  (””) করে রাখলে সব গুলোকে একটা aray এর আলাদা আলাদা রাখবে।
console.log(school.split(" "));
//output: ['my', 'school', 'is', 'best', 'school', 'of', 'our', 'area'] (” ”) output: একটা স্পেস দিয়ে রাখলে প্রত্যেক টা ওর্য়াড কে আলাদা আলাদা করে ফেলবে।
console.log(school.split("o"));
//output: ['my sch', '', 'l is best sch', '', 'l ', 'f ', 'ur area'] কোন সংখ্যা দিয়ে তা ভাগ করে ফেলবে, মানে রাখবে না।

const friendName = "sojib,safi,shohan.alomgir,alamin,mizan";
const allName = friendName.split(",");
console.log(allName); 

//output: ['sojib', 'safi', 'shohan.alomgir', 'alamin', 'mizan']



//string join: join array to string convert করে, মানে হলো সবগুলো উপাদান কে একসাথে করা এবং ‍ array থেকে সাধারণ string করা। join করার সময় চাইলে +,| এগুলো ব্যবহার করা যাবে।
const myFriends = ["himel", "hasikur", "nazmul", "wapel", "sagor"];
const onlyfrd = myFriends.join("|");
console.log(onlyfrd); 
//output: himel|hasikur|nazmul|wapel|sagor


//string concat: duita alada variable ar string k aksathe jora lagano. ata concat chara o kora jay,  
let srt1 = "sojib"
let srt2 = "ahmed"
// **one
// let adds = srt1 + srt2;
// console.log(adds);

//** two
// let adds = srt1 + " " + srt2;
// console.log(adds);

//** three
let adds = srt1.concat(srt2); //or let adds = srt1.concat("").concat("srt2");
console.log(adds);


//string includes : মানে হলো string এর মধ্যে কোনো উপাদান আছে কিনা । থাকলে true দেখাবে
const texts = "sojibAhmedSafi";
console.log(texts.includes("d")); //output: true