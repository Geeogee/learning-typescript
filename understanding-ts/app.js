// Posso specificare il tipo object
// Anche usando delle doppie graffe
// const person: {} = {
//     name: "Gioele",
//     age: 24
// };
// const person: {
//     name: string;
//     age: number;
// } = {
//     name: "Gioele",
//     age: 24
// }
// const person: object = {
//     name: "Gioele",
//     age: 24
// };
var person = {
    name: "Gioele",
    age: 24,
    hobbies: ["Gaming", "Cooking"] // string[] => array di stringhe
};
var favouriteActivities;
favouriteActivities = ['Test'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLowerCase());
    // console.log(hobby.map()); Typescript segna un errore, perché map() è una proprietà di array, non di string
}
