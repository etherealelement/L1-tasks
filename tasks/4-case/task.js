// Экспортируем модуль
export const DeclareModule = (() => {

    // Функция `getCaseForm` принимает число и массив форм слова
    const getCaseForm = (number, forms) => {
        const cases = [2, 0, 1, 1, 1, 2]; // Определяет правило согласования для разных числительных
        let index;

        // Проверяем особые случаи для чисел от 5 до 20, они используют третью форму
        if (number % 100 >= 5 && number % 100 <= 20) {
            index = 2;
        } else {
            // В остальных случаях выбираем форму согласно последней цифре числа
            index = cases[Math.min(number % 10, 5)];
        }

        return forms[index]; // Возвращаем соответствующую форму слова
    }

    return {
        getCaseForm
    }

})();