document.addEventListener("DOMContentLoaded", function() {
    const postModel = new PostModel();
    const posts = postModel.fetchPosts();

    posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'postCard';

        // Image container
        const postCardImage = document.createElement('div');
        postCardImage.className = 'postCard_image';
        postCardImage.style.backgroundImage = `url('${post.image}')`;
        postCardImage.style.backgroundSize = 'cover';
        postCardImage.dataset.topic = post.topic;

        // Create a link for the image
        const postImageLink = document.createElement('a');
        postImageLink.href = `post.html?id=${post.id}`;

        // Append the image to the link
        postImageLink.appendChild(postCardImage);

        // Details container
        const postCardDetails = document.createElement('div');
        postCardDetails.className = 'postCard_details';

        // Post title with link
        const postTitle = document.createElement('h2');
        const postLink = document.createElement('a');
        postLink.href = `post.html?id=${post.id}`;
        postLink.textContent = post.title;
        postTitle.appendChild(postLink);

        // Post content with link
        const postContent = document.createElement('p');
        const postContentLink = document.createElement('a');
        postContentLink.href = `post.html?id=${post.id}`;
        postContentLink.textContent = post.content;
        postContent.appendChild(postContentLink);

        // Topic link
        const postTopicLink = document.createElement('a');
        postTopicLink.className = 'postCard_topicLink';
        postTopicLink.href = `topic.html?topic=${post.topic}`;
        postTopicLink.textContent = post.topic;
        postTopicLink.dataset.topic = post.topic;

        // Append all to details container
        postCardDetails.appendChild(postTitle);
        postCardDetails.appendChild(postContent);
        postCardDetails.appendChild(postTopicLink);

        // Append image and details to the card
        postCard.appendChild(postCardImage);
        postCard.appendChild(postCardDetails);

        // Finally, append the post card to the post list view
        const postListView = document.getElementById('PostListView');
        if (postListView) {
            postListView.appendChild(postCard);
        } else {
            console.error('PostListView element not found!');
        }
    });

    // Add event listeners for edit and delete buttons if needed
    document.querySelectorAll('.editButton').forEach(button => {
        button.addEventListener('click', function() {
            const postId = this.dataset.postId;
            const postData = postModel.getPostById(postId);
            document.getElementById('postTitle').value = postData.title;
            document.getElementById('postContent').value = postData.content;
            document.getElementById('postImage').value = postData.image;
            document.getElementById('postTopic').value = postData.topic;
        });
    });

    document.querySelectorAll('.deleteButton').forEach(button => {
        button.addEventListener('click', function() {
            const postId = this.dataset.postId;
            postModel.deletePost(postId);
            alert("Post deleted successfully!");
            window.location.reload();
        });
    });
});
