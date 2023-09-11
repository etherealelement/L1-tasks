"use strict";

const isPalindrome = (str) => {
    // получаем цельную строку без пробелов и сравниваем  
   return str === str.split("").filter(item => item !== " ").reverse().join("");
}

isPalindrome("аргентина манит негра");