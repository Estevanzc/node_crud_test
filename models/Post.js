const db = require("../config/db")
const { post } = require("../routes/postRoutes")

class Post {
    constructor(title, body) {
        this.title = title
        this.body = body
    }
    save() {
        let d = new Date()
        let yyyy = d.getFullYear()
        let mm = d.getMonth() + 1
        let dd = d.getDate()

        let craetedAtDate = `${yyyy}-${mm}-${dd}`
        let sql = `
        INSERT INTO posts VALUES (default, '${this.title}', '${this.body}', '${craetedAtDate}')
        `
        return db.execute(sql)
    }
    static findAll() {
        let sql = "SELECT * FROM posts"
        return db.execute(sql)
    }
    static findById(id) {
        let sql = `SELECT * FROM posts WHERE id = ${id}`
        return db.execute(sql)
    }
}
module.exports = Post