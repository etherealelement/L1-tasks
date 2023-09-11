"use strict";

// Определяем класс узла связного списка
class ListNode {
    constructor(value) {
      this.value = value;  // Значение узла
      this.next = null;   // Ссылка на следующий узел
    }
  }
  
  // Функция преобразования JSON в связный список
  function jsonToLinkedList(json) {
    // Проверяем, что переданный JSON является массивом
    if (!Array.isArray(json)) {
      throw new Error('Invalid JSON input. Expected an array.');
    }
  
    // Если JSON пуст, возвращаем null
    if (json.length === 0) {
      return null;
    }
  
    // Создаем голову списка, инициализируем ее значением первого объекта
    const head = new ListNode(json[0]);
  
    // Текущий узел, с которым мы работаем
    let current = head;
  
    // Проходим по остальным объектам в JSON
    for (let i = 1; i < json.length; i++) {
      // Создаем новый узел
      const newNode = new ListNode(json[i]);
  
      // Устанавливаем ссылку на новый узел в текущем узле
      current.next = newNode;
  
      // Перемещаемся на новый узел
      current = newNode;
    }
  
    // Возвращаем голову списка
    return head;
  }
  
  // Пример использования:
  const json = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
  ];
  
  const linkedList = jsonToLinkedList(json);
  console.log(linkedList);  // ListNode { value: 1, next: ListNode { value: 2, next: ListNode { value: 3, next: null } } }