export function canSum(targetSum, numbers, memo = {}) {
    if (targetSum in memo) {
        return memo[targetSum];
    }

    if (targetSum === 0) {
        return true;
    }

    if (targetSum < 0) {
        return false;
    }

    for (const num of numbers) {
        const remainder = targetSum - num;
        if(canSum(remainder, numbers, memo) === true) {
            memo[targetSum] = true;
            return true;
        }
    }

    memo[targetSum] = false;
    return false;
}