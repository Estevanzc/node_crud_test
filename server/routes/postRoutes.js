const express = require("express")
const postControllers = require("../controllers/postControllers")
const router = express.Router()

//route get && post - /posts/
router.route("/")
    .get(postControllers.getAllPosts)
    .post(postControllers.savePost)

router.route("/:id")
    .get(postControllers.getPostById)
    .delete(postControllers.deletePostById)

module.exports = router
