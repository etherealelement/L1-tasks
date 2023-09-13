"use strict";

// инициализируем стрелочную функцию.
const isPalindrome = (str) => {
   // изначально правильно тип аргумента функции
   // преобразуем исходную строку в массив избавляем от пробелов и превращаем обратно в строку
   // с этой же строкой проделываем тоже самое только разворачиваем методом reverse
   // после чего проверяем на строгое равенство и выводим результат на консоль
   return typeof str === "string" ? str.split("").filter(item => item !== " ").join("") === str.split("").filter(item => item !== " ").reverse().join("") : false;
}

console.log(isPalindrome("аргентина манит негра")) // true
console.log(isPalindrome("негр")) // false
console.log(isPalindrome("NIGGER")) // false
console.log(isPalindrome("ШАЛАШ")) // true