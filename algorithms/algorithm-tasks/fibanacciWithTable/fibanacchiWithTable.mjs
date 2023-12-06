export function fibanacchiWithTable(num) {
    const table = Array(num + 1).fill(0);
    table[1] = 1;

    for (let i = 0; i <= num; i++) {
        table[i + 1] += table[i];
        table[i + 2] += table[i];
    }

    return table[num];
}


