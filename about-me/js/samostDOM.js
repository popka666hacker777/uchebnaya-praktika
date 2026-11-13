

const disciplineName = 'УП.09 Веб-разработка';
const fullName = 'Лаврентьева Милена';
const groupNumber = 'ИС-1-25';
const topicsCount = 5;

document.querySelector('#course-discipline').textContent = `Дисциплина: ${disciplineName}`;
document.querySelector('#course-student').textContent = `Студент: ${fullName}`;
document.querySelector('#course-group').textContent = `Группа: ${groupNumber}`;
document.querySelector('#course-topics').textContent = `Изучено тем JavaScript: ${topicsCount}`;

const courseResult = document.querySelector('#course-result');
courseResult.textContent = 'Практическая работа завершена';
courseResult.classList.add('success');
