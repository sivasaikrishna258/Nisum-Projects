

function dupplicate() {
    const s = "sivasaikk";
    const a = [...s];
    let n = " ";
    let n1 = " ";
    for (let i = 0; i < a.length; i++) {
        let c = 1;
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] === a[j]) {
                c++;
                a[j] = '\0';
                break;
            }
        }

        if (c > 1 && a[i] != '\0') {
            n1 = n1 + a[i];
        }

        if (a[i] != '\0') {

            n = n + a[i];
        }
    }
    console.log("Duplicate characters in string :" + n1);
    console.log("After removing duplicate characters from string :" + n);


}


dupplicate();