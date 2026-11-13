console.log('Скрипт подключён');

const fullName = 'Лаврентьева Милена';
const group = 'ИС-1-25';
let pagesCount = 5;
const isStudent = true;

console.log('Имя: ' + fullName);
console.log(`Группа: ${group}, страниц на сайте: ${pagesCount}`);
pagesCount = pagesCount + 1;
console.log(`После доработки страниц: ${pagesCount}`);
console.log('Студент:', isStudent);

console.log(typeof 42);
console.log(typeof 'текст');
console.log(typeof true);
let notSet;
console.log(typeof notSet);
console.log('5' + 5);
console.log('5' - 2);
console.log(5 + 5);
console.log(Number('12') + 3);
console.log(Number('abc'));

const width = 8;
const height = 5;
console.log('Площадь:', width * height);
console.log('Периметр:', 2 * (width + height));

const mark1 = 5;
const mark2 = 4;
const mark3 = 5;
const mark4 = 4;
const mark5 = 5;
const average = (mark1 + mark2 + mark3 + mark4 + mark5) / 5;
console.log('Средний балл:', average.toFixed(2));

const totalMinutes = 135;
const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(`${totalMinutes} минут = ${hours} ч ${minutes} мин`);

const price = 1200;
const discountPercent = 15;
const discountAmount = (price * discountPercent) / 100;
const finalPrice = price - discountAmount;
console.log(`Размер скидки: ${discountAmount} руб., цена со скидкой: ${finalPrice} руб.`);

const city = '  Чебоксары  ';
console.log(city.length);
console.log(city.trim());
console.log(city.trim().toUpperCase());

const text = 'Практика по веб-разработке';
console.log(text.slice(0, 8));
console.log(text.includes('веб'));

const greeting = `Привет, ${fullName}! Добро пожаловать на сайт.`;
console.log(greeting);

const myPhrase = 'Изучаю основы JavaScript в колледже';
console.log('Длина фразы:', myPhrase.length);
console.log('Первые 5 символов:', myPhrase.slice(0, 5));
console.log('Заглавными буквами:', myPhrase.toUpperCase());
console.log('Есть ли слово JavaScript:', myPhrase.includes('JavaScript'));

// ===== Пара 23: условия и циклы =====

const number = 17;

if (number % 2 === 0) {
  console.log(number + ' – чётное');
} else {
  console.log(number + ' – нечётное');
}

if (number > 0) {
  console.log('Положительное');
} else if (number < 0) {
  console.log('Отрицательное');
} else {
  console.log('Ноль');
}

//const userNumber = Number(prompt('Введите целое число'));
/*
if (Number.isNaN(userNumber)) {
  console.log('Это не число');
} else if (userNumber % 2 === 0) {
  console.log(userNumber + ' – чётное');
} else {
  console.log(userNumber + ' – нечётное');
}*/

const score = 78;
let mark;

if (score < 0 || score > 100) {
  console.log('Баллы должны быть от 0 до 100');
} else if (score >= 90) {
  mark = 5;
  console.log(`Баллов: ${score}, оценка: ${mark}`);
} else if (score >= 75) {
  mark = 4;
  console.log(`Баллов: ${score}, оценка: ${mark}`);
} else if (score >= 60) {
  mark = 3;
  console.log(`Баллов: ${score}, оценка: ${mark}`);
} else {
  mark = 2;
  console.log(`Баллов: ${score}, оценка: ${mark}`);
}

console.log(5 === '5'); 
console.log(5 == '5');  
const dayNumber = 3;
let dayName;

switch (dayNumber) {
  case 1:
    dayName = 'понедельник';
    break;
  case 2:
    dayName = 'вторник';
    break;
  case 3:
    dayName = 'среда';
    break;
  case 4:
    dayName = 'четверг';
    break;
  case 5:
    dayName = 'пятница';
    break;
  case 6:
    dayName = 'суббота';
    break;
  case 7:
    dayName = 'воскресенье';
    break;
  default:
    dayName = 'такого дня нет';
}

console.log(`День ${dayNumber}: ${dayName}`);

const isWeekend = dayNumber === 6 || dayNumber === 7;
const isStudyDay = dayNumber >= 1 && dayNumber <= 5;

console.log('Выходной:', isWeekend);
console.log('будний день:', isStudyDay)

// Самостоятельно
const month = 4;
let season;

switch (month) {
  case 12:
  case 1:
  case 2:
    season = 'Зима';
    break;
  case 3:
  case 4:
  case 5:
    season = 'Весна';
    break;
  case 6:
  case 7:
  case 8:
    season = 'Лето';
    break;
  case 9:
  case 10:
  case 11:
    season = 'Осень';
    break;
  default:
    season = 'Некорректный месяц';
}

console.log(`Месяц ${month}: ${season}`);

for (let i = 1; i <= 10; i++) {
  console.log(`7 * ${i} = ${7 * i}`);
}

const n = 5;
let sum = 0;
let k = 1;

while (k <= n) {
  sum += k;
  k = k + 1;
}

console.log(`Сумма чисел от 1 до ${n}: ${sum}`);
11
const luckyNumber = 8;

