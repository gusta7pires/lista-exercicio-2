let fibonacci = []

fibonacci[0] = 1
fibonacci[1] = 1

for (let i = 2; i < 15; i++){
    fibonacci[i] = fibonacci[i-2] + fibonacci[i-1]
}

console.log('Vetor com 15 primeiros numeros de Fibonacci: ' + fibonacci)