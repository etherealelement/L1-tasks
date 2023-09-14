"use strict";

// Устанавливаем библиотеку Moment.js через npm
(function(){
   const moment = require("moment");

   // Функция для форматирования даты в заданном формате
   const dateFormat = (date, format) => {
       return moment(date).format(format)
   }

   // Экспортируем функцию из модуля

    module.exports ={
       dateFormat,
    }

})();