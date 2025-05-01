
const a=[1,2,3];

const b=new Array(1,2);
b.push(1);
b.push(2);

for (let index = 0; index < b.length; index++) {
    const element = b[index];
    console.log("values in b array is"+ b[index]);
    
}
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element);
}

for(let n of a){
    console.log(n);
}

for(let n in a){
    console.log(a[n]);
}