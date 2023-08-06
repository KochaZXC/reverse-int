module.exports = function reverse(n) {
    let numToStroke = String(n);
    let reverseNum = '';

    for (let i = numToStroke.length - 1; i >= 0; i--) {
        if(isNaN(+numToStroke[i])) {
            continue;
        } else {
            reverseNum += numToStroke[i];
        }
    }
    return +reverseNum;
}

