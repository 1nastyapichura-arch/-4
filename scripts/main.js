// ==========================================
// Практичне завдання 1 & 3: Вибір елементів сторінки
// ==========================================
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// ==========================================
// Практичне завдання 2: Зміна картинок при кліку
// ==========================================
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
};

// ==========================================
// Практичне завдання 3: Персоналізоване привітання
// ==========================================
function setUserName() {
    let myName = prompt('Please enter your name.');
    
    // Перевірка: якщо користувач нічого не ввів або натиснув Cancel
    if (!myName) {
        setUserName(); // Перезапускаємо функцію знову
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}

// Блок ініціалізації сторінки при запуску
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

// Прив'язка події кліку до кнопки "Change User"
myButton.onclick = function() {
    setUserName();
};