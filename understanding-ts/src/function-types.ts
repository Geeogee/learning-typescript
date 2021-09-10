function add(n1: number, n2: number): number {
    return n1 + n2;
}

// Non avendo un return, il return type di questa funzione sara void
function printNumber(num: number) {
    console.log("Result is: " + num);
}

function addAndHandle(num1: number, num2: number, callback: (result: number) => void) {
    const result = num1 + num2;
    callback(result);
}

function printResult(result: number) {
    console.log("Callback: " + result);
}

let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = printNumber;
// combineValues = 10;

printNumber(combineValues(40,50));
// addAndHandle(10, 20, printResult);
addAndHandle(10, 20, (result) => {
    console.log("Callback: " + result);
})
