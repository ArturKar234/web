console.log("Скрипт подключён");

const title = document.getElementById('main-title');
const paragraph = document.getElementById('main-paragraph');
const changeTextBtn = document.getElementById('change-text-btn');
const itemList = document.getElementById('item-list');
const newItemInput = document.getElementById('new-item-input');
const addItemBtn = document.getElementById('add-item-btn');

changeTextBtn.addEventListener('click', function() {
    paragraph.textContent = 'Текст абзаца был изменён!';
    title.style.color = 'blue';
});

function addListItemClickHandler(li) {
    li.addEventListener('click', function() {
        alert('Вы кликнули по элементу: ' + li.textContent);
    });
}

const listItems = itemList.getElementsByTagName('li');
for (let i = 0; i < listItems.length; i++) {
    addListItemClickHandler(listItems[i]);
}

addItemBtn.addEventListener('click', function() {
    const newValue = newItemInput.value.trim();
    
    if (newValue === '') {
        alert('Введите текст для нового элемента!');
        return;
    }
    
    const newLi = document.createElement('li');
    newLi.textContent = newValue;
    addListItemClickHandler(newLi);
    itemList.appendChild(newLi);
    newItemInput.value = '';
});

// ============================================
// ОРИГИНАЛЬНЫЙ КОД: Дата, форма, регистрация
// ============================================

const siteName = "VPN";
const now = new Date();
const year = now.getFullYear();
const hours = now.getHours();         
const dayOfWeek = now.getDay();      
let visitsToday = 1;

console.log("Тип siteName:", typeof siteName);
console.log("Тип year:", typeof year);
console.log("Тип visitsToday:", typeof visitsToday);

const footerText = document.getElementById("footer-text");
if (footerText) {
   footerText.textContent = `© ${year} ${siteName} — Все права защищены`;
}

let greeting = "";
if (hours >= 0 && hours <= 5) {
    greeting = "Доброй ночи!";
} else if (hours >= 6 && hours <= 11) {
    greeting = "Доброе утро!";
} else if (hours >= 12 && hours <= 17) {
    greeting = "Добрый день!";
} else {
    greeting = "Добрый вечер!";
}

const greetingElem = document.getElementById("greeting");
if (greetingElem) {
   greetingElem.textContent = greeting;
}

let dayText = "";
switch (dayOfWeek) {
    case 0:
    case 6:
        dayText = "Сегодня выходной";
        break;
    default:
        dayText = "Сегодня рабочий день";
        break;
}

const isWorkTime = dayOfWeek >= 1 && dayOfWeek <= 5 && hours >= 9 && hours < 18;
const workStatus = isWorkTime ? "Мы сейчас работаем" : "Мы сейчас не работаем";

const dayInfoElem = document.getElementById("day-info");
if (dayInfoElem) {
   dayInfoElem.textContent = `${dayText}. ${workStatus}.`;
}

const advantages = [
    "Мгновенная доставка ключей подключения",
    "Регулярные скидки до 99%",
    "Круглосуточная техническая поддержка"
];

const advantagesList = document.getElementById("advantages");
if (advantagesList) {
   advantages.forEach(function (item) {
       advantagesList.innerHTML += `<li>${item}</li>`;
   });
}

function isAdult(age) {
    return age >= 18;
}

function isValidName(name) {
    return name.trim().length >= 2;
}

function isValidEmail(email) {
    return email.includes("@") && email.includes(".");
}

function countDigits(text) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] >= "0" && text[i] <= "9") {
            count++;
        }
    }
    return count;
}

function getPasswordStrength(password) {
    const digits = countDigits(password);
    if (password.length >= 10 && digits > 0) {
        return "сильный";
    } else if (password.length >= 6 && digits > 0) {
        return "средний";
    } else {
        return "слабый";
    }
}

