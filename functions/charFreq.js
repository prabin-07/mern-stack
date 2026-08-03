//Count the frequency of each character
function countF(str) {
    for (let i = 0; i < str.length; i++) {
        let alreadyCounted = false;
        for (let j = 0; j < i; j++) {
            if (str[i] === str[j]) {
                alreadyCounted = true;
                break;
            }
        }
        if (alreadyCounted) continue;
        let count = 0;
        for (let k = 0; k < str.length; k++) {
            if (str[i] === str[k]) {
                count++;
            }
        }
        console.log(str[i], "=", count);
    }
}

let s = "welcome";
countF(s);