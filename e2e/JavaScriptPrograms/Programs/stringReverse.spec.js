
function reverse() {
    const s = "sivasai";
    let rev = " ";
    for (let i = 0; i < s.length; i++) {

        rev = s.at(i) + rev;
    }
    console.log("reverse of  string: " + rev);
}
reverse();

function wordsReverse() {
    const s = "siva sai krishna";
    let sarray = s.split(" ");
    let rev = " ";

    for(let s1 of sarray){
        rev=s1+" "+rev;
    }
        console.log("reverse of  string words: " + rev);

}

wordsReverse();
