export default function two_crystal_balls(breaks: boolean[]): number {

    const jmpAmount = Math.floor(Math.sqrt(breaks.length));

    // gets middle amount
    let i = jmpAmount;
    
    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    // goes back sqrt of x
    i -= jmpAmount;

    // linearly searches for breaking point
    for (let j = 0; j < jmpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}