let createPost = document.getElementById("newPost");
createPost.addEventListener("click", function( event ) {
    event.preventDefault();
    window.location.hash = `#/posts/new`
    // newPost();
document.getElementById("view").innerHTML =`
<div class="container">
    <form id="form" class="form" onsubmit="createNewPost(event)">
      <div class="form-group">
        <label for="post-title">Title:</label>
        <input
          id="post-title" 
          type="text" 
          class="form-control" 
          name="title">
      </div>
      <div class="form-group">
        <label for="post-content">Content:</label>
        <textarea
          id="post-content"
          class="form-control" 
          rows="5" 
          id="post-content" 
          name="post-content"
          value="">
      </textarea>
      </div>
      <div class="form-group">
        <label for="post-tag">Tag:</label>
        <input 
          type="text" 
          class="form-control" 
          name="tag" 
          id="post-tag">
      </div>
      <div class="form-group">
        <label for="post-user">User:</label>
        <input type="text" class="form-control" id="post-user">
      </div>
      <div class="form-group">
          <button type="Submit1" class="btn btn-info btn-large">Submit</button>
      </div>
    </form>
  </div>
`  
});