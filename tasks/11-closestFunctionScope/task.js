"use strict"
const outerFunc = () => {
    // создаем внешнюю переменную
    let outer = "внешняя переменная"

    // создаем внутреннюю функцию, в данном случае функция обращается к внешней переменной и сохраняет ее в своем лексическом окружении,
    // после того, как внешняя функция отработала, внутренняя продолжает иметь доступ к внешней,
    // так как в ее LexicalEnvironment в объекте Record в свойсве сохранилась ссылка на переменную выше
    function innerFunc () {
        console.log(outer);
    }

    return innerFunc
}

console.log(outerFunc()())

// более укороченная запись

const outerFuncSecond = () => {
    // создаем внешнюю переменную
    let outer = "внешняя переменная"
    return function () {
        console.log(outer);
    }

}

console.log(outerFuncSecond()())