class Shape {
    constructor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150,15 275,185 25,185" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Triangle, Square };