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

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        this.books = [book];
        if (this.state > 30) {
            this.books.push(book);
        }
    } 

    findBookBy(type, value) {
        for(let i = 0; i < this.books.length; i++) {
             if(this.books[i][type] === value) {
                 return this.books[i];
             } 
        }
        return null;
        }
    
    giveBookByName(bookName) {
        for(let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                 return  this.books.splice(i, 1)[0];
            }
        }
        return null;
        }
    }

    const library = new Library("Библиотека имени Ленина");

    library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
    library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
    library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
    library.addBook(new Magazine("Мурзилка", 1924, 60));
    
    console.log(library.findBookBy("name", "Властелин колец")); //null
    console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"
    
    console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
    library.giveBookByName("Машина времени");
    console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3
 

