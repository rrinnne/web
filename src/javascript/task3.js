function spinWords(sentence) {
    return sentence.split(' ').map(word => {
        if (word.length >= 5) {
            return word.split('').reverse().join('');
        }
        return word;
    }).join(' ');
}

const result1 = spinWords("Привет от Legacy");
console.log(result1);

const result2 = spinWords("This is a test");
console.log(result2);