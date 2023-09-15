"use strict";

// Для проверки возьмем Яндекс Браузер

const getMaxLocalStorage = () => {
    // для отлова ошибки используем конструкцию try/catch
    try {
        // создаем ключ для записи в стор
        let testKey = '__test';
        // циклом наполняем стор до максимума
        for (let i = 0; i < 5; i++) {
        let testData = "x".repeat(1024 * 1024 * i)
            localStorage.setItem(testKey, testData);
        }

        // производим расчет объема данных
        // инициализируем переменную-накопитель
        let totalBytes = 0;

        // получаем с помощью цикла ключи и значения и записываем их длинну в переменную-накопитель
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i)
            let value = localStorage.getItem(key)
            totalBytes += key.length + value.length
        }

        // производим расчет
        let totalKB = (totalBytes / 1024).toFixed(2);
        let totalMB = (totalKB / 1024).toFixed(2);

        // возвращаем данные в мгб
        return totalMB;
    } catch (e) {
        // если стор переполнен, возвращаем максимальное его значение
        return 4.00
    }
}

console.log(`Максимальный объем данным в мб - ${getMaxLocalStorage()}`); // 4 mb максимальное значение, т.к при 5 мб выдается ошибка о переполнении