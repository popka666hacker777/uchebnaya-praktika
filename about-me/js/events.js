console.log('Обработчики событий подключены');
const helloBtn = document.querySelector('#hello-btn');
const helloResult = document.querySelector('#hello-result');

helloBtn.addEventListener('click', function () {
    helloResult.textContent = 'Привет, студент!';
    
    helloResult.style.color = 'green';
    
    helloBtn.textContent = 'Уже нажато';
});
// Задача 2. Счётчик
let count = 0;

const counter = document.querySelector('#counter'); 
const plusBtn = document.querySelector('#plus-btn'); 
const minusBtn = document.querySelector('#minus-btn'); 
const resetBtn = document.querySelector('#reset-btn'); 
const plus5Btn = document.querySelector('#plus5-btn'); 

plusBtn.addEventListener('click', function () {
    count = count + 1;
    counter.textContent = count;
});

minusBtn.addEventListener('click', function () {
    count = count - 1;
    counter.textContent = count;
});

resetBtn.addEventListener('click', function () {
    count = 0;
    counter.textContent = count;
});

plus5Btn.addEventListener('click', function () {
    count = count + 5;
    counter.textContent = count;
});
// Задача 3. Ввод имени
const nameInput = document.querySelector('#name-input'); 
const nameResult = document.querySelector('#name-result'); 

nameInput.addEventListener('input', function () {
    const userName = nameInput.value.trim(); 

    if (userName === '') {
        nameResult.textContent = 'Введите ваше имя';
    } else {
        nameResult.textContent = `Привет, ${userName}!`; 
    }
});
// Задача 4. Переключение оформления
const colorBox = document.querySelector('#color-box'); 
const colorBtn = document.querySelector('#color-btn'); 

let isColored = false;

colorBtn.addEventListener('click', function () {
    if (isColored === false) {
        colorBox.style.backgroundColor = 'lightgreen'; 
        colorBox.textContent = 'Цвет включён';         
        colorBox.style.color = 'darkgreen';           
        isColored = true;
    } else {
        colorBox.style.backgroundColor = 'white';
        colorBox.textContent = 'Цвет выключен';      
        colorBox.style.color = 'black';              
        isColored = false;
    }
});
// Задача 5. Проверка формы (Имя + Возраст)
const feedbackForm = document.querySelector('#feedback-form');
const feedbackName = document.querySelector('#feedback-name');
const feedbackAge = document.querySelector('#feedback-age');
const formResult = document.querySelector('#form-result');

feedbackForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const userName = feedbackName.value.trim();
    const ageValue = feedbackAge.value.trim();

    if (userName === '') {
        formResult.textContent = 'Ошибка: введите имя';
        formResult.style.color = 'red';
        return; 
    }

    if (ageValue === '' || isNaN(Number(ageValue)) || Number(ageValue) <= 0) {
        formResult.textContent = 'Ошибка: введите корректный возраст';
        formResult.style.color = 'red';
        return;
    }

    formResult.textContent = `Спасибо, ${userName} ${ageValue} лет! Данные проверены.`;
    formResult.style.color = 'green';
});
// Задача 6. Калькулятор
const num1Input = document.querySelector('#num1');
const num2Input = document.querySelector('#num2');
const calcResult = document.querySelector('#calc-result');

const addBtn = document.querySelector('#add-btn');
const subBtn = document.querySelector('#sub-btn');
const mulBtn = document.querySelector('#mul-btn');
const divBtn = document.querySelector('#div-btn');

function calculate(operation) {
    const val1 = num1Input.value.trim();
    const val2 = num2Input.value.trim();

    if (val1 === '' || val2 === '') {
        calcResult.textContent = 'Ошибка: введите оба числа';
        calcResult.style.color = 'red';
        return;
    }

    const a = Number(val1);
    const b = Number(val2);
    let res = 0;

    if (operation === '+') {
        res = a + b;
    } else if (operation === '-') {
        res = a - b;
    } else if (operation === '*') {
        res = a * b;
    } else if (operation === '/') {
        if (b === 0) {
            calcResult.textContent = 'Ошибка: деление на ноль невозможно';
            calcResult.style.color = 'red';
            return;
        }
        res = a / b;
    }

    calcResult.textContent = `Результат: ${res}`;
    calcResult.style.color = 'green';
}

addBtn.addEventListener('click', function () {
    calculate('+');
});

subBtn.addEventListener('click', function () {
    calculate('-');
});

mulBtn.addEventListener('click', function () {
    calculate('*');
});

divBtn.addEventListener('click', function () {
    calculate('/');
});

