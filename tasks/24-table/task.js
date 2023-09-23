window.addEventListener("DOMContentLoaded", () => {
    "use strict";
    // Получаем оболочку для элементов таблицы
    const tableContent = document.querySelector(".table__name");
    const tableSurname = document.querySelector(".table__surname");
    const tablePhone = document.querySelector(".table__phone");
    const tableAddress = document.querySelector(".table__address");
    const tableCountry = document.querySelector(".table__country");
    const tableState = document.querySelector(".table__state");
    const tableIndex = document.querySelector(".table__index");
    const tableCount = document.querySelector(".table__count");
    // Количество загружаемых элементов
    let countPage = 40;
    // Функция загрузки данных
    const loadData = async (countPage) => {
        // для отлова ошибки воспользуемся try/catch
        try {
            // Выполним fetch-запрос на сервер
            const res = await fetch(`http://www.filltext.com/?rows=${countPage}&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true`)
            // Преобразуем данные в JSON
            const data = await res.json();
            return data
        } catch (e) {
            throw new Error(`Ошибка получения данных, код ошибки - ${e}`)
        }
    }
    const data = loadData(countPage).then(item => {
        // Отображаем данные на странице

        // Выводим порядковые номера
        item.forEach((item,id) => {
            const userCount = document.createElement("li");
            userCount.classList.add("table__count-item");
            userCount.innerHTML = `${id + 1}`
            tableCount.appendChild(userCount)
        })

        for (const itemElement of item) {
            console.log(itemElement)
            // Выводим имена
            const userName = document.createElement("li");
            userName.classList.add("table__content-item");
            userName.innerHTML = `${itemElement.fname}`;
            tableContent.appendChild(userName);
            // Выводим фамилии;
            const userSurname = document.createElement("li");
            userSurname.classList.add("table__surname-item");
            userSurname.innerHTML = `${itemElement.lname}`
            tableSurname.appendChild(userSurname);
            // Выводим телефон;
            const userPhone = document.createElement("li");
            userPhone.classList.add("table__phone-item");
            userPhone.innerHTML = `${itemElement.tel}`;
            tablePhone.appendChild(userPhone)
            // Выводим адресс
            const userAddress =  document.createElement("li");
            userAddress.classList.add("table__address-item");
            userAddress.innerHTML = `${itemElement.address}`;
            tableAddress.appendChild(userAddress)
            // Выводим город
            const userCountry =  document.createElement("li");
            userCountry.classList.add("table__country-item");
            userCountry.innerHTML = `${itemElement.city}`;
            tableCountry.appendChild(userCountry)
            // Выводим государство
            const userState =  document.createElement("li");
            userState.classList.add("table__state-item");
            userState.innerHTML = `${itemElement.state}`;
            tableState.appendChild(userState)
            // Выводим индекс
            const userIndex =  document.createElement("li");
            userIndex.classList.add("table__index-item");
            userIndex.innerHTML = `${itemElement.zip}`;
            tableIndex.appendChild(userIndex)
        }

    });

})