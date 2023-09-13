"use strict"

const Book = {
    // создаем св-ва книги
    name: "Совершенный код",
    author: "Стив Макконел",
    yearOfPublication: 2022,
    // методы
    // для получения значения св-в книги.
    
    get getName() {
        return this.name
    },
    get getAuthor() {
        return this.author
    },
    get getYearOfPublication() {
        return this.yearOfPublication
    },
    // методы для записи новых значений.
    setName(name) {
        return this.name = name;
    },
    setAuthor(author) {
        return this.author = author;
    },
    setYearOfPublication(year) {
        // делаем type guard, проверяем на число
        if (typeof  year === "number") {
            return this.yearOfPublication = year;
        } else {
             throw new Error("Здесь должна быть не строка")
        }
    },
    
}


console.log(Book.setName("my fav book"))
console.log(Book.setAuthor("Jane"))
console.log(Book.setYearOfPublication(20))