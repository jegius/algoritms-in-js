export function allConstruct(target, wordBank, memo = {}) {
    if (target in memo) {
        return memo[target];
    }

    if (target === '') {
        return [[]];
    }

    const result = [];

    for (const word of wordBank) {
        if (target.startsWith(word)) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank, memo);
            const targetWays = suffixWays.map(way => [word,...way]);
            result.push(...targetWays);
        }
    }

    memo[target] = result;
    return result;
}