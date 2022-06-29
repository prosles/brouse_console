//Задание 1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
       return this.state *= 1.5;
    }

    set state(number) {
        
        if (number < 0) {
            this._state = 0;
        } 
        if (number > 100) {
            this._state = 100;
        } else {
            this._state = number;
        }
    }
    get state() {
        return this._state;
    }    
} 

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = "magazine"; 
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
            this.type = "book";
            this.author = author;
    } 
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "detective";
    }
}


//Задание 2
class Student {
    constructor(name) {
        this.name = name;
        this.journal = {};
    }
        
    setSubject(subjectName) {
        if (this.journal.hasOwnProperty(subjectName) === true) {
             return console.log("Предмет уже существует");
        } else {
            this.journal[subjectName] = [];
        }
    }
    
    addMark(mark, subjectName) {
        if (this.journal.hasOwnProperty(subjectName) !== true) {
            this.journal[subjectName] = [];
            console.log("Несуществующий предмет. Предмет создан");
        }
        if((typeof mark === "number") && (mark >= 1) && (mark <= 5)) {
            this.journal[subjectName].push(mark); 
        } else {
            return console.log("Ошибка, оценка должна быть числом от 1 до 5");
            }  
        }
    
    getAverageBySubject(subjectName) {
        if (this.journal.hasOwnProperty(subjectName) === true) {
            let sum = 0;
            let marks = this.journal[subjectName];
            marks.forEach((item, idx, marks) => sum += item);
            let averageBySubject = sum / marks.length;
            return averageBySubject;
        } else {
            return console.log("Несуществующий предмет");
        }
    }
    
    getAverage() { 
        let sum = 0;
        let marks = Object.values(this.journal);
        let resultMarks = [];
        marks.forEach((item, idx, marks) => resultMarks = [].concat(resultMarks, item));
        resultMarks.forEach((item, idx, resultMarks) => sum += item);
        let average = sum / resultMarks.length;
        return average;
        }
        
    exclude(reason) { 
        delete this.journal;
        this.excluded = reason;
        }
    }
