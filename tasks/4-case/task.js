export const DeclareModule = (() => {

    const getCaseForm = (number, forms) => {
      const cases = [2, 0, 1, 1, 1, 2];
      let index;
    
      if (number % 100 >= 5 && number % 100 <= 20) {
        index = 2;
      } else {
        index = cases[Math.min(number % 10, 5)];
      }
    
      return forms[index];
    }
    
    return {
      getCaseForm
    }
    
    })()