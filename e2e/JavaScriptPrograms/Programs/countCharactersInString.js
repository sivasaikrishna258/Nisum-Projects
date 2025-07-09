let s="Sivasai,Krishna";

let count=0;

s=s.toLowerCase();

s=s.replace(/[^a-zA-Z0-9]/g,"");

console.log(s);
for(let c of [...s]){
    if(c!=" "){
        count++;
    }
}
console.log("Toatal characters in string "+count);