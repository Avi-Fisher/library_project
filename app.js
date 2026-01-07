import { Book } from "./server/book.js";
import { Library } from "./server/library.js";

const library = new Library("aaaa")

let book = new Book("123","Sprint","Drama",5,5)
let book1 = new Book("123","Sprint1","Drama",5,5)
// let book2 = new Book("Sprint2","Drama",5,5)
// let book3 = new Book("Sprint3","Drama",5,5)
// let book4 = new Book("Sprint4","Drama",5,5)

if (library.validateBook(book)){

    library.addBook(book)
}
if (library.validateBook(book1)){

    library.addBook(book1)
}
// if (library.validateBook(book2)){

//     library.addBook(book2)
// }
// if (library.validateBook(book3)){

//     library.addBook(book3)
// }
// if (library.validateBook(book4)){

//     library.addBook(book4)
// }
console.log(library);
