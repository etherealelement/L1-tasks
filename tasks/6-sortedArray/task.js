// инициализируем массив объектов
const objArr = [ 
    { name: 'John', age: 25 }, 
    { name: 'Jane', age: 25 },
    { name: 'Van', age: 26 },
    { name: 'Billy', age: 40 },
    { name: 'Slave', age: 25 }
  ]
  
  const sortedArray = (arr) => {
    // сортируем
   return arr.sort((a,b) => a.name === arr.name ? a.name.localeCompare(b.name) : a.age - a.age);
    
  }
  
  
  console.log(sortedArray(objArr));