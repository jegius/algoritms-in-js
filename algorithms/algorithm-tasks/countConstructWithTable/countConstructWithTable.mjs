export function countConstructWithTable(target, parts) {
    const table = Array(target.length + 1).fill(0);
    table[0] = 1;

    for (let i = 0; i < target.length; i++) {
        if (table[i]) {
            for (const part of parts) {
                if (target.slice(i, i + part.length) === part) {
                    table[i + part.length] += table[i];
                }
            }
        }
    }

    return table[target.length];
}