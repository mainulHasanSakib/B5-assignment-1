"use strict";
function formatString(input, toUpper) {
    console.log(toUpper);
    if (toUpper === true || toUpper === undefined) {
        return input.toUpperCase();
    }
    else {
        return input.toLowerCase();
    }
}
console.log(formatString("brother"));
