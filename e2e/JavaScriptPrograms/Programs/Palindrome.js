
let s = "sis";
let rev = "";

for (let c of [...s]) {
    rev = c + rev;
}
console.log(rev);
if (rev === s) {
    console.log("palindrome");
} else {
    console.log("not palindrome");
}