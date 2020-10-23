const isLeap = year => {
    let isLeap = false;

    // 💬 Check if  is divisible by 4
    if (year % 4 === 0) {
        // 💬 Check if is divisible by 100 but not by 400
        if (year % 100 === 0 && year % 400 !== 0) {
            isLeap = false;
        } else {
            isLeap = true;
        }
    }

    return isLeap;
};

const result = isLeap(1996); // true
console.log(result);