function validateForm(name, email, password, age) {
    const errors = [];

    if (!isValidName(name)) {
        errors.push("Имя должно содержать не менее 2 символов.");
    }
    if (!isValidEmail(email)) {
        errors.push("Введите корректный E-mail (должен содержать '@' и '.').");
    }
    if (password.length < 6) {
        errors.push("Пароль должен быть длиной не менее 6 символов.");
    } else if (countDigits(password) === 0) {
        errors.push("Пароль должен содержать хотя бы одну цифру.");
    }
    if (!isAdult(age)) {
        errors.push("Регистрация доступна только с 18 лет.");
    }

    return errors;
}

const form = document.getElementById("register-form");
const message = document.getElementById("form-message");
const submitBtn = document.querySelector('input[type="submit"]');

const users = [];
let failedAttempts = 0;

if (form) {
   form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const age = Number(document.getElementById("age").value);

        const errors = validateForm(name, email, password, age);

        if (errors.length > 0) {
           failedAttempts++;
           message.innerHTML = errors.join("<br>");
           message.className = "message error";

           if (failedAttempts >= 3) {
               if (submitBtn) {
                   submitBtn.disabled = true;
               }
               message.innerHTML += "<br><strong>Слишком много попыток ввода. Форма заблокирована.</strong>";
           }
        } else {
           failedAttempts = 0; 

           const user = {
               name: name.trim(),
               email: email,
               age: age,
               isAdult: isAdult(age),
               getInfo: function () {
                   return `${this.name} (${this.email})`;
               }
           };

           users.push(user);

           console.log("Вызов метода getInfo():", user.getInfo());
           console.log("Доступ через квадратные скобки user['email']:", user["email"]);
           console.log("Сериализация в JSON:", JSON.stringify(user));
           console.log("Текущий массив users:", users);
           console.log("Надёжность пароля:", getPasswordStrength(password));

           message.textContent = `Спасибо, ${user.name}! Зарегистрировано пользователей: ${users.length}`;
           message.className = "message success";

           form.reset();
        }
   });
}

// ============================================
// САМОСТОЯТЕЛЬНОЕ ЗАДАНИЕ: Два списка
// ============================================

const list1 = document.getElementById('list-1');
const list2 = document.getElementById('list-2');
const moveRightBtn = document.getElementById('move-right-btn');
const moveLeftBtn = document.getElementById('move-left-btn');
const moveMessage = document.getElementById('move-message');

// Переключение выделения элемента
function toggleSelection(li) {
    li.classList.toggle('selected');
}

// Добавление обработчика клика на все элементы списка
function addListClickHandler(ul) {
    const items = ul.getElementsByTagName('li');
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function() {
            toggleSelection(items[i]);
        });
    }
}

// Инициализация обработчиков для обоих списков
addListClickHandler(list1);
addListClickHandler(list2);

// Получение всех выделенных элементов
function getSelectedItems(ul) {
    const selected = [];
    const items = ul.getElementsByTagName('li');
    for (let i = 0; i < items.length; i++) {
        if (items[i].classList.contains('selected')) {
            selected.push(items[i]);
        }
    }
    return selected;
}

// Показ сообщения
function showMessage(text, isError = false) {
    moveMessage.textContent = text;
    moveMessage.className = isError ? 'error' : 'success';
    
    setTimeout(() => {
        moveMessage.textContent = '';
        moveMessage.className = '';
    }, 3000);
}

// Перемещение элементов между списками
function moveItems(fromList, toList) {
    const selectedItems = getSelectedItems(fromList);
    
    if (selectedItems.length === 0) {
        showMessage('⚠️ Выделите хотя бы один элемент для перемещения!', true);
        return;
    }
    
    selectedItems.forEach(function(li) {
        li.classList.remove('selected');
        fromList.removeChild(li);
        toList.appendChild(li);
        
        li.addEventListener('click', function() {
            toggleSelection(li);
        });
    });
    
    showMessage(`Перемещено элементов: ${selectedItems.length}`);
}

// Кнопка "→" (из списка 1 в список 2)
moveRightBtn.addEventListener('click', function() {
    moveItems(list1, list2);
});

// Кнопка "←" (из списка 2 в список 1)
moveLeftBtn.addEventListener('click', function() {
    moveItems(list2, list1);
});