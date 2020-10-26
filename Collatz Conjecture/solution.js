const steps = number => {
    let counter = 0;

    // 💬 Check if is <= 0
    if (number <= 0) throw new Error("Only positive numbers are allowed");

    // 💬 Loop until the number is equal to 1
    while (number !== 1) {
        // 💬 Check if is even or odd
        if (number % 2 === 0) {
            number = number / 2;
        } else {
            number = number * 3 + 1;
        }

        // 💬 Increase in every loop
        counter++;
    }

    return counter;
};

const result = steps(-12); // 🥚
console.log(result); // 🐣 9
