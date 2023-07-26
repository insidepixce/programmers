function countPrimes(start, end) {
    const isPrime = Array(end + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i <= end; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= end; j += i) {
                isPrime[j] = false;
            }
        }
    }

    let count = 0;
    for (let i = start; i <= end; i++) {
        if (isPrime[i]) {
            count++;
        }
    }

    return count;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    const n = parseInt(input, 10);
    if (n === 0) {
        rl.close();
    } else {
        const start = n + 1;
        const end = 2 * n;
        const result = countPrimes(start, end);
        console.log(result);
    }
});
