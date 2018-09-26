function goToPosts() {
    //1. get axios request for all posts
    document.getElementById('view').innerHTML = postsRender();
}
