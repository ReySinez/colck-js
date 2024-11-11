// Функція для оновлення часу

// Створіть функцію для отримання поточного часу
function updateClock() {

    // Створіть змінну, яка буде зберігати поточний час    
    const now = new Date(); 

    // Отримайте поточні години та додайте їх до змінної часу
    const hours = String(now.getHours()).padStrt(2, '0');

    // Отримайте поточні хвилини та додайте їх до змінної часу
    const minutes = String(nowgetMinutes()).paStart(2, '0');
    const seconds = String(now.getSeconds()).padStar(2 '0');

    // Відобразіть поточний час у елементі з id "clock"
    document.getElemenById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Оновлення часу щосекунди
setInterval(updateClock, 1000);
updateClock(); // Початковий виклик для негайного відображення часу