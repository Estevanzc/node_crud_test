const Post = require("../models/Post")
exports.getAllPosts = async (req, res, next) => {
    try {
        const [posts, _] = await Post.findAll()
        res.status(200).json({count: posts.length, posts})
    } catch (error) {
        console.log(error);
        next(error)
    }
}
exports.createPost = async (req, res, next) => {
    try {
        let {title, body} = req.body
        let post = new Post(0, title, body)
        post = await post.insertNewPost()
        res.status(201).json({message: post})
    } catch (error) {
        console.log(error);
        next(error)
    }
}
exports.changePost = async (req, res, next) => {
    try {
        let {id, title, body} = req.body
        let post = new Post(id, title, body)
        post = await post.updatePost()
        res.status(201).json({message: post})
    } catch (error) {
        console.log(error);
        next(error)
    }
}
exports.getPostById = async (req, res, next) => {
    try {
        let postId = req.params.id
        let [post, _] = await Post.findById(postId)
        res.status(200).json({post: post[0]})
    } catch (error) {
        console.log(error);
        next(error)
    }
}
exports.deletePostById = async (req, res, next) => {
    try {
        let postId = req.params.id
        let post = await Post.deletePost(postId)
        res.status(200).json({post: post})
    } catch (error) {
        console.log(error);
        next(error)
    }
}
