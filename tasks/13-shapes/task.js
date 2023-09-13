"use strict";

// создаем класс абстрактной фигуры которая имеет конструктор и
// методы для расчета периметра и площади фигуры
class Shape {
    // инициализируем метод для создания объектов
    constructor(width, length) {
        this.width = width;
        this.length = length;
    }

    // метод для рассчета площади
    calculateSquare() {
        // проверяем на число, в противном случае прокидываем ошибку
        if (typeof this.width || this.length !== "number") {
            return this.width * this.length
        }
        throw new Error("Не число")
    }

    // метод расчета периметра
    calculatePerimeter() {
        // проверяем на число, в противном случае прокидываем ошибку
        if (typeof this.width || this.length === "number") {
            return 2 * (this.width * this.length);
        }
        throw new Error("Не число")
    }
}

// создаем класс прямоугольника, наследуемся от Shape
class Rectangle extends Shape {
    constructor(width, length) {
        // спользуем данный метод для
        super();
        this.name = "Прямоугольник"
        this.width = width;
        this.length = length;
    }

    // наследуем метод расчета площади у родительского класса
    calculateSquare() {
        return super.calculateSquare();
    }

// наследуем метод расчета периметра у родительского класса
    calculatePerimeter() {
        return super.calculatePerimeter();
    }
}

// треугольник

class Treangle extends Shape {
    constructor(base, height) {
        // спользуем данный метод для треугольника
        super();
        this.name = "Треугольник";
        this.base = base;
        this.height = height;
    }

    // Переопределение метода расчета площади
    calculateArea() {
        if (typeof this.base || this.height === "number") {
            return 0.5 * this.base * this.height;
        } else {
            throw new Error(`${this.base} и ${this.height} не числа`)
        }
    }

    // Переопределение метода расчета периметра
    calculatePerimeter() {
        // Допустим, все стороны треугольника равны
        if (typeof this.base || this.height === "number") {
            return 3 * this.base;
        } else {
            throw new Error(`${this.base} и ${this.height} не числа`)
        }
    }
}

// круг

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }


    // Переопределение метода расчета площади
    calculateArea() {
        if (typeof this.radius === "number") {

            return Math.PI * this.radius * this.radius;
        }
        throw new Error(`${this.base} и ${this.height} не числа`)
    }

    // Переопределение метода расчета периметра
    calculatePerimeter() {
        if (typeof this.radius === "number") {
            return 2 * Math.PI * this.radius;
        }
        throw new Error(`${this.base} и ${this.height} не числа`)
    }
}

// создаем экземпляры объектов
let rect = new Rectangle(12, 12);
let treangle = new Treangle(12, 30);
let circle = new Circle(12, 30);

console.log(rect.calculateSquare())
console.log(rect.calculatePerimeter())

console.log(treangle.calculatePerimeter())
console.log(treangle.calculateArea())

console.log(circle.calculateArea())
console.log(circle.calculatePerimeter())

