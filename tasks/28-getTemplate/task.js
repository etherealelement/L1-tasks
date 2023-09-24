window.addEventListener("DOMContentLoaded", () => {
    "use strict";

    function createAndAddElement(templateId, parentSelector) {
        // Получаем шаблон по его идентификатору
        const template = document.getElementById(templateId);

        // Создаем копию содержимого шаблона
        const content = template.content.cloneNode(true);

        // Находим родительский элемент, куда нужно добавить новый элемент
        const parent = document.querySelector(parentSelector);

        // Добавляем копию содержимого шаблона в родительский элемент
        parent.appendChild(content);
    }

// Пример вызова функции с указанием идентификатора шаблона и селектора родительского элемента
    createAndAddElement('myTemplate', '#myParentElement');

})