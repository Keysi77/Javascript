/*
import {
    // daju sa aj premenovat pomocou as
    theGodNumber as nice,
    doMath as sum
 } from "./math.js"
*/
//default export
import Mario from "./math.js";
 // ak by som chcel naraz naimportovat vsetko oznacene slovom export
import * as math from './math.js';
 // math je len pomocne pole ktore importuje vsetko zo suboru math.js
console.log(
    // aby som ho mohol vypisat treba ho tu naimportovat
    // nice // theGodNumber - by teraz nefungovalo
    math.theGodNumber
);

console.log( 
    math.doMath(1,2,3) + "9" // z obkektu math
)

// default export / import
Mario.jump();