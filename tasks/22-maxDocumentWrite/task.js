window.addEventListener("DOMContentLoaded", () => {
    "use strict"
        // Создадим переменную-счетчик
    let count = 0;


    function documentWriteCounter() {
        document.write = function() {
            // инкрементируем счетчик после каждого вызова
            count++;
            document.writeln.apply(document, arguments);
        };
    }
    // вызываем
    documentWriteCounter();
    document.write('Hello');
    document.write('World');
    console.log('Count:', count);
    // Объяснение

    //При вызове document.write() внутри самой себя происходит переписывание содержимого страницы.
    // Происходит последовательное выполнение вызовов document.write(), и каждый последующий вызов перезаписывает предыдущий результат.
    //После выполнения этого кода на странице будет отображено только содержимое последнего вызова document.write(), то есть:
    // Третий вызов document.write()
    // В каждом последующем вызове document.write(), предыдущее содержимое страницы будет полностью перезаписано новым содержимым.

})