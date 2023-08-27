"use strict";
let stringArr = ["jinu", "jignesh", "rakesh"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["jinu", 1, true];
// stringArr[0] = 12
stringArr[0] = "Kalesh";
stringArr.push("sharma");
console.log(stringArr);
guitars[0] = 21984;
guitars.unshift("Kialeashhh");
// guitars.unshift(true)
console.log(guitars);
guitars = stringArr;
// guitars = mixedData
mixedData = guitars;
let test = [];
let bands = [];
bands.push("Jin helan");
// bands.push(1)
console.log(bands);
// tuple
let myTuple = ["jinu", 32, true];
// myTuple[2] = 2
let mixed = ["jinu", 32, false];
// mixed = myTuple
// myTuple = mixed
// objects 
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Jignesh",
    prop2: true
};
exampleObj.prop1 = "Jinu";
exampleObj.prop2 = false;
// interface Guitarist  {
//     name: string,
//     active?: boolean,
//     albums: (string | number)[]
// }
let evh = {
    name: "jinu",
    active: false,
    albums: [12, "ji"]
};
let JM = {
    name: "jinu",
    active: false,
    albums: [12, "ji"]
};
const greetGuitar = (guitarist) => {
    var _a;
    if (guitarist.name) {
        return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`;
    }
    return "Hello!";
};
console.log(greetGuitar(JM));
// ENUMS
// "Unlike most typescript features, Enums are not a type-level addition to Javascript but something added to the language and runtime"
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
