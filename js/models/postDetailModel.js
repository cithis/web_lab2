class PostDetailModel {
    constructor() {
        this.posts = JSON.parse(localStorage.getItem('posts')) || [];
    }

    getPostById(id) {
        return this.posts.find(post => post.id === parseInt(id));
    }
}
