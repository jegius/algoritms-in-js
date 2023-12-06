export function memoizedFibanaссhi(n, memo = {}) {
    if (n in memo) {
        return memo[n];
    }

    if (n <= 2) {
        return 1;
    }

    memo[n] = memoizedFibanaссhi(n - 1, memo) + memoizedFibanaссhi(n - 2, memo);
    return memo[n];
}