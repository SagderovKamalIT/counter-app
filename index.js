let counterEl = document.querySelector('[data-find="counterValue"]'); // document - это и есть DOM
let addOnePoolButton = document.getElementById('addOnePoolButton'); // позволяет выбирать элементы на моей странице
let addTwoPoolButton = document.getElementById('addTwoPoolButton');
let resetButton = document.getElementById('resetButton');


console.log(addOnePoolButton.dataset); // dataset - свойство, которое собирает все отрибуты в один массив

const COUNTER_INITIAL_VALUE = 0; // все цифры лучше выносить в отдельные константы
                                 // константы пишутся заглавными буквами через подчеркивание

let counter = COUNTER_INITIAL_VALUE;
counterEl.innerText = counter;


addOnePoolButton.addEventListener("click", function () {
   counter = counter + parseInt(addOnePoolButton.dataset.pools); // parseInt - встроенная функция, которая из строки получает число
   counterEl.innerText = counter;
});

addTwoPoolButton.addEventListener("click", function () {
    counter = counter + parseInt(addTwoPoolButton.dataset.pools); // parseInt - встроенная функция, которая из строки получает число
    counterEl.innerText = counter;
 });

 resetButton.addEventListener("click", function () {
    counter = COUNTER_INITIAL_VALUE; // parseInt - встроенная функция, которая из строки получает число
    counterEl.innerText = counter;
 });

// button.addEventListener('click', function() {
//     counter = counter + 1;
   

//     counterText.innerText = counter; // внутри countertext меняю innerText
// }); // добавь обработку действий


// // DOM - Document Object Model - позволяет управлять элементами на странице

// console.log(document);