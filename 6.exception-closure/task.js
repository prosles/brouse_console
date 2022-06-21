function parseCount(parseNumber) {
    let number = Number.parseInt(parseNumber);
    
    if (isNaN(number)) {
        throw new Error("Невалидное значение");
    }

    return number;
}

function validateCount(unParseNumber) {
     try {
        return parseCount(unParseNumber);
            } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(firstSide, secondSide, thirdSide){
        if (firstSide + secondSide < thirdSide || firstSide + thirdSide < secondSide || secondSide + thirdSide < firstSide) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.firstSide = firstSide;
        this.secondSide = secondSide;
        this.thirdSide = thirdSide;
    }

    getPerimeter() {
       return (this.firstSide + this.secondSide + this.thirdSide);
    }

    getArea(){
        let halfPerimeter = this.getPerimeter() / 2;
        return Number(Math.sqrt(halfPerimeter * (halfPerimeter - this.firstSide) * (halfPerimeter - this.secondSide) * (halfPerimeter - this.thirdSide)).toFixed(3));
    }
}

function getTriangle(firstSide, secondSide, thirdSide) { 
    try {
        return new Triangle(firstSide, secondSide, thirdSide);
    } catch (error) {
        return  new Object({
            getArea() {
                return "Ошибка! Треугольник не существует";
            },
            getPerimeter() {
                return "Ошибка! Треугольник не существует";
            }            
        });
    }
}

