type Combinable = number | string;
type ConversionString = "combined numbers" | "combined strings"; // literal types

function combine(
        input1: Combinable, 
        input2: Combinable, 
        resultConversion: ConversionString
    ) {
    let result;
    // Spesso con le Union types bisogna fare un check runtime
    // Perché i types specificati nell'Union potrebbero non avere gli stessi metodi
    // O non è possibile applicare alcuni operatori
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'combined numbers') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    // if(resultConversion === "combined numbers") {
    //     return +result + " " + resultConversion;
    // } else {
    //     return result.toString() + " " + resultConversion;
    // }

    return result;
}

const combinedNumbers = combine(30, 40, "combined numbers");
console.log(combinedNumbers);

const combinedNumbersStrings = combine("30", "40", "combined numbers");
console.log(combinedNumbersStrings)

const combinedStrings = combine("Gioele", "Armiento", "combined strings");
console.log(combinedStrings);
