export function bestSum(targetSum, numbers, memo = {}) {
    if (targetSum === 0) {
        return [];
    }
    if (targetSum < 0) {
        return null;
    }
    if (targetSum in memo) {
        return memo[targetSum];
    }

    let shortestCombination = null;

    for (const num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers, memo);

        if (remainderCombination !== null) {
            const combination = [...remainderCombination, num];


            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }
    memo[targetSum] = shortestCombination;
    return  shortestCombination;
}