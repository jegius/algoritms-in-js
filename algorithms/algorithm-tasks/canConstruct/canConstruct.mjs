export function canConstruct(target, wordBank, memo = {}) {
    if (target in memo) {
        return memo[target];
    }

    if (target === '') {
        return true;
    }
    
    if (wordBank.length === 0) {
        return false;
    }
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if (canConstruct(suffix, wordBank, memo)) {
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return memo[target];
}