export default function bs_list(haystack: number[], needle: number): boolean {

    // always ask yourself: is the list ordered?
    // if the input halves at each step, it's likely O(LogN) or O(NlogN)

    let low = 0;
    let high = haystack.length;

    do {
        // mid point
        const m = Math.floor(low + (high - low) / 2);

        // makes midpoint of the list the value 
        const v = haystack[m];

        // checks if value is found
        if (v === needle) {
            return true;
        }

        // checks if value is greater than what is needed to be searcehd
        // will check the left half
        else if (v > needle) {
            high = m;
        }

        // checks for right half
        else {
            low = m + 1;
        }

        // do until the high and low values are the same
    } while (low < high);

    return false;
}