export function canSumWithTable(targetSum, numbers) {
    const table = Array(targetSum + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= targetSum; i++) {
        if (table[i]) {
            for(const num of numbers) {
                table[i + num] = true;
            }
        }
    }
    return table[targetSum];
}