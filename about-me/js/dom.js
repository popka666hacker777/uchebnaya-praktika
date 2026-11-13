console.log("DOM подключен");

const mainTitle = document.querySelector('#main-title'); 
mainTitle.textContent = 'Моя первая работа с DOM'; 

//Задача 2.
const message = document.querySelector('#message'); 
message.textContent = 'Теперь я умею менять содержимое страницы!';

const studentName = 'Лавренентьева Милена';
const studentGroup = 'ИС-1-25';
const studentAge = '17';
document.querySelector('#student-name').textContent = `Студент: ${studentName}`; 

document.querySelector('#student-group').textContent = `Группа: ${studentGroup}`; 


// Задача 3. Изменение стилей
const productCard = document.querySelector('#product-card');

productCard.style.backgroundColor = '#42671488';
productCard.style.borderRadius = '10px'
productCard.style.padding = '24px';
productCard.style.border = '2px solid blue';
productCard.style.width = '300px';

const productPrice = document.querySelector('#product-price');

productPrice.style.color = 'green';
productPrice.style.fontWeight = 'bold';

// Задача 4. Работа со списком
const items = document.querySelectorAll('#subjects li');

console.log('Количество предметов:', items.length);

for (const item of items) {
  item.style.color = 'darkblue';
  item.style.fontSize = '20px';
}

// Задача 5. Управление классами
const statusText = document.querySelector('#status');

statusText.classList.add('success'); 
statusText.textContent = 'Статус: выполнено';

