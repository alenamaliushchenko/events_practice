// Завдання 1
// Приховати елемент після натискання кнопки
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент <div id="text"> зникав.

// Демонстрація роботи:

document.getElementById("hider").onclick = function() {
  document.getElementById("text").hidden = true;
}


// Завдання 2
// Сховати себе
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.

// Наприклад:
document.getElementById("hid").onclick = function() {
  this.hidden = true;
}

// Завдання 3
// Який обробник запуститься?
// У змінній button знаходиться кнопка. Спочатку на ній немає обробників.

// Який з обробників запуститься? Що буде виведено під час кліку після виконання коду?
let button = document.getElementById("hid");

button.addEventListener("click", () => alert("1"));

button.removeEventListener("click", () => alert("1"));

button.onclick = () => alert(2);
// Відповідь: 1 і 2.

// Перший обробник спрацює, тому що він не був вилучений методом removeEventListener. Щоб видалити обробник, необхідно передати саме ту функцію, яка була призначена як обробник. Попри те, що код ідентичний, в removeEventListener передається нова, інша функція.

// Щоб видалити функцію-обробник, потрібно десь зберегти посилання на неї, наприклад:

// function handler() {
//   alert(1);
// }

// button.addEventListener("click", handler);
// button.removeEventListener("click", handler);
// Обробник button.onclick спрацює все одно. Разом з addEventListener.

// Завдання 4
// Пересуньте мяч по полю
// Нехай мяч переміщається при натисканні на поле, туди, де був клік, ось так:
// Вимоги:

// Центр мяча повинен збігатися з курсором миші (якщо це можливо без перетину країв поля);
// CSS-анімація бажана, але не є обовязковою;
// Мяч у жодному разі не повинен перетинати межі поля;
// При прокручуванні сторінки нічого не повинно ламатися;
// Нотатки:

// Код повинен уміти працювати з різними розмірами мяча та поля, не привязуватися до будь-яких фіксованих значень.
// Використовуйте властивості event.clientX/event.clientY, щоб вирахувати координати миші при кліці.

const field = document.getElementById("field");
const ball = document.getElementById("ball");

// Змінна для збереження кута обертання
let currentRotation = 0; // Початковий кут обертання

  // Встановлюємо обробник події на поле
field.addEventListener('click', function (event) {
  moveBall(event.clientX, event.clientY);
});

function moveBall(x, y) {
  // Отримуємо відстань до верхнього лівого кута поля
  const fieldTop = field.offsetTop;
  const fieldLeft = field.offsetLeft;
  const fieldWidth = field.offsetWidth;
  const fieldHeight = field.offsetHeight;

  // Розмір м'яча (радіус)
  const ballRadiusX = ball.offsetWidth / 2;
  const ballRadiusY = ball.offsetHeight / 2;

  // Обчислюємо нові координати м'яча, враховуючи клік і радіус м'яча
  let ballX = (x - fieldLeft - ballRadiusX);  // Враховуємо радіус м'яча
  let ballY = (y - fieldTop - ballRadiusY); // Враховуємо радіус м'яча

  // Обмежуємо координати, щоб м'яч не виходив за межі поля
  ballX = Math.max(0, Math.min(ballX, fieldWidth - ball.offsetWidth));
  ballY = Math.max(0, Math.min(ballY, fieldHeight - ball.offsetHeight));

  // Задаємо нові позиції м'яча
  ball.style.top = ballY + "px";
  ball.style.left = ballX + "px";
  // Обертання м'яча
  // ball.style.rotate = parseInt(ball.style.rotate || 0) + 1 + "turn";
  currentRotation += 1; // Збільшуємо кут на 1 turn
  ball.style.transform = `rotate(${currentRotation}turn)`;

}




  
// Завдання 5


// Завдання 6


// Завдання 