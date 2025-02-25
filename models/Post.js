const db = require("../config/db")
const { post } = require("../routes/postRoutes")

class Post {
    constructor(id = 0, title, body) {
        this.id = id
        this.title = title
        this.body = body
    }
    insertNewPost() {
        let d = new Date()
        let yyyy = d.getFullYear()
        let mm = d.getMonth() + 1
        let dd = d.getDate()

        let craetedAtDate = `${yyyy}-${mm}-${dd}`
        let result = db.query("INSERT INTO posts VALUES (default, ?, ?, ?)", [this.title, this.body, craetedAtDate])
        return result
    }
    static async findAll() {
        let result = await db.query("SELECT * FROM posts")
        return result
    }
    static findById(id) {
        let result = db.query("SELECT * FROM posts WHERE id = ?", [id])
        return result
    }
    updatePost() {
        let result = db.query("UPDATE posts SET title=?, body=? WHERE id=?", [this.title, this.body, this.id])
        return result
    }
    deletePost(id) {
        let result = db.query("DELETE FROM posts WHERE id=?", [id])
        return result
    }
}
module.exports = Post