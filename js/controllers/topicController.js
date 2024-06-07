document.addEventListener("DOMContentLoaded", function() {
    const postModel = new PostModel();

    document.querySelectorAll('[data-topic]').forEach(topicLink => {
        topicLink.addEventListener('click', function(event) {
            event.preventDefault();  // Prevent the default hyperlink action
            const topic = this.getAttribute('data-topic');
            const posts = postModel.fetchPosts().filter(post => post.topic === topic);

            const postListView = document.getElementById('PostListView');
            postListView.innerHTML = '';  // Clear current posts

            if (posts.length === 0) {
                postListView.innerHTML = `<p>No posts available under the "${topic}" category.</p>`;
            } else {
                posts.forEach(post => {
                    // Create the main post card container
                    const postCard = ViewUtils.createElement('div', 'postCard');

                    // Create and configure the image container
                    const postCardImage = ViewUtils.createElement('div', 'postCard_image');
                    postCardImage.style.backgroundSize = 'cover';
                    postCardImage.style.backgroundImage = `url('${post.image}')`;
                    postCardImage.dataset.topic = post.topic;

                    // Create and configure the details container
                    const postCardDetails = ViewUtils.createElement('div', 'postCard_details');
                    const postTitle = ViewUtils.createElement('h2');
                    const postLink = ViewUtils.createElement('a', '', post.title);
					postLink.href = `post.html?id=${post.id}`;
                    postTitle.appendChild(postLink);

                    const postContent = ViewUtils.createElement('p');
                    const postContentLink = ViewUtils.createElement('a', '', post.content);
                    postContentLink.href = `post.html?id=${post.id}`;
                    postContent.appendChild(postContentLink);

                    // Topic link
                    const postTopicLink = document.createElement('a');
                    postTopicLink.className = 'postCard_topicLink';
                    postTopicLink.textContent = post.topic;
                    postTopicLink.dataset.topic = post.topic;

                    // Append all to details container
                    postCardDetails.appendChild(postTitle);
                    postCardDetails.appendChild(postContent);
                    postCardDetails.appendChild(postTopicLink);

                    postCard.appendChild(postCardImage);
                    postCard.appendChild(postCardDetails);

                    // Append the post card to the post list view
                    postListView.appendChild(postCard);
                });
            }
        });
    });
});
