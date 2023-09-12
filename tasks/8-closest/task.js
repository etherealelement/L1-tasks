"use strict";
// создаем функцию которая возвращает другую функцию
function callFunctions(functionsArr) {

    // возвращаемая функция перебирает каждый элемент массива вызывая его, после чего пушит результат в массив
    return function() {
        const results = [];

        for (let i = 0; i < functionsArr.length; i++) {
            const result = functionsArr[i]();
            results.push(result)
        }

        return results;
    }
}

const functionArr = [
    () => {return "П"},
    () => {return "О"},
    () => {return "М"},
    () => {return "О"},
    () => {return "Г"},
    () => {return "И"},
    () => {return "Т"},
    () => {return "Е"},
]

// Вызываем функцию методом каррирования и получаем результат => ["П", "О", "М", "О", "Г", "И", "Т", "Е"]
console.log(callFunctions(functionArr)());
