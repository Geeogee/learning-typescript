var sumButton = document.querySelector("button");
// ! significa che avrò sempre un elemento con l'id specificato (mai un null)
// as HTMLInputelement è un typecasting, fa capire a typescript che tipo di elemento è quello indicato
var input1 = document.getElementById("number1");
var input2 = document.getElementById("number2");
function add(number1, number2) {
    return number1 + number2;
}
sumButton.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
