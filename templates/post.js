function postEntity( postID ) {
    window.location.hash = `#/posts/${postID}`
    console.log(" I AM BEING CALLED");
    document.getElementById('view').innerHTML = `I am the entity of ${postID}`;
}
