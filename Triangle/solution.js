class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    // 💬 Check if all the numbers are positive
    isPositive() {
        if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
            return false;
        } else {
            return true;
        }
    }

    // 💬 Check if is a triangle checking with the formula x+y >= z
    isTriangle() {
        if (
            this.a + this.b >= this.c &&
            this.a + this.c >= this.b &&
            this.b + this.c >= this.a
        ) {
            return true;
        } else {
            return false;
        }
    }

    // 💬 Equilateral is if a === b AND a === c AND b === c
    isEquilateral() {
        if (this.isPositive() && this.isTriangle()) {
            return this.a === this.b && this.a === this.c && this.b === this.c;
        } else {
            return false;
        }
    }

    // 💬 Isosceles is if a === b OR a === c OR b === c
    isIsosceles() {
        if (this.isPositive() && this.isTriangle()) {
            return this.a === this.b || this.a === this.c || this.b === this.c;
        } else {
            return false;
        }
    }

    // 💬 Scalene is if  a !== b AND a !== c AND b !== c
    isScalene() {
        if (this.isPositive() && this.isTriangle()) {
            return this.a !== this.b && this.a !== this.c && this.b !== this.c;
        } else {
            return false;
        }
    }
}

const triangle = new Triangle(1, 3, 1);
const result = triangle.isIsosceles(); // 🥚
console.log(result); // 🐣 false
