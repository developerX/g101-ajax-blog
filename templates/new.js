let createPost = document.getElementById("newPost");
createPost.addEventListener("click", function( event ) {
    event.preventDefault();
    window.location.hash = `#/posts/new`
    // newPost();
});

// function newPost( ) {
//     window.location.hash = `#/posts/new`
//     console.log("this is our form");
// }