for (let i = 1; i <= 10; i++) {
  console.log(`${luckyNumber} * ${i} = ${luckyNumber * i}`);
}
 // ===== Пара 24: функции и массивы 
 // Задача 9. Функции

// Создаём функцию greet с параметром name
// Параметр name принимает имя пользователя
function greet(name) {

    // Возвращаем строку приветствия
    // ${name} подставляет переданное имя
    return `Привет, ${name}!`;
  }
  
  // Вызываем функцию, передаём имя "Анна"
  // console.log() выводит результат в консоль
  console.log(greet('Анна'));
  
  // Повторно вызываем функцию с именем "Пётр"
  console.log(greet('Пётр'));
  
  
  // Создаём функцию isEven с параметром number
  // Функция проверяет, является ли число чётным
  function isEven(number) {
  
    // Оператор % находит остаток от деления
    // Если остаток от деления на 2 равен 0,
    // число является чётным и возвращается true
    // Иначе возвращается false
    return number % 2 === 0;
  }
  
  // Проверяем число 10
  // 10 % 2 = 0, поэтому результат true
  console.log(isEven(10));
  
  // Проверяем число 7
  // 7 % 2 = 1, поэтому результат false
  console.log(isEven(7));
// Проверка области видимости (из Задачи 9)
function test() {
    const inside = 'внутри';
    console.log(inside);
  }
  test();
  // console.log(inside); // При раскомментировании вызовет ReferenceError: inside is not defined
  
  // Самостоятельно: функция оценки по баллам
  function getMark(points) {
    if (points >= 90) {
      return 5;
    } else if (points >= 75) {
      return 4;
    } else if (points >= 60) {
      return 3;
    } else {
      return 2;
    }
  }
  
  console.log(getMark(95));
  console.log(getMark(80));
  console.log(getMark(65));
  console.log(getMark(30));
  
  
  // Задача 10. Стрелочные функции
  const square = (x) => x * x;
  const celsiusToFahrenheit = (c) => c * 9 / 5 + 32;
  const addNumbers = (a, b) => a + b;
  
  console.log(square(7));
  console.log(celsiusToFahrenheit(20));
  console.log(addNumbers(2, 3));
  
  // Самостоятельно: стрелочные версии rectangleArea и isEven
  const rectangleArea2 = (width, height) => width * height;
  const isEven2 = (number) => number % 2 === 0;
  
  console.log(rectangleArea2(5, 4));
  console.log(isEven2(10));
  console.log(isEven2(7));
  // Задача 11. Массивы
const subjects = ['Математика', 'Информатика', 'Физика'];
console.log(subjects.length); 
console.log(subjects[0]); // предмет с индексом 0 = Математика
console.log(subjects[subjects.length - 1]);

subjects.push('История'); // добавляет элемент в конец массива
console.log(subjects);
const removed = subjects.pop(); // .pop удаляет последний элемент
console.log('Удалили:', removed);

for (const subject of subjects) {
  console.log('Предмет: ' + subject);
}

const grades =[5, 4, 3, 5, 4];

function getAverage(list) {
  let total = 0;
  for (const value of list) {
    total += value;
  }
  return total / list.length;
}
console.log('Средняя оценка:', getAverage(grades).toFixed(2));

let best = grades[0];
for (const value of grades) {
  if (value > best) {
    best = value;
  }
}
console.log('Лучшая оценка:', best);

console.log(subjects[10]); 

let worst = grades[0];
for (const value of grades) {
  if (value < worst) {
    worst = value;
  }
}
console.log('Наименьшая оценка:', worst);

// Задача 12. map и filter
const numbers =[3, 8, 12, 5, 20, 1];
const doubled = numbers.map((x) => x * 2);
const big = numbers.filter((x) => x > 5);
console.log(doubled);
console.log(big);
console.log(numbers);

const names = ['Анна', 'Борис', 'Алексей', 'Верити'];
const startsWithA = names.filter((item) => item.startsWith('А'));
console.log(startsWithA.join(', '));
const upperNames = names.map((item) => item.toUpperCase());
console.log(upperNames);

// Самостоятельно (goodGrades и lengths)
const goodGrades = grades.filter((grade) => grade >= 4);
console.log('Количество оценок 4 и выше:', goodGrades.length);

const lengths = subjects.map((item) => item.length);
console.log('Длины названий предметов:', lengths);

function analyzeGrades(list) {
    const count = list.length;
    const avg = getAverage(list);
    const maxGrade = Math.max(...list);
    const minGrade = Math.min(...list);
    const twosCount = list.filter((grade) => grade === 2).length;
    const status = avg >= 3.5 && twosCount === 0 ? 'Зачёт' : 'Незачёт';
  
    console.log(`Количество оценок: ${count}`);
    console.log(`Средний балл: ${avg.toFixed(2)}`);
    console.log(`Лучшая оценка: ${maxGrade}, худшая оценка: ${minGrade}`);
    console.log(`Итог: ${status}`);
  }
  
  analyzeGrades([5, 4, 5, 4, 5]);
  analyzeGrades([3, 2, 4, 3, 3]);
  