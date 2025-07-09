const m=new Map();

function addChar() {
    let a = [];

    let s2=" ";
    const s = "sivaa";

    for (let s1 of [...s]) {
        m.set(s1, (m.get(s1) || 0) + 1)  // || is used only if the first value is 0 then it will take second element
    }

    for (let [key, value] of m.entries()) {

        s2=s2+key+""+value;
    }
    console.log(s2);
}
addChar();
