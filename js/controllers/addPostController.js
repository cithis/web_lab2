document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('addPostForm');
    const postModel = new PostModel();

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const title = document.getElementById('postTitle').value;
        const content = document.getElementById('postContent').value;
        const image = document.getElementById('postImage').value;
        const topic = document.getElementById('postTopic').value;

        const newPost = {
            title, content, image, topic
        };

        try {
            postModel.addPost(newPost);
            alert('Post added successfully!');
            // form.reset();
            window.location.href = 'index.html';
        } catch (error) {
            alert('Failed to add post: ' + error.message);
        }
    });
});
