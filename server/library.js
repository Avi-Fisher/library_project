export class Library {

    constructor(libraryName, books = []) {
        this.name = libraryName
        this.books = books
    }


    validateBook(book) {

        if (this.books.find((e) => e.id === book.id) || typeof book.id !== `string` || book.id.length < 1) {
            console.log("The id is invalid")
            return false

        } else if (typeof book.title !== `string` || book.title.length < 1) {
            console.log("The titel is invalid");
            return false

        } else if (typeof book.category !== `string` || book.category.length < 1) {
            console.log("The category is invalid");
            return false

        } else if (typeof book.copies !== `number` || book.copies < 0) {
            console.log("The copies is invalid")
            return false

        } else if (typeof book.minCopies !== `number` || book.copies < 0) {
            console.log("The minCopies is invalid")
            return false

        } else if (typeof book.expiresAt !== `string` & book.expiresAt !== undefined & book.expiresAt !== "") {
            console.log("The expiresAt is invalid")
            return false
        }
        return true
    }


    addBook(book) {
        if (this.validateBook(book)) {
            this.books.push(book)

            console.log("book add sccussfely");
            return true
        }
        console.log("some deitels miss");
        return false
    }

    removeBook(bookId) {
        const index = this.books.findIndex((b) => b.id === bookId)

        if (index >= 0){
            this.books.splice(index,1)
            console.log("remove book");
            
            return true
        }
        console.log("The book not remove");
        
    }










}