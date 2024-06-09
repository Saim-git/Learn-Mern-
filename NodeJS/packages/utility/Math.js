//Export without package
// module.exports = function sum(a, b) {
//     return a + b;
// }
// module.exports = function sub(a, b) {
//     return a - b;
// }
// module.exports = function mul(a, b) {
//     return a * b;
// }
// module.exports = function div(a, b) {
//     return a / b;
// }


//Export with package
export function sum(a, b) {
    return a + b;
}
export function sub(a, b) {
    return a - b;
}
export function mul(a, b) {
    return a * b;
}
export function div(a, b) {
    return a / b;
}

export default function circumference(r) {
    return 2 * 3.14 * r;
}

console.log("This is Math function")
