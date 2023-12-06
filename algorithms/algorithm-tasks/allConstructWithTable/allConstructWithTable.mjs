export function allConstructWithTable(target, parts) {
    const table = Array(target.length + 1)
        .fill()
        .map(() => []);

    table[0] = [[]];

    for (let i = 0; i <= target.length; i++) {
        for (const part of parts) {
            if (target.slice(i, i + part.length) === part) {
               const newCombinations = table[i].map(subarray => [...subarray, part]);
               table[i + part.length].push(...newCombinations);
            }
        }
    }

    return table[target.length]
}