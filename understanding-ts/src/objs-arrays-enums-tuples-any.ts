
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

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; // Tuple: un array che avrà lunghezza e tipi definiti
// } = {
//     name: "Gioele",
//     age: 24,
//     hobbies: ["Gaming", "Cooking"], // string[] => array di stringhe
//     role: [7, "Administrator"]
// }

// Pur essendo un Tuple, push() è un'eccezione. Typescript non darà alcun errore
// anche avendo definito un Tuple con due elementi
// person.role.push("Another role"); 

// Tuple di due elementi, non consente l'inserimento di un terzo
// person.role = [2, "Moderator", "Third"];

// Non più assegnabile essendo role un tuple con secondo elemento string 
// person.role[1] = 20; 
// console.log(person.role);

// Enum assegna delle etichette. ADMIN = 0, MODERATOR = 1 e così via
// In modo da avere dei dati numerici che corrispondono a delle etichette UMAN READABLE
// Senza enum:
// const ADMIN = 0;
// const MODERATOR = 1;
// const USER = 2;
enum Role {ADMIN, MODERATOR, USER};

// È possibile inizializzare un Enum anche con valori diversi da 0 --> 1 --> n
// enum Role { ADMIN = 100, MODERATOR = 200, USER = "USER"};

const person = {
    name: "Gioele",
    age: 24,
    hobbies: ["Gaming", "Cooking"],
    role: Role.ADMIN
};

let favouriteActivities: any; // Typescript accetterà ogni tipo di dato. !!! DA EVITARE !!!
favouriteActivities = ['Test']

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toLowerCase());
    // console.log(hobby.map()); Typescript segna un errore, perché map() è una proprietà di array, non di string
}

if(person.role === Role.ADMIN) {
    console.log(`${person.name} is admin`)
}