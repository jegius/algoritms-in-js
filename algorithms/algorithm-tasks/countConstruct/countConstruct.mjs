export function countConstruct(target, wordBank, memo = {}) {
    if (target in memo) {
        return memo[target];
    }

    if (target === '') {
        return 1;
    }

    let count = 0;

    for (const word of wordBank) {
        if (target.startsWith(word)) {
            count += countConstruct(target.slice(word.length), wordBank, memo);
        }
    }

    memo[target] = count;
    return count;
}