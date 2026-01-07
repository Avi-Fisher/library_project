import crypto from "crypto"


export class Book {

    constructor(id = crypto.randomUUID(), title, category, copies, minCopies, expiresAt = undefined) {
        this.id = id
        this.title = title,
        this.category = category,
        this.copies = copies,
        this.minCopies = minCopies,
        this.expiresAt = expiresAt
    }
}





