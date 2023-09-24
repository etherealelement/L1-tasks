window.addEventListener("DOMContentLoaded", () => {
    "use strict";
    // Получаем оболочку для элементов таблицы
    const tableName = document.querySelector(".table__name");
    const tableSurname = document.querySelector(".table__surname");
    const tablePhone = document.querySelector(".table__phone");
    const tableAddress = document.querySelector(".table__address");
    const tableCountry = document.querySelector(".table__country");
    const tableState = document.querySelector(".table__state");
    const tableIndex = document.querySelector(".table__index");
    const tableCount = document.querySelector(".table__count");
    const tableWrapper = document.querySelector(".table__pagination");
    // Функция загрузки данных
    let countPost = 1000;
    const loadData = async () => {
        // для отлова ошибки воспользуемся try/catch
        try {
            // Выполним fetch-запрос на сервер
            const res = await fetch(`http://www.filltext.com/?rows=${countPost}&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true`)
            // Преобразуем данные в JSON
            const data = await res.json();
            return data
        } catch (e) {
            throw new Error(`Ошибка получения данных, код ошибки - ${e}`)
        }
    }

    // создадим функцию для рендера
    const render = async () => {
        const postsData = await loadData();
        let currentPage = 1;
        let rows = 50;

        // функция для отрисовки данных в таблице
        const displayTable = (arrData, rowPerPage, page) => {
            [...document.querySelectorAll(".table__item")].forEach(item => {
                item.innerHTML = "";
            })
            // Создадим переменные для работы slice
            page--;
            const start = rowPerPage * page;
            const end = start + rowPerPage;
            // Выводим 50 элементов
            const paginatedData = arrData.slice(start, end)
            console.log(paginatedData)

            paginatedData.forEach((item, id) => {
                const userCount = document.createElement("li");
                userCount.classList.add("table__count-item");
                userCount.innerHTML = `${id + 1}`
                tableCount.appendChild(userCount)
            })
            for (const dataArrElement of paginatedData) {
        // Выводим имена
        const userName = document.createElement("li");
        userName.classList.add("table__content-item");
        userName.innerHTML = `${dataArrElement.fname}`;
                tableName.appendChild(userName);
        // Выводим фамилии;
        const userSurname = document.createElement("li");
        userSurname.classList.add("table__surname-item");
        userSurname.innerHTML = `${dataArrElement.lname}`
        tableSurname.appendChild(userSurname);
        // Выводим телефон;
        const userPhone = document.createElement("li");
        userPhone.classList.add("table__phone-item");
        userPhone.innerHTML = `${dataArrElement.tel}`;
        tablePhone.appendChild(userPhone)
        // Выводим адресс
        const userAddress = document.createElement("li");
        userAddress.classList.add("table__address-item");
        userAddress.innerHTML = `${dataArrElement.address}`;
        tableAddress.appendChild(userAddress)
        // Выводим город
        const userCountry = document.createElement("li");
        userCountry.classList.add("table__country-item");
        userCountry.innerHTML = `${dataArrElement.city}`;
        tableCountry.appendChild(userCountry)
        // Выводим государство
        const userState = document.createElement("li");
        userState.classList.add("table__state-item");
        userState.innerHTML = `${dataArrElement.state}`;
        tableState.appendChild(userState)
        // Выводим индекс
        const userIndex = document.createElement("li");
        userIndex.classList.add("table__index-item");
        userIndex.innerHTML = `${dataArrElement.zip}`;
        tableIndex.appendChild(userIndex)
    }

        }
        // функция отрисовки  колличества кнопок пагинации
        function displayPagination  (arrData,  rowPerPage)  {
            const pagesCount = Math.ceil(arrData.length / rowPerPage);

            for (let i = 0; i < pagesCount; i++) {
                const liEl = displayPaginationBtn(i + 1);
                tableWrapper.appendChild(liEl);
            }
        }
        // функция отрисовки кнопок пагинации
        function displayPaginationBtn (page) {
            const paginationItem = document.createElement("li");
            paginationItem.classList.add("table__pagination-item")
            paginationItem.innerHTML = `${page}`;

            paginationItem.addEventListener("click", () => {
                currentPage = page;
                displayTable(postsData,rows,currentPage)
            })

            return paginationItem;
        }

        displayTable(postsData,rows,currentPage);
        displayPagination(postsData, rows)
    }
    render()
})

