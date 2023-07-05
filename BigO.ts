//  Big O
//as your input grows, how fast does computatiion or memory grow?

function sum_char_codes(n: string): number {
    let sum = 0;

    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
    }

    return sum;
}

// O(n) time complexity: look for loops ^^^

function sum_char_codes(n: string): number {
    let sum = 0;

    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
    }

    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
    }

    return sum;
}

// the above is O(2N) but we disregard constants so it's really O(N) ^^^^


function sum_char_codes(n: string): number {
    let sum = 0;

    for (let i = 0; i < n.length; ++i) {

        const charCode = n.charCodeAt(i);
        // Capital E
        if (charCode === 69) {
            return sum;
        }

        sum += n.charCodeAt(i);
    }

    return sum;
}

/*
    growth is with respect to the input

    constants are dropped

    worst case is usually the way we measure
*/

// O(N^2)
function sum_char_codes(n: string): number {
    let sum = 0;

    for (let i = 0; i < n.length; ++i) {
        for (let j = 0; j < n.length; ++j) {

            sum += n.charCodeAt(i);
        }
    }
    return sum;
}

// O(N^3)
function sum_char_codes(n: string): number {
    let sum = 0;

    for (let i = 0; i < n.length; ++i) {
        for (let j = 0; j < n.length; ++j) {
            for (let k = 0; k < n.length; ++k) {
                sum += n.charCodeAt(i);
            }
        }
    }
    return sum;
}