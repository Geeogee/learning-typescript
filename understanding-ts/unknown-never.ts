let userInput: unknown;
let userName: string;

// userName = userInput;
if (typeof userInput === "string") {
    userName = userInput;
}

// Il type never viene utilizzato quando una funzione non ritorna MAI
// Nella funzione che segue, infatti, throw termina l'esecuzione del codice (non avendo un catch)
// Non avendo, così, MAI un return
function generateError(message: string, errorCode: number): never {
    throw {
        message: message,
        code: errorCode
    }
}

generateError("An error has occured", 500);
console.log("La funzione precedente è type never");