import crypto from "crypto"


export class Book {

    constructor(title,category,copies,minCopies,expiresAt){
        this.id = crypto.randomUUID()
        this.title = title,
        this.category = category,
        this.copies = copies,
        this.minCopies = minCopies,
        this.expiresAt = expiresAt
        }
}





