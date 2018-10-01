function createNewComment(event) {
    event.preventDefault();
    // grab the values we need
    const comment = document.getElementById('post-comment').value;
    const user1 = document.getElementById('post-user1').value;

    console.log(comment, user1);
    // set values to an object
    const objToPost1 = {
        comment,
        user1
    }
    // post that object to the backend
    axios.post('http://localhost:3000/posts', objToPost1)
    // get a response
        .then(results => {
            //Success
            console.log(results);
        })
        .catch(err => {
            //failure
            console.log(err); 
        })
}
