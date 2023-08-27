let stringArr = ["jinu", "jignesh", "rakesh"]

let guitars = ["Strat", "Les Paul", 5150]

let mixedData = ["jinu", 1, true]

// stringArr[0] = 12
stringArr[0] = "Kalesh"
stringArr.push("sharma")
console.log(stringArr);

guitars[0] = 21984
guitars.unshift("Kialeashhh")
// guitars.unshift(true)

console.log(guitars);

guitars = stringArr

// guitars = mixedData

mixedData = guitars


let test = []
let bands: string[] = []
bands.push("Jin helan")
// bands.push(1)
console.log(bands);


// tuple
let myTuple: [string, number, boolean] = ["jinu", 32, true]

// myTuple[2] = 2

let mixed = ["jinu", 32, false]

// mixed = myTuple


// myTuple = mixed



// objects 
let myObj: object
myObj = []

console.log(typeof myObj);
myObj = bands
myObj = {}


const exampleObj = {
    prop1: "Jignesh",
    prop2: true

}

exampleObj.prop1 = "Jinu"
exampleObj.prop2 = false



type Guitarist = {
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

// interface Guitarist  {
//     name: string,
//     active?: boolean,
//     albums: (string | number)[]
// }

let evh: Guitarist = {
    name: "jinu",
    active: false,
    albums: [12, "ji"]
}


let JM: Guitarist = {
    name: "jinu",
    active: false,
    albums: [12, "ji"]
}

const greetGuitar = (guitarist: Guitarist) => {
    if (guitarist.name) {

        return `Hello ${guitarist.name?.toUpperCase()}!`
    }
    return "Hello!"

}
console.log(greetGuitar(JM));


// ENUMS
// "Unlike most typescript features, Enums are not a type-level addition to Javascript but something added to the language and runtime"


enum Grade {
    U = 1,
    D,
    C,
    B,
    A
}

console.log(Grade.U);
