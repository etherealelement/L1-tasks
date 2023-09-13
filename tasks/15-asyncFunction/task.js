"use strict";

const urlData = "https://dummyjson.com/products/1";

const getResourse = async (url) => {
    
    try {
        const res = await fetch(url)
        return await res.json();
    } catch (e) {
        throw new Error(e)
    }
}
getResourse(urlData).then(item => console.log(item)).catch(item => console.log(`Ошибка ${item}`))