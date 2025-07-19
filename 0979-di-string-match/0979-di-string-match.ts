function diStringMatch(s: string): number[] {
    let small: number = 0;
    let large: number = s.length;
    let arr: number[] = [];


    for (let i = 0; i <= s.length; i++) {
        if (s[i] === "I") {
            arr.push(small)
            small++
        } else {
            arr.push(large)
            large--
        }
    }
    return arr
};