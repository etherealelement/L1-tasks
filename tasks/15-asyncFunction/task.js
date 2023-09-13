"use strict";
// фейк api товаров
const urlData = "https://dummyjson.com/products/1";

// инициализируем асинхронную функцию с использованием синтаксиса async/await
const getResourse = async (url) => {
    // для отлова ошибок создаем try/catch конструкцию
    try {
        // c помощью метода fetch создаем GET запрос на сервер и обрабатываем его через await
        const res = await fetch(url);
        // возвращаем промис и преобразуем ответ встроенным методом в fetch .json()
        return await res.json();
    } catch (e) {
        // прокидываем ошибку в случае неудачи
        throw new Error(e)
    }
}
// выводим на консоль контент, в json формате
getResourse(urlData).then(item => console.log(item)).catch(item => console.log(`Ошибка ${item}`))