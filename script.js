"use strict"

/* 
Один долар коштує 26 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

const START_VALUE = 10;
const END_VALUE = 100;
const STEP = 10;
const RATE = 26;

let result = [];
for (let i = START_VALUE; i <= END_VALUE; i += STEP) {
  console.log(`${i}$ = ${i*RATE}uah`);
}
