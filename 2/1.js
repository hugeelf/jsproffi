"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
    #books = []
    constructor(books){
        const checkDoubles = new Set(books)
        if(Array.from(books).length !== checkDoubles.size){
            throw new Error('Has doubles')
        }
        this.#books = Array.from(books)
    }
    
    get allBooks(){
        return this.#books
    }

    addBook(title){
        if (this.#books.includes(title)){
            throw new Error(`${title} Already exist`)
        }
        this.#books.push(title)
    }

    removeBook(title) {
        if (!this.#books.includes(title)){
            throw new Error (`${title} not in books list`)
        }
        this.#books.splice(this.#books.indexOf(title), 1)
    }
    hasBook(title){
        return console.log(this.#books.includes(title));
    }
}

const library = new Library(['1','2','3','4','5','6','7','8'])
console.log(library);
console.log(library.allBooks);
library.addBook('Silent Don')
console.log(library.allBooks);
library.removeBook('1')
console.log(library.allBooks);
library.hasBook('Silent Don');

