"use strict";

const stringToJson = (str) => {
    // если строка валидная, то мы парсим строку используя метод json.parse
    try {
        const result = JSON.parse(str)
        return result
    // если нет, то выводим ошибку в консоль
    } catch (e) {
        console.log(`${e} невалидный JSON формат строки`)
    }
}

console.log(stringToJson('{"name": "Billy", "age": 20, "city": "Moscow"}'))
