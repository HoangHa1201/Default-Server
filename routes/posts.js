const express = require("express");
const router = express.Router();

const Post = require('../model/Post');


// get all the posts
router.get('/',(req,res) => {
    Post.find()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    })
})

// submit a post
router.post('/',(req,res) => {
    
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        linkImg: req.body.linkImg
    });
    post.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    })
});
// get details of a specific post
// router.get('/specific',(req,res) => {
//     res.send("Specific Post")
// })

module.exports = router;