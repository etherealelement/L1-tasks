class MathX {
    constructor() {}
  
    static fibonacci(n) {
      if (n <= 0) {
        return [];
      }
  
      const seq = [0, 1];
  
      for (let i = 2; i < n; i++) {
        seq.push(seq[i - 1] + seq[i - 2]);
      }
  
      return seq;
    }
  
    static isPrime(number) {
      if (number <= 1) {
        return false;
      }
  
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          return false;
        }
      }
  
      return true;
    }
  
    static getPrimeNumbers(n) {
      const primes = [];
      let number = 2;
  
      while (primes.length < n) {
        if (MathX.isPrime(number)) {
          primes.push(number);
        }
  
        number++;
      }
  
      return primes;
    }
  }