class PostModel {
    constructor() {
        this.posts = JSON.parse(localStorage.getItem('posts')) || [];
    }

    fetchPosts() {
        return this.posts;
    }

    addPost(postData) {
        postData.id = this.posts.length + 1;
        this.posts.push(postData);
        localStorage.setItem('posts', JSON.stringify(this.posts));
        return postData;
    }

    getPostById(id) {
        return this.posts.find(post => post.id === id);
    }

    editPost(id, newData) {
        const index = this.posts.findIndex(post => post.id === id);
        if (index !== -1) {
            this.posts[index] = {...this.posts[index], ...newData};
            localStorage.setItem('posts', JSON.stringify(this.posts));
        } else {
            throw new Error("Post not found");
        }
    }

    deletePost(id) {
        const filteredPosts = this.posts.filter(post => post.id !== id);
        this.posts = filteredPosts;
        localStorage.setItem('posts', JSON.stringify(this.posts));
    }
}
