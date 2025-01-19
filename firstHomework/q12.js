//12. Create a Book class with properties title, author, and year. Add a method to display information about the book using template literals.
class Book{
    constructor(title, author, year){
        this.title=title;
        this.author=author;
        this.year=year;
    }
    displayInfo(){
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Year: ${this.year}`);
    }
}

let own= new Book("Legends of Nepal", "Chandish Sipai", 2025);
own.displayInfo();