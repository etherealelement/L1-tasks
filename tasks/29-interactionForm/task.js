window.addEventListener("DOMContentLoaded", () => {
    "use strict";
    const getFormSubmit = (formId) => {
        // Получаем форму по классу
        const sendForm = document.getElementById(formId);

        sendForm.addEventListener("submit", (e) => {
            // Отменяем стандартное действие отправки формы
            e.preventDefault();
            // получаем данные из формы 
            const formData = new FormData(sendForm);
            console.log(formData)

            // Создаем объект для хранения данных
            const data = {};

            // Преобразуем данные формы из объекта FormData в объект
            for (const [key, value] of formData.entries()) {
                data[key] = value;
            }

            // Отображаем данные во всплывающем окне
            alert(`Данные отправлены - ${JSON.stringify(data)}`);
        })

    }
    getFormSubmit("form");

})