function longestPrefix(strs) {
    if (strs.length < 2) return "";

    const findPrefix = (str1, str2) => {
        let i = 0;
        while (i < str1.length && i < str2.length && str1[str1.length - 1 - i] === str2[str2.length - 1 - i]) {
            i++;
        }
        return str1.slice(str1.length - i);
    };
    let Prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        Prefix = findPrefix(Prefix, strs[i]);
        if (Prefix.length < 2) return "";
    }
    return Prefix;
}

const strs1 = ["цветок", "поток", "хлопок"];
console.log(longestPrefix(strs1)); 

const strs2 = ["собака", "гоночная машина", "машина"];
console.log(longestPrefix(strs2)); 


