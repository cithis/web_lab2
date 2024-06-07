document.addEventListener("DOMContentLoaded", function() {
    const model = new PostDetailModel();
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if (postId) {
        const postData = model.getPostById(postId);
        if (postData) {
            displayPost(postData);
        } else {
            console.error('Post not found!');
        }
    } else {
        console.error('No post ID provided!');
    }

    function displayPost(postData) {
        const postView = document.getElementById('PostView');
        if (postView) {
            postView.innerHTML = `
                <h1 style="text-align: center;">${postData.title}</h1>
                <div style="display: flex; justify-content: center; margin: 20px 0;">
                    <img src="${postData.image}" alt="${postData.title}" style="max-width: 100%; height: auto;">
                </div>
                <p style="text-align: justify; margin: 20px 0;">${postData.content}</p>
                <small style="display: block; text-align: center; margin-top: 20px;">Topic: ${postData.topic}</small>
            `;
        } else {
            console.error('PostView element not found!');
        }
    }
});
