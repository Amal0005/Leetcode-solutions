var isValid = function (word) {
    let vowels = "aeiouAEIOU";
    let consonants = "bcdfghjklmnpqrstvxyzBCDFGHJKLMNPQRSTVWXYZ";
    let hasVowel = false;
    let hasConsonant = false;

    if (word.length < 3) return false;

    for (let i = 0; i < word.length; i++) {
        let a = word[i];

        if (!/^[a-zA-Z0-9]$/.test(a)) return false;
        if (vowels.includes(a)) {
            hasVowel = true;
        } else if (consonants.includes(a)) {
            hasConsonant = true;
        }
    }

    return hasVowel && hasConsonant;
};