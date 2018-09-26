function createNewPost(event) {
    event.preventDefault();
    // grab the values we need
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;
    const tag = document.getElementById('post-tag').value;
    const user = document.getElementById('post-user').value;

    console.log(title, content, tag, user);
    // set values to an object
    // post that object to the backend
    // get a response
    // return a success or a failure

  
//   axios.post('localhost:3000/', {
//     userId: '',
//     title: 
//     completed: false
//   })
//   .then(function (response) {
    
//   })
//   .catch(function (error) {
    
//   });
}