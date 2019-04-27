const vowelsCount = (str) => {
    let vowelsCount = 0;

    if (typeof str !== 'string') return false;

    const vowelsArr = ['a', 'e', 'i', 'o', 'u'];
    const letterArr = str.toLowerCase().split('');
    letterArr.forEach(letter => {
        vowelsArr.forEach(vowel => {
            if (letter === vowel) vowelsCount++;
        });
    });

    return vowelsCount;
}

module.exports = vowelsCount;