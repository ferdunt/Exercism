// 💬 Create an array of resistor color in order
const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

const colorCode = (color) => {
    // 💬 Based in 'color' search its index value in 'COLORS' array
    return COLORS.indexOf(color);
};

let result = colorCode("red"); // 🥚 "red"
console.log(result); // 🐣 2