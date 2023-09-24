const isStrangeNumber = (num) => {

    // если число меньше 1 вернем
    if (+num < 1) {
      return false;
    }

    // создадим переменную накопитель
    let sum = 0;
    // проходимся циклом по числу
    for (let i = 1; i < num; i++) {
      // если число делится без остатка заполняем переменную
        if (+num % i === 0) {
        sum += i;
      }
    }

    // сравниваем
    return sum === num;
  }

console.log(isStrangeNumber(123)) // false