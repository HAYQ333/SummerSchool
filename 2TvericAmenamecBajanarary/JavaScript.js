
function maxComDen(a, b) {
    let max, min;
    if (a > b) {
        max = a;
        min = b;
    } else {
        max = b;
        min = a;
    }
    for (let i = min; i > 0; i--) {
        if (min % i === 0 && max % i === 0) {
            return i;
        }
    }
    return 1; // Default return if no common divisor is found
}

console.log(maxComDen(24, 6));
