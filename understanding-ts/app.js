function add(n1, n2) {
    return n1 + n2;
}
// Non avendo un return, il return type di questa funzione sara void
function printNumber(num) {
    console.log("Result is: " + num);
}
function addAndHandle(num1, num2, callback) {
    var result = num1 + num2;
    callback(result);
}
function printResult(result) {
    console.log("Callback: " + result);
}
var combineValues;
combineValues = add;
// combineValues = printNumber;
// combineValues = 10;
printNumber(combineValues(40, 50));
// addAndHandle(10, 20, printResult);
addAndHandle(10, 20, function (result) {
    console.log("Callback: " + result);
});
