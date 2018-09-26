function createNewPost(event) {
    event.preventDefault();
    // grab the values we need
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;
    const tag = document.getElementById('post-tag').value;
    const user = document.getElementById('post-user').value;

    console.log(title, content, tag, user);
    // set values to an object
    const objToPost = {
        title,
        content,
        tag,
        user
    }
    // post that object to the backend
    axios.post('http://localhost:3000/posts', objToPost)
    // get a response
        .then(results => {
            //Success
            console.log(results);
        })
        .catch(err => {
            //failure
            console.log(error); 
        })
}