function add(n1, n2, showResult, phrase) {
    // APPROCCIO JAVASCRIPT
    // NON NECESSARIO USANDO TYPESCRIPT
    // POTENDO DECIDERE I TIPI DI DATO DURANTE LA FASE DI SVILUPPO
    // console.log(typeof number1);
    // if(typeof n1 === 'number' && typeof n2 === 'number') {
    //     return n1 + n2;
    // }
    // throw new Error('Hai inserito un tipo di dato errato!')
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 7;
var printResult = true;
var resultPhrase = "Il risultato è: ";
add(number1, number2, printResult, resultPhrase);
