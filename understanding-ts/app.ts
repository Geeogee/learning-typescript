function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    // APPROCCIO JAVASCRIPT
    // NON NECESSARIO USANDO TYPESCRIPT
    // POTENDO DECIDERE I TIPI DI DATO DURANTE LA FASE DI SVILUPPO
    // console.log(typeof number1);
    // if(typeof n1 === 'number' && typeof n2 === 'number') {
    //     return n1 + n2;
    // }

    // throw new Error('Hai inserito un tipo di dato errato!')
    const result = n1 + n2;
    if(showResult) {
        console.log(phrase + result)
    } else {
        return result
    }
}

const number1 = 5;
const number2 = 7;
const printResult = true;
const resultPhrase = "Il risultato è: ";

add(number1, number2, printResult, resultPhrase);
