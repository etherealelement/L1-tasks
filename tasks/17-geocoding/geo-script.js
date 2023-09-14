"use strict"
// Используем Yandex Maps API для получения данных
function init() {
    let suggestView1 = new ymaps.SuggestView('suggest');
}


// Создаем функцию-обертку debounce которая принимает нужную нам функцию, и число задержки
const debounce = (fn, ms) => {
    // Создаем переменную для использования замыкания
    let timeout;
    // Возвращаем новую функцию
    return function  ()  {
        // Инициализируем стрелочную функцию, в которой мы вызываем переданную функцию
        // С помощью apply привязываем контекст текущей функции и псевдомассив arguments
        const fnCall = () => {fn.apply(this, arguments)}
        clearTimeout(timeout);
        // Вызываем setTimeout и передаем туда функцию и колл-во задержки
        timeout = setTimeout(fnCall,ms);
    };


}
ymaps.ready(debounce(init,200));
