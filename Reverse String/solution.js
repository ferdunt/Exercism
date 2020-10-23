const reverseString = myString => {
    // 💬 Convert to array and reverse it
    return myString.split("").reverse().join("");
};

const result = reverseString("robot"); // 🥚
console.log(result); // 🐣 "tobor"
