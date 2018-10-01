function goToPosts() {
    //1. get axios request for all posts
    axios.get('http://localhost:3000/posts')
    .then(posts => {
        console.log(posts);
        document.getElementById('listGroup').innerHTML = postsRender(posts);
    })
}
goToPosts();


