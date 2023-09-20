window.addEventListener("DOMContentLoaded", () => {
    "use strict"
    const getMaxCallStackSize = () => {
        // Выводим нужные значения в консоли браузера
        // с помощью встроенного объекта navigator определяем в каком браузере находится пользователь
        if (navigator.userAgent.indexOf("Chrome") !== -1) {
            let i = 0;
            const func = () => {
                i++;
                func();
            };
            try {
                func();
            } catch (e) {
                // Словили ошибку переполнения стэка и вывели значение счетчика в консоль
                console.log(`Максимальный размер стека вызовов в Chrome - ${i}`); //13922
            }
        }
        if (navigator.userAgent.indexOf("Opera") !== -1) {
            let i = 0;
            const func = () => {
                i++;
                func();
            };
            try {
                func();
            } catch (e) {
                // Словили ошибку переполнения стэка и вывели значение счетчика в консоль
                console.log(`Максимальный размер стека вызовов в Opera - ${i}`);
            }
        }

        if (navigator.userAgent.indexOf("Firefox") !== -1) {
            let i = 0;
            const func = () => {
                i++;
                func();
            };
            try {
                func();
            } catch (e) {
                // Словили ошибку переполнения стэка и вывели значение счетчика в консоль
                console.log(`Максимальный размер стека вызовов в Firefox - ${i}`);
            }
        }
    }
    getMaxCallStackSize();
})