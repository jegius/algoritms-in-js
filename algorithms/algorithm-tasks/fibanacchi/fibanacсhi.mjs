export function fibanaсchi(number) {
    if (number <= 2) {
        return 1;
    }
    return fibanaсchi(number - 1) + fibanaсchi(number - 2)
}