const view = document.getElementById('view');

function goToForm() {
    view.innerHTML = `
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
  <div class="form-group">
        <label for="post-user1">User:</label>
        <input type="text" class="form-control" id="post-user1">
      </div>
  <div class="form-group">
        <label for="post-comment">Comments:</label>
        <textarea
          id="post-comment"
          class="form-control" 
          rows="5" 
          id="post-comment" 
          name="post-comment"
          value="">
      </textarea>
      </div>
      <div class="form-group">
      <div class="form-group">
      <button type="Submit2" class="btn btn-info btn-large">Submit</button>
  </div>
  
  
    `
}
