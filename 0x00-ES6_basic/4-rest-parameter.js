export default function returnHowManyArguments(...args) {
    let count = 0;
    for (arg of args) {
        count++;
    }
    return count;
}
