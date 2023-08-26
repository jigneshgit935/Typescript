import { tr } from "@faker-js/faker"

let myName: string
myName = "jinu"
// myName =21


let myNumber: number
myNumber = 21
// myNumber = "jinu"


let isLoading: boolean
isLoading = true
// isLoading = 2


let album: any
album = 3
album = "kohinoor"
album = true


// const sum = (a: number, b: number) => {
//     return a + b
// }

const sum = (a: number, b: string) => {
    return a + b
}


let card: string | number
card = 23
card = "jinu"
// card = true


// union type
let isActive: number | boolean
isActive = true
isActive = 23
// isActive = "j"


let re = /\w+/g
// let re: RegExp = /\w+/g