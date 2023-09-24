const functions = [
    () => { console.log('Function 1'); },
    () => { console.log('Function 2'); },
    () => { console.log('Function 3'); }
  ];

// 1 способ, через цикл 
const calledFunctionWithLoop = (arr) => {
    // перебираем каждую функцию и вызываем ее
    for (let i = 0; i < arr.length; i++) {    
        arr[i]()
    }

}

console.log(calledFunctionWithLoop(functions));

//  2 способ рекурсивный

function callFunctionsRecursively(index) {
    if (index < functions.length) {
      const currentFunction = functions[index];
      currentFunction();
      callFunctionsRecursively(index + 1);
    }
  }
  
console.log(callFunctionsRecursively(0))