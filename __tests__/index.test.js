
const { totDe, isPowerOf2 } = require("../index.js");


test("Kijk of x tot de yde de juiste waarde teruggeeft", ()=> {
    const a = 2;
    const b = 3;

    const c = totDe( a,b );
    expect(c).toBe( 8 );


});

test("Kijk of x tot -1 NaN teruggeeft", ()=> {
    const a = 2;
    const b = -1;

    const c = totDe( a,b );
    expect(c).toBeNaN();

});



test("kijk of 4096 true teruggeeft", ()=> {
    const getal = 4096;

    const c = isPowerOf2( getal );
    expect(c).toBeTruthy();

});

test("kijk of  333 false teruggeeft", ()=> {
    //ARRANGE
    const getal = 333;

    const c = isPowerOf2( getal );
    expect(c).toBeFalsy();

});

test("kijk of 9e99999999999999999 NaN teruggeeft", ()=> {
    //ARRANGE
    const getal = 9e99999999999999999 ;
    //ACT
    const c = isPowerOf2( getal );
    //ASSERT
    expect(c).toBeNaN();


});

