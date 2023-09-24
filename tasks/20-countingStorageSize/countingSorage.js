"use strict"

window.addEventListener("DOMContentLoaded", () => {
    const getLocalStorageSize = () => {
        // создадим переменную с итоговым колл-вом данных
        let totalBytes = 0;

        // проходимся по всей длине localstorage и записываем
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i)
            let value = localStorage.getItem(key);
            totalBytes = key.length + value.length
        }

        // производим расчет памяти
        let totalKB = (totalBytes / 1024).toFixed(2);
        let totalMB = (totalKB / 1024).toFixed(2);
        console.log(`Использованно ${totalKB} из 4.00 МБ`);
    }

    getLocalStorageSize()
})

