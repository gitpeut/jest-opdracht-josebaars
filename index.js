
module.exports = {totDe: totDe, isPowerOf2: isPowerOf2};

// geeft het resultaat als je radix verheft tot de power macht
// geeft NaN als de macht kleiner is dan 0
function totDe( radix, power){
    if ( power < 0 ) return NaN;
    return radix ** power;
}

console.log( '9 tot de 0.5 ', totDe( 9,0.5));

// test of een getal een macht van 2 is, dus of het getal
// 2,4,8,16,... enzovoort is.
// Geeft true als dat zo is, false als dat niet zo is.
// maar als het getal groter is dan 2 tot de 128ste geeft de
// functie NaN terug.

function isPowerOf2( number ){
    let result = 0;
    for (let i = 0; i < 128 ; i++) {
        if ( (2 ** i) > number ) return false;
        if ( (2 ** i ) === number) return true;
    }
    return NaN;
}

console.log( 'is 64 power of 2 ', isPowerOf2( 64));
console.log( 'is 65 power of 2 ', isPowerOf2( 65));
console.log( 'is 2e20 power of 2 ', isPowerOf2( 2e20), 2e20);
console.log( '2**129 power of 2 ', isPowerOf2( (2**129) ), (2**29));
console.log( 'is 9e33333333333333 power of 2 ', isPowerOf2( 9e3333333333333));
