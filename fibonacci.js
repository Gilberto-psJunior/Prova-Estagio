function fibonacciCheck(n) {
    let a = 0, b = 1;
    let fibonacciSequence = [a];
    
    while (b <= n) {
        fibonacciSequence.push(b);
        [a, b] = [b, a + b];
    }

    if (fibonacciSequence.includes(n)) {
        return console.log(`O número ${n} pertence à sequência de Fibonacci.`);
    } else {
        return console.log(`O número ${n} não pertence à sequência de Fibonacci.`);
    }
}


console.log(fibonacciCheck(25));// predefinido
