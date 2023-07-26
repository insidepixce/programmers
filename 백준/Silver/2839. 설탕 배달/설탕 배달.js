function sugarDelivery(N) {

    let count5kg = Math.floor(N / 5);
    let remainingKg = N % 5;


    while (count5kg >= 0) {
        if (remainingKg % 3 === 0) {
            const count3kg = remainingKg / 3;
            return count5kg + count3kg;
        }

        count5kg--;
        remainingKg += 5;
    }


    return -1;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    const N = parseInt(input, 10);
    const result = sugarDelivery(N);
    console.log(result);
    rl.close();
});
