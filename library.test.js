import assert from "node:assert"
import { test } from "node:test"
import { Library } from "./server/library.js"
import { Book } from "./server/book.js"

const library = new Library("aaaa")

let book = new Book("123","Sprint","Drama",5,5)
library.addBook(book)

test("kdsfjdkjghdkl", () =>{assert.ok(library.validateBook(book))} )