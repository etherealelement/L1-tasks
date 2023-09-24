window.addEventListener("DOMContentLoaded", () => {
   "use strict";
    function recursionDOM(element) {
        // Выполняем определенное действие с узлом
        console.log(element.tagName);

        // Рекурсивно обходим потомков узла
        const childNodes = element.childNodes;
        for (let i = 0; i < childNodes.length; i++) {
            const childNode = childNodes[i];
            if (childNode.nodeType === Node.ELEMENT_NODE) {
                recursionDOM(childNode);
            }
        }
    }

// Пример вызова функции с указанием начального элемента
    const startingElement = document.body;
    recursionDOM(startingElement);
})