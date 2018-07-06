"use strict";

const a = "qwertyuiop";
const b = "asdfghjkl";
const c = "zxcvbnm";
// console.log(typeof a);
// console.log(a.length);
const d = (a.length);
console.log(d);
const e = (b.length);
console.log(e);
const f = (c.length);
console.log(f);
console.log(a.charAt(0));
console.log(a.substr(-1));
console.log(b.charAt(0));
console.log(b.substr(-1));
console.log(c.charAt(0));
console.log(c.substr(-1));

let aFirst = a.indexOf('q');
let aLast = a.indexOf('p');
let bFirst = b.indexOf('a');
let bLast = b.indexOf('l');
let cFirst = c.indexOf('z');
let cLast = c.indexOf('m');

let sum = aFirst + aLast + bFirst + bLast + cFirst + cLast;
console.log(sum);

console.log(aFirst, aLast, bFirst, bLast, cFirst, cLast);

