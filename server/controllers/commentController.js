const createComment = async (req, res) => {
    try {
        const {
            postId,
            userId,
            username,
            profile_picture,
            comment
        } = req.body;
        const newComment = await Comment.create({
            userId,
            username,
            comment,
            profile_picture,
        });
        const post = await Post.findById(postId);
        const addComment = await post.comments.push(newComment);

        await post.save();
        res.json({
            msg: "Comment added sucessfully!",
            result: addComment
        });
    } catch (err) {
        res.json(err);
    }
};