"use strict"

const JsonData = {
    name: 'Van',
    age: 30,
    surname: 'DarkHolm'
};


const JsonToString  = (json) => {
    // для удобства - преобразовывем строку в массив
    let res = []
    // проходим циклом по объекту
    for (const [key,value] of Object.entries(json)) {
        // если число не ставим строковый литерал
        if (typeof value === "number") {
            res.push(`"${key}": ${Number(value)},`)
        } else {res.push(`"${key}": "${value}",`)}
    }
    // возвращаем готовую строку
    return `{${res.join("").split("").slice(0,-1).join("")}}`
}

console.log(JsonToString(JsonData));