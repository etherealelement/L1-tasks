"use strict"

// адресс изображения
const imageUrl = "https://avatars.mds.yandex.net/i?id=eef7d4209d32f4df2bebd0c509dd614d7319a750-9229193-images-thumbs&n=13";


const loadImage = (url) => {
    // возвращаем промис
    return new Promise((resolve, reject) => {
        // для получения данных об изображении, воспользуемся встроенным классом Image
       const image = new Image();

       image.src = imageUrl;
       // пользуемся методом класса и создаём объект с нужными данными
       image.onload = () => {
           const imgInfo = {
               width: image.width,
               height: image.height,
               url: url,
           }
           // если данные пришли промис разрезолвится
           resolve(imgInfo);
       }

       image.onerror = () => {
           // обработка в случае ошибки
           reject(new Error(`Не удается получить изображение по адресу - ${url}`))
       }
    })
}
// вызов функции и обработка с помощью then
loadImage(imageUrl).then(item => {
    console.log("Изображение загружено успешно")
    console.log(`Ширина: ${item.width}`)
    console.log(`Высота: ${item.height}`)
    console.log(`URL: ${imageUrl}`)
}, rej => console.log(`ошибка - ${rej}`))