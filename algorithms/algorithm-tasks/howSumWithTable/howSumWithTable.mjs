export function howSumWithTable(target, nums) {
    const table = Array(target + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= target; i++) {
        if (table[i] !== null) {
            for (const num of nums) {
                if (table[i]) {
                    table[i + num] = [...table[i], num];
                }
            }
        }
    }

    return table[target]
}
