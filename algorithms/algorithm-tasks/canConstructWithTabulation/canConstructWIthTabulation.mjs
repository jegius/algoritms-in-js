export function canConstructWIthTabulation(target, parts) {
    const table = Array(target.length + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= target.length; i++) {
        if (table[i]) {
            for (const part of parts) {
                if (target.slice(i, i + part.length) === part) {
                    table[i + part.length] = true;
                }
            }
        }
    }
    return table[target.length];
